import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    character: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      character: formState.character
    };

    emailjs
      .send(
        'service_oanyykp', // Replace with your service ID
        'template_yktka93', // Replace with your template ID
        emailData,          
        'a7lqEperpqF1cTeMg' // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSent(true);
          setError(null);
          setFormState({ name: '', email: '', message: '', character: '' });
        },
        (err) => {
          console.log('FAILED...', err);
          setError('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-auto flex flex-col items-center justify-start p-6 pt-6">
      {/* Main Heading Above Both Columns */}
      <h1 className="text-4xl font-bold mb-8 text-left w-11/12 transition-colors duration-300">
        Get in Touch
      </h1>

      {/* Two Column Layout */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row gap-10">
        {/* Left Column: Form */}
        <div className="w-full sm:w-1/2">
          {isSent && (
            <p className="text-left text-green-500 mb-4">
              Message submitted. Thanks for reaching out!
            </p>
          )}
          {error && <p className="text-left text-red-500 mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-lg mb-2 transition-colors duration-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                className="block text-lg mb-2 transition-colors duration-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                className="block text-lg mb-2 transition-colors duration-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell me about your project, idea, or just say hello..."
                rows="5"
                value={formState.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div>
              <label
                className="block text-lg mb-2 transition-colors duration-300"
                htmlFor="character"
              >
                Your Favorite Lord of the Rings Character (Optional)
              </label>
              <input
                type="text"
                id="character"
                className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Aragorn, Legolas, Gollum..."
                value={formState.character}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="w-full font-bold py-3 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Context / Reasons */}
        <div className="w-full sm:w-1/2 flex flex-col justify-start pt-8 space-y-2">
          <p className="text-lg mb-2 leading-relaxed">
            Whether you’re interested in collaborating on a web development project, 
            need a custom website for your business, have questions about design strategies, 
            or simply want to chat about your next big idea—this is the place.
          </p>

          <p className="text-lg leading-relaxed mb-2">
            Maybe you have an upcoming event that needs a landing page that really pops. 
            Perhaps you’re curious about how to improve your existing site’s performance 
            or user experience. Or maybe you just want to bounce around some creative 
            concepts for future projects.
          </p>

          <p className="text-lg leading-relaxed mb-2">
            Feel free to get in touch and let’s see how we can bring your vision to life. 
            And hey, if you’re just here to share a mutual love for Middle-earth 
            and its amazing characters, I’m all ears!
          </p>
          <div className="flex flex-row pt-4 transition-colors duration-300 space-x-2 w-full justify-center">
            <p>You can also reach me directly at:</p>
            <a
              href="mailto:kelsob@gmail.com"
              className="hover:underline transition-colors duration-300"
            >
              kelsob@gmail.com
            </a>
          </div>
          <h1 className="w-full text-5xl pt-2 font-bold text-left transition-all duration-500 ease-in-out">
            &lt;/Ben Kelso&gt;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
