const Contact = () => {
  return (
    <div className="min-h-auto flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-lg mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full font-bold py-3 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <p>You can also reach me at:</p>
          <a
            href="mailto:kelsob@gmail.com"
            className="hover:underline"
          >
            kelsob@gmail.com
          </a>
        </div>
        <h1 className="text-5xl font-bold mb-2 mt-4 text-start">&lt;/Ben Kelso&gt;</h1>
      </div>
    </div>
  );
};

export default Contact;
