function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-6 pt-28 md:pt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-blue-600">Bisma Amjad</span>
          </h2>

          <h3 className="text-3xl font-semibold text-gray-700 mb-4">
            Full stack Developer (MERN)
          </h3>

          <p className="text-gray-600 mb-8 leading-7">
            I am a BS Computer Science student passionate about
            building responsive and modern web applications using
            React.js, JavaScript, HTML, CSS and Tailwind CSS.
          </p>

          <div className="flex gap-4">
           <a
  href="/Bisma_Amjad_CV-.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
>
  Download CV
</a>

            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
            alt="Full stack Developer"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;