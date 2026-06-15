import React, { useState, useEffect } from "react";
import { 
  Newspaper, 
  ExternalLink, 
  RefreshCw, 
  AlertCircle, 
  Calendar, 
  Search, 
  Globe, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  SlidersHorizontal,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NewsItem {
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  category: string;
}

interface NewsAPIResponse {
  success: boolean;
  data?: {
    news: NewsItem[];
  };
  metadata?: any;
  error?: string;
  errorMsg?: string;
  isFallback?: boolean;
}

export const IndustryNews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const fetchNews = async () => {
      if (refreshTrigger === 0) {
        setLoading(true);
      } else {
        setIsRefreshing(true);
      }
      setError(null);

      try {
        const response = await fetch("/api/oil-gas-news");
        const json: NewsAPIResponse = await response.json();

        if (isMounted) {
          if (json.success && json.data?.news) {
            setNews(json.data.news);
            setIsFallback(!!json.isFallback);
          } else {
            setError(json.error || json.errorMsg || "Could not retrieve news from full-stack search grounding.");
          }
        }
      } catch (err: any) {
        if (isMounted) {
          setError("Network error: Make sure the server is booted and your GEMINI_API_KEY is configured.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          setIsRefreshing(false);
        }
      }
    };

    fetchNews();

    return () => {
      isMounted = false;
    };
  }, [refreshTrigger]);

  const handleRefresh = () => {
    if (!loading && !isRefreshing) {
      setRefreshTrigger(prev => prev + 1);
    }
  };

  const categories = ["All", ...Array.from(new Set(news.map(item => item.category)))];

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.source.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="industry-news" className="py-14 sm:py-20 bg-slate-900 border-t border-slate-800 text-slate-100 relative overflow-hidden">
      {/* Background Graphic Flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#005B94]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div className="max-w-xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {isFallback ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-sm text-[10px] font-mono tracking-widest uppercase border border-amber-500/20">
                  <AlertCircle className="h-3 w-3 text-amber-400" />
                  Resilient Archive Feed
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#005B94]/20 text-blue-400 rounded-sm text-[10px] font-mono tracking-widest uppercase border border-[#005B94]/30">
                  <Sparkles className="h-3 w-3 text-brand-orange animate-pulse" />
                  Real-time Google Grounding
                </div>
              )}
              {isFallback && (
                <div className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                  Quota limit auto-safe active
                </div>
              )}
            </div>
            <h2 className="text-2xl sm:text-3.5xl font-display font-black tracking-tight text-white leading-tight">
              Nigeria Oil &amp; Gas Industry News
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed font-sans">
              Stay ahead with fully verified, search-grounded daily industry briefings compiled directly from major African and world-class petroleum journals.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              disabled={loading || isRefreshing}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-750 text-slate-200 hover:text-white rounded-lg border border-slate-700 text-xs font-semibold cursor-pointer select-none transition disabled:opacity-50"
              id="refresh-news-btn"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-brand-orange ${isRefreshing ? "animate-spin" : ""}`} />
              {isRefreshing ? "Grounding live data..." : "Refresh Live Feed"}
            </button>
          </div>
        </div>

        {/* Resilient warning notice */}
        {isFallback && (
          <div className="mb-6 p-4 bg-amber-550/10 border border-amber-550/15 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-200">
            <p className="flex items-center gap-2 font-sans">
              <span className="p-1 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                <AlertCircle className="h-4 w-4" />
              </span>
              <span>
                <strong>Quota Protection Active:</strong> Live grounding rate limit was exceeded. The widget has seamlessly switched to high-quality curated petroleum news updates to keep your session live.
              </span>
            </p>
            <div className="text-[10px] text-slate-450 font-mono text-right">
              Add your custom <strong className="text-white">GEMINI_API_KEY</strong> in Settings to renew.
            </div>
          </div>
        )}

        {/* Filter Controls */}
        <div className="bg-slate-950/40 p-3 rounded-2xl border border-slate-800 mb-8 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Local Search input */}
          <div className="relative w-full sm:max-w-sm">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-slate-500" />
            </span>
            <input
              type="text"
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700/80 focus:border-brand-orange focus:outline-none rounded-xl text-xs placeholder:text-slate-500 text-white transition-colors"
              placeholder="Search news or outlets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Horizontal category tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <div className="flex-shrink-0 text-slate-500 mr-1 hidden md:block">
              <SlidersHorizontal className="h-3.5 w-3.5" />
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition select-none ${
                  selectedCategory === cat 
                    ? "bg-[#005B94] text-white font-bold" 
                    : "bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 border border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Area */}
        <AnimatePresence mode="wait">
          {loading ? (
            /* Animated Loading Skeleton and encouraging tickers */
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="text-center py-10 max-w-md mx-auto">
                <div className="relative inline-block mb-3">
                  <Globe className="h-10 w-10 text-brand-orange animate-pulse" />
                  <div className="absolute inset-0 bg-[#005B94]/20 rounded-full scale-150 animate-ping opacity-25" />
                </div>
                <h4 className="text-sm font-display font-bold text-white mb-1.5">Consulting Google Search Engine...</h4>
                <p className="text-slate-500 text-[11px] font-mono leading-relaxed">
                  Analyzing current upstream assets, completion contracts, and supply chain coordinates across Port Harcourt and Delta blocks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((val) => (
                  <div key={val} className="bg-slate-950/50 border border-slate-800/55 rounded-2xl p-5 space-y-3 animate-pulse">
                    <div className="flex items-center justify-between">
                      <div className="h-4.5 w-20 bg-slate-800 rounded-sm" />
                      <div className="h-3.5 w-16 bg-slate-800 rounded-sm" />
                    </div>
                    <div className="h-5 w-full bg-slate-800 rounded-sm" />
                    <div className="space-y-2 pt-2">
                      <div className="h-3.5 w-11/12 bg-slate-800 rounded-sm" />
                      <div className="h-3.5 w-4/5 bg-slate-800 rounded-sm" />
                    </div>
                    <div className="h-8 w-full bg-slate-800 rounded-lg mt-4" />
                  </div>
                ))}
              </div>
            </motion.div>
          ) : error ? (
            /* Custom visual error box that tells user how to setup API KEY beautifully */
            <motion.div 
              key="error"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-center"
            >
              <div className="inline-flex p-3 bg-brand-orange/10 rounded-full text-brand-orange border border-brand-orange/15 mb-4">
                <AlertCircle className="h-7 w-7" />
              </div>

              <h3 className="text-base sm:text-lg font-display font-extrabold text-white mb-2">
                Grounding Module Awaiting Setup
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-md mx-auto mb-6 leading-relaxed">
                {error.includes("GEMINI_API_KEY") ? (
                  "We have successfully initialized the full-stack grounding mechanism! However, this feature requires a valid Gemini API key to run safely on the server."
                ) : (
                  error
                )}
              </p>

              {error.includes("GEMINI_API_KEY") && (
                <div className="bg-[#0b132c] p-4 rounded-xl border border-blue-500/20 text-left space-y-3 max-w-lg mx-auto mb-6">
                  <h4 className="text-xs font-mono uppercase text-blue-400 font-bold tracking-wider">How to Unlock Real-time Feeds:</h4>
                  <ul className="text-[11px] text-slate-350 space-y-2 pl-3 list-decimal font-sans">
                    <li>Open the <strong className="text-white font-semibold">Settings</strong> menu near the top right of your AI Studio interface.</li>
                    <li>Click <strong className="text-white font-semibold">Secrets</strong> or environment configurations panel.</li>
                    <li>Add your <strong className="text-white font-semibold">GEMINI_API_KEY</strong> secret field with your official Google AI key.</li>
                    <li>Click saving confirmation and enjoy instant live search-grounded indexation!</li>
                  </ul>
                </div>
              )}

              <button
                onClick={handleRefresh}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-orange-600 font-semibold cursor-pointer text-xs uppercase text-white tracking-wider rounded-lg select-none transition shadow-lg hover:shadow-brand-orange/20"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Retry Grounding Search
              </button>
            </motion.div>
          ) : filteredNews.length === 0 ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-slate-950/20 border border-slate-800 rounded-2xl max-w-md mx-auto"
            >
              <Newspaper className="h-8 w-8 text-slate-600 mx-auto mb-3" />
              <h4 className="text-xs font-display font-extrabold text-slate-300">No Articles Match filters</h4>
              <p className="text-slate-550 text-[10px] mt-1 font-sans">
                Try clearing your search keyword query or select &ldquo;All&rdquo; categories.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="text-xs text-brand-orange font-bold hover:underline mt-4 cursor-pointer"
              >
                Reset Search Filters
              </button>
            </motion.div>
          ) : (
            /* News Grid Render */
            <motion.div 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredNews.map((item, idx) => {
                const colors: Record<string, { badge: string; border: string }> = {
                  Upstream: { badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/10", border: "border-cyan-500/30" },
                  Policy: { badge: "bg-violet-500/10 text-violet-400 border-violet-500/10", border: "border-violet-500/30" },
                  "Gas Projects": { badge: "bg-amber-500/10 text-amber-400 border-amber-500/10", border: "border-amber-500/30" },
                  Refining: { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/10", border: "border-emerald-500/30" },
                  "Local Content": { badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/10", border: "border-indigo-500/30" },
                  "Energy Market": { badge: "bg-rose-500/10 text-rose-400 border-rose-500/10", border: "border-rose-500/30" }
                };

                const fallbackColor = { badge: "bg-[#005B94]/10 text-blue-400 border-[#005B94]/10", border: "border-[#005B94]/20" };
                const designSchema = colors[item.category] || fallbackColor;

                return (
                  <motion.div
                    key={`${item.title}-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="bg-slate-950/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700/80 hover:shadow-xl hover:shadow-blue-950/10 transition-all flex flex-col justify-between group"
                  >
                    <div className="p-5 sm:p-6 space-y-4">
                      {/* Top Row: Category Card Badge and Outlet */}
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className={`px-2.5 py-0.5 border rounded-sm font-semibold tracking-wide ${designSchema.badge}`}>
                          {item.category.toUpperCase()}
                        </span>
                        <span className="text-slate-500 font-sans font-medium flex items-center gap-1">
                          <Globe className="h-3 w-3 text-slate-500" />
                          {item.source}
                        </span>
                      </div>

                      {/* Main News Title */}
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-display font-extrabold text-white group-hover:text-brand-orange-light transition-colors duration-200 line-clamp-2 tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-slate-400">
                          <Calendar className="h-3 w-3 text-[#005B94]" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Summary Analysis */}
                      <p className="text-slate-400 font-sans text-xs leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>

                    {/* Footer citation link */}
                    <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-800/40 bg-slate-950/30 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 hover:text-white transition cursor-default">
                        Source Reference Verified
                      </span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 active:bg-slate-750 font-sans font-semibold text-[10px] text-white rounded-lg border border-slate-700/50 hover:border-slate-600 transition duration-150 select-none cursor-pointer"
                        id={`news-link-${idx}`}
                      >
                        Read Article
                        <ExternalLink className="h-3 w-3 text-brand-orange" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
