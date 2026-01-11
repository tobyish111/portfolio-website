import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in collaborating or have a question? Feel free to reach out!
            I'm always open to discussing new projects and opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:tdude37@me.com"
              className="flex items-center space-x-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-2xl" />
              <span className="font-medium">Email</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/toby-buckmaster-1235a2233/"
              className="flex items-center space-x-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
