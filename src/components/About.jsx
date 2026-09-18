const skills = [
  'Swift',
  'SwiftUI',
  'UIKit',
  'Objective-C',
  'Java',
  'Python',
  'SQL',
  'React',
  'R',
  'Linux',
  'Xcode',
  'Core Data',
  'Combine',
  'Async/Await',
  'Git',
  'REST APIs',
  'MVVM',
  'Test-Driven Development',
];

function About() {
  return (
    <section id="about" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">About me</h2>
          <div className="space-y-5 text-ink-muted leading-[1.75] text-lg">
            <p>
              I am a young passionate developer who began working on iOS apps.
              My love for software started with curiosity around computer
              hardware and how each component affects the computer in some way,
              and better ways to leverage and visualize differences between
              hardware through software like video games and testing suites.
            </p>
            <p>
              I hold a Bachelor of Science in Computer Science from the
              University of Wisconsin - Milwaukee and have had two internships
              to bolster my experience and skills as a software engineer.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-ink-faint mb-4">
            Skills & technologies
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-3 py-1.5 text-sm text-ink-muted bg-surface border border-line rounded-full"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
