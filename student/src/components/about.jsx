

const AboutPage = () => {
  return (
    <div className="bg-white backdrop-blur-md border border-indigo-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-2xl font-semibold mb-4 text-indigo-700">About Us</h1>
      <p className="text-indigo-900">
        Welcome to our Website! We are passionate about delivering quality products and services that make a difference.
      </p>
      <section className="mb-6 mt-3">
        <h2 className="text-2xl font-semibold mb-2  text-indigo-700">Our Mission</h2>
        <p className="text-indigo-900">
          To create user-centric solutions that empower businesses and individuals alike, driving progress and success in every project.
        </p>
      </section>
      <section className="mt-3">
        <h2 className="text-2xl font-semibold mb-2  text-indigo-700">Contact Us</h2>
        <a href="mailto:karthikolluri123@gmail.com">Email : karthikolluri123@gmail.com</a><br/>
        <a href="tel:+919353391766">Phone : 9353391766</a>
      </section>
    </div>
  );
};

export default AboutPage;
