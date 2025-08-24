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
            अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः।<br />
            प्राणापानसमायुक्तो पचाम्यन्नं चतुर्विधम्।।
          </div>

          <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            "Becoming the fire of digestion in the bodies of all living beings,
            and joining with the vital airs (prana and apana),
            I digest the four kinds of food."
          </div>
        </section>
      </article>
    </main>
  )
}

export default MainScreen