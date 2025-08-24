const MainScreen = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-50/50 px-8 py-12">
      <article className="text-center max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-500 mb-6">
            Karma Yoga
          </h1>
        </header>

        <section className="space-y-8">
          <div className="text-3xl md:text-4xl font-medium text-background leading-relaxed">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
            <br />
            मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
          </div>

          <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
          </div>
        </section>
      </article>
    </main>
  )
}

export default MainScreen