function About() {
  return (
    <section id="about" className="pt-32 pb-8 md:pt-40 md:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium tracking-[0.18em] uppercase text-ink-faint mb-6">
          iOS Developer & Software Engineer
        </p>
        <h1 className="max-w-3xl font-serif text-4xl md:text-6xl leading-[1.15] text-balance text-ink mb-6">
          About me
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-ink-muted leading-relaxed mb-8">
          I began designing iOS apps in Swift and SwiftUI and have since expanded
          beyond to building web apps, testing applications, and more!
        </p>
        <div className="max-w-3xl space-y-5 text-ink-muted leading-[1.75] text-lg mb-10">
          <p>
            I am a young passionate developer who began working on iOS apps.
            My love for software began with curiosity around how computers
            worked and what exactly made one better than another. I've had a
            long love for all things science and enjoy finding ways to apply
            my skills to things that I'm actively interested in or currently
            working on!
          </p>
          <p>
            I hold a Bachelor of Science in Computer Science from the
            University of Wisconsin - Milwaukee and have had two internships
            to bolster my experience and skills as a software engineer. I currently work as a Software Engineer at GE Healthcare.
          </p>
        </div>
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

export default About;
