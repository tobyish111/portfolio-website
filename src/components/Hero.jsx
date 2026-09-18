function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium tracking-[0.18em] uppercase text-ink-faint mb-6">
          iOS Developer & Software Engineer
        </p>
        <h1 className="max-w-3xl font-serif text-4xl md:text-6xl leading-[1.15] text-balance text-ink mb-6">
          My Projects
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-ink-muted leading-relaxed mb-10">
          I began designing iOS apps in Swift and SwiftUI and have since expanded beyond to building web apps, testing applications, and more!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-full hover:bg-accent transition-colors"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full border border-line text-ink hover:border-ink/30 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
