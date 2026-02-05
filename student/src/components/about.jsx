const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <div className="w-full max-w-lg p-6 sm:p-10 bg-white rounded-xl shadow-lg border border-indigo-100">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-700 mb-6 tracking-wide">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center mb-8">
          Welcome to our Website! We are passionate about delivering quality
          products and services that truly make a difference.
        </p>

        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-3 border-b-2 border-indigo-200 inline-block">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To create user‑centric solutions that empower businesses and
            individuals alike, driving progress and success in every project.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-3 border-b-2 border-indigo-200 inline-block">
            Contact Us
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium">📧 Email:</span>{" "}
              <a
                href="mailto:karthikolluri123@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                karthikolluri123@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">📞 Phone:</span>{" "}
              <a
                href="tel:+919353391766"
                className="text-indigo-600 hover:underline"
              >
                9353391766
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;