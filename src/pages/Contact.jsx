
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submission disabled in this environment.');
  };

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-lg"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-lg">
              Email: <a href="mailto:priyaiasdharshini@gmail.com" className="text-blue-600 hover:underline">priyaiasdharshini@gmail.com</a>
            </p>
            <p className="text-lg">
              Phone: <a href="tel:+918838184517" className="text-blue-600 hover:underline">+91 8838184517</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
