import responsivewebsite from "../assets/responsivewebsite.png";
import quizapp from "../assets/quiz app.png";
import stopwatch from "../assets/stopwatch.png";
import ecommerce from "../assets/ecommerce.png";

function Projects() {
  const projects = [
    {
      title: "Responsive Website",
      description:
        "A fully responsive website built using HTML, CSS, JavaScript and React.js with a modern user interface.",
      tech: "React.js, Tailwind CSS",
      image: responsivewebsite,
      github:
        "https://github.com/bismaamjad558-star/reponsive-website-project",
    
    },
    {
      title: "Quiz App",
      description:
        "Interactive quiz application with score calculation and multiple-choice questions.",
      tech: "React.js, JavaScript",
      image: quizapp,
      github:
        "https://github.com/bismaamjad558-star/quiz-projects",
      
    },
    {
      title: "Stop Watch",
      description:
        "Digital stopwatch with start, stop and reset functionality.",
      tech: "JavaScript",
      image: stopwatch,
      github:
        "https://github.com/bismaamjad558-star/StopWatch-project",
      
    },
    {
      title: "E-Commerce Website",
      description:
        "Responsive e-commerce website with a clean and attractive user interface.",
      tech: "React.js, Tailwind CSS",
      image: ecommerce,
      github:
        "https://github.com/bismaamjad558-star/E-commerence-project",
      
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <p className="text-blue-600 font-semibold mb-5">
                  {project.tech}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    GitHub
                  </a>

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;