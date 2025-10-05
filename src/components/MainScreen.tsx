import { RefreshCcw } from "lucide-react";
import { quotes } from "../quotes";
import { useEffect, useState } from "react";

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
    <main className="min-h-screen flex items-center justify-center bg-amber-50/50 px-8 py-12 relative">
      <div
        onClick={handleRefresh}
        className="absolute top-0 right-0 m-6 p-2 hover:bg-amber-100 rounded-lg hover:shadow"
      >
        <RefreshCcw />
      </div>

      {quote && (
        <article className="text-center max-w-4xl mx-auto space-y-8">
          <header className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-500 mb-6">
              {quote.chapter_name}
            </h1>
          </header>

          <section className="space-y-8">
            <div className="text-3xl md:text-4xl font-medium text-background leading-relaxed">
              {quote.sanskrit}
            </div>

            <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {quote.english}
            </div>
          </section>
        </article>
      )}
    </main>
  );
};

export default MainScreen;
