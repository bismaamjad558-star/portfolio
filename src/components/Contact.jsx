function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-10">
          Feel free to contact me for internships, freelance projects, or collaborations.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-8">

          <div className="space-y-5 text-lg">

            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:bismaamjad379@gmail.com"
                className="text-blue-600 hover:underline"
              >
                bismaamjad379@gmail.com
              </a>
            </p>

            <p>
              📱 <strong>Phone:</strong>{" "}
              <a
                href="tel:+923006611650"
                className="text-blue-600 hover:underline"
              >
                +92 300 6611650
              </a>
            </p>

            <p>
              📍 <strong>Location:</strong> Faisalabad, Pakistan
            </p>

            <p>
              💼 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/bismaamjad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/bismaamjad
              </a>
            </p>

            <p>
              💻 <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/bismaamjad558-star"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/bismaamjad558-star
              </a>
            </p>

          </div>

          <a
            href="mailto:bismaamjad379@gmail.com"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;