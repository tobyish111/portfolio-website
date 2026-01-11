function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                I'm a passionate iOS developer and software engineer with a love for creating beautiful,
                intuitive mobile experiences. I hold a Bachelor of Science in Computer Science from the
                University of Wisconsin - Milwaukee, where I built a strong foundation in software development
                principles and best practices.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                With professional experience working as a software engineer, I bring a comprehensive understanding
                of the software development lifecycle to every project. Each app I build is a learning experience
                and an opportunity to solve real problems. I believe in writing clean, maintainable code and
                following iOS best practices to create apps that users love.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {['Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'Java', 'Python', 'SQL', 'React', 
                    'R', 'Linux', 'Xcode', 'Core Data', 'Combine', 'Async/Await', 'Git', 'REST APIs', 
                    'MVVM', 'Test-Driven Development'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
