import profile from "../assets/profile photo.jpg";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Bisma Amjad"
            className="w-80 h-80 rounded-full object-cover shadow-xl border-4 border-blue-600"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            Hello! I'm <span className="font-semibold text-blue-600">Bisma Amjad</span>, a BS Computer Science student and passionate Frontend Developer.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            I enjoy building responsive, modern, and user-friendly websites using React.js, JavaScript, HTML, CSS, and Tailwind CSS.
          </p>

          <p className="text-gray-600 leading-8 mb-6">
            My goal is to become a professional Full Stack Web Developer by creating real-world projects and continuously improving my skills.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Name:</h3>
              <p>Bisma Amjad</p>
            </div>

            <div>
              <h3 className="font-bold">Education:</h3>
              <p>BS Computer Science</p>
            </div>

            <div>
              <h3 className="font-bold">Specialization:</h3>
              <p>Frontend Development</p>
            </div>

            <div>
              <h3 className="font-bold">Location:</h3>
              <p>Pakistan</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;