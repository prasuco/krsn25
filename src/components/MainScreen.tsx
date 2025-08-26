import { quotes } from "../quotes";

const MainScreen = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-50/50 px-8 py-12">
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
    </main>
  );
};

export default MainScreen;
