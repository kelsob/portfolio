import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
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
    };

    emailjs
      .send(
        'service_oanyykp', // Replace with your service ID
        'template_yktka93', // Replace with your template ID
        emailData,          // Send the correct emailData object
        'a7lqEperpqF1cTeMg' // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSent(true);
          setError(null);
        },
        (err) => {
          console.log('FAILED...', err);
          setError('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-auto flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-center transition-colors duration-300">Contact Me</h1>
        {isSent ? (
          <p className="text-center text-green-500">Message sent successfully!</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg mb-2 transition-colors duration-300" htmlFor="name">Name</label>
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
              <label className="block text-lg mb-2 transition-colors duration-300" htmlFor="email">Email</label>
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
              <label className="block text-lg mb-2 transition-colors duration-300" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="5"
                value={formState.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full font-bold py-3 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="mt-8 text-center transition-colors duration-300">
          <p>You can also reach me at:</p>
          <a href="mailto:kelsob@gmail.com" className="hover:underline transition-colors duration-300">
            kelsob@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
