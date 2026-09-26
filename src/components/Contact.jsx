import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
          Get in touch
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
          Interested in collaborating or have a question? I am always open to
          discussing new projects and opportunities.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:tdude37@me.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-full hover:bg-accent transition-colors"
          >
            <FaEnvelope />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/toby-buckmaster-1235a2233/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-line text-ink hover:border-ink/30 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
