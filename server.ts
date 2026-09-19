import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      service: "Grow Dons Services Ltd Corporate Web App",
      company: "Grow Dons Services Ltd",
      rc: "RC. 1902045"
    });
  });

  // SEO: robots.txt route
  app.get("/robots.txt", (req, res) => {
    const robotsPath = path.join(process.cwd(), "public", "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.sendFile(robotsPath);
    }
    res.type("text/plain").send("User-agent: *\nAllow: /\nSitemap: https://www.growdonsservices.com/sitemap.xml\n");
  });

  // SEO: sitemap.xml route
  app.get("/sitemap.xml", (req, res) => {
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      return res.sendFile(sitemapPath);
    }
    res.status(404).send("Sitemap not found");
  });

  // Dynamic Company Logo Upload Endpoint: Enables instant client-side logo upload & persistence
  app.post("/api/upload-logo", express.json({ limit: "25mb" }), (req, res) => {
    try {
      const { imageBase64, fileName } = req.body;
      if (!imageBase64 || typeof imageBase64 !== "string") {
        return res.status(400).json({ error: "Missing imageBase64 string" });
      }

      // Strip data url prefix if present (e.g. data:image/png;base64,...)
      const matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      const mimeType = matches ? matches[1].toLowerCase() : "";
      const buffer = matches ? Buffer.from(matches[2], "base64") : Buffer.from(imageBase64, "base64");

      const publicDir = path.join(process.cwd(), "public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      let ext = ".png";
      if (fileName && path.extname(fileName)) {
        ext = path.extname(fileName).toLowerCase();
      } else if (mimeType.includes("svg")) {
        ext = ".svg";
      } else if (mimeType.includes("jpeg") || mimeType.includes("jpg")) {
        ext = ".jpg";
      } else if (mimeType.includes("webp")) {
        ext = ".webp";
      }

      // Save companyLogo with detected extension as well as fallback companyLogo.png
      fs.writeFileSync(path.join(publicDir, `companyLogo${ext}`), buffer);
      fs.writeFileSync(path.join(publicDir, "companyLogo.png"), buffer);
      fs.writeFileSync(path.join(process.cwd(), `companyLogo${ext}`), buffer);
      fs.writeFileSync(path.join(process.cwd(), "companyLogo.png"), buffer);
      if (ext === ".svg") {
        fs.writeFileSync(path.join(publicDir, "companyLogo.svg"), buffer);
        fs.writeFileSync(path.join(process.cwd(), "companyLogo.svg"), buffer);
      }
      if (fileName) {
        fs.writeFileSync(path.join(publicDir, fileName), buffer);
      }

      console.log(`Custom company logo (${ext}) uploaded and saved successfully.`);
      return res.json({ success: true, url: `/companyLogo${ext}` });
    } catch (err: any) {
      console.error("Logo upload error:", err);
      return res.status(500).json({ error: err.message || "Failed to save logo" });
    }
  });

  // Dynamic Company Logo Endpoint: Serves user-uploaded companyLogo from root or assets
  app.get(
    [
      "/api/company-logo",
      "/companyLogo",
      "/companyLogo.png",
      "/companyLogo.jpg",
      "/companyLogo.jpeg",
      "/companyLogo.svg",
      "/companyLogo.webp"
    ],
    (req, res) => {
      const possibleNames = [
        "companyLogo",
        "companyLogo.png",
        "companyLogo.jpg",
        "companyLogo.jpeg",
        "companyLogo.svg",
        "companyLogo.webp",
        "companyLogo.ico",
        "companylogo",
        "companylogo.png",
        "companylogo.jpg",
        "companylogo.jpeg",
        "companylogo.svg",
        "companylogo.webp",
        "CompanyLogo",
        "CompanyLogo.png",
        "CompanyLogo.jpg",
        "CompanyLogo.jpeg",
        "CompanyLogo.svg",
        "company-logo.png",
        "company_logo.png",
        "company-logo.svg",
        "growdons_logo.png",
        "growdons-logo.png",
        "growdons_logo.svg",
        "growdons-logo.svg",
        "logo.png",
        "logo.svg",
        "logo.jpg",
        "logo.jpeg",
        "logo.webp"
      ];

      const searchDirs = [
        process.cwd(),
        path.join(process.cwd(), "public"),
        path.join(process.cwd(), "src/assets"),
        path.join(process.cwd(), "src/assets/images"),
        path.join(process.cwd(), "assets"),
      ];

      for (const dir of searchDirs) {
        for (const name of possibleNames) {
          const fullPath = path.join(dir, name);
          try {
            if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
              res.setHeader("Cache-Control", "no-cache");
              return res.sendFile(fullPath);
            }
          } catch {
            // continue checking
          }
        }
      }

      // Check if any file in root or public contains "logo" (case-insensitive)
      for (const dir of [process.cwd(), path.join(process.cwd(), "public")]) {
        try {
          if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            for (const file of files) {
              if (file.toLowerCase().includes("logo") && !file.endsWith(".ts") && !file.endsWith(".tsx")) {
                const fullPath = path.join(dir, file);
                if (fs.statSync(fullPath).isFile()) {
                  res.setHeader("Cache-Control", "no-cache");
                  return res.sendFile(fullPath);
                }
              }
            }
          }
        } catch {
          // ignore
        }
      }

      return res.status(404).json({ error: "Company logo file not found yet" });
    }
  );

  // Serve static assets in production, otherwise mount Vite dev middleware
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Grow Dons corporate server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server bootstrap error:", err);
});
