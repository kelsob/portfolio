// src/pages/Contact.jsx

const Contact = () => {
    return (
      <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center p-6">
        <div className="max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-lg mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-lg mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-lg mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center">
            <p>You can also reach me at:</p>
            <a
              href="mailto:youremail@example.com"
              className="text-blue-400 hover:underline"
            >
              youremail@example.com
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  