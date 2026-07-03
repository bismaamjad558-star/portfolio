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
              📧 <strong>Email:</strong> bismaamjad379@gmail.com
            </p>

            <p>
              📱 <strong>Phone:</strong> +92 300 6611650
            </p>

            <p>
              📍 <strong>Location:</strong> Faisalabad, Pakistan
            </p>

            <p>
              💼 <strong>LinkedIn:</strong> linkedin.com/in/bismaamjad
            </p>

            <p>
              💻 <strong>GitHub:</strong> github.com/bismaamjad558
            </p>

          </div>

          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>

        </div>
      </div>
    </section>
  );
}

export default Contact;