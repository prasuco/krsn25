import { RefreshCcw } from "lucide-react";
import { quotes } from "../quotes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IQuote {
  chapter: number;
  chapter_name: string;
  sanskrit: string;
  english: string;
}

const MainScreen = () => {
  const [quote, setQuote] = useState<IQuote | null>(null);

  const handleRefresh = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-50/50 px-8 py-12 relative overflow-hidden">
      <div
        onClick={handleRefresh}
        className="absolute top-0 right-0 m-6 p-2 hover:bg-amber-100 rounded-lg hover:shadow cursor-pointer"
      >
        <RefreshCcw />
      </div>

      <AnimatePresence mode="popLayout">
        {quote && (
          <motion.article
            key={quote.english} // triggers animation on refresh
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              mass: 0.6,
            }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <header className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold text-primary-500 mb-6"
              >
                {quote.chapter_name}
              </motion.h1>
            </header>

            <section className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl font-medium text-background leading-relaxed"
              >
                {quote.sanskrit}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              >
                {quote.english}
              </motion.div>
            </section>
          </motion.article>
        )}
      </AnimatePresence>
    </main>
  );
};

export default MainScreen;
