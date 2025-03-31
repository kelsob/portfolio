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
        'service_oanyykp', 
        'template_yktka93', 
        emailData,          
        'a7lqEperpqF1cTeMg'
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
    <div className="min-h-auto flex flex-col items-center justify-start p-6 px-16 pt-6">
      {/* Two Column Layout */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row gap-6">
        
        {/* Left Column: Header + Context / Reasons */}
        <div className="w-full sm:w-1/2 flex flex-col justify-start space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center w-11/12 transition-colors duration-300">
            Get in Touch
          </h1>

          <p className="text-lg md:text-2xl leading-relaxed">
            Want to discuss a new project, get feedback on a design idea, or just share some advice 
            on breaking into the web dev world? I&apos;m here for it.
          </p>

          <p className="text-lg md:text-2xl leading-relaxed">
            Maybe you&apos;re looking for a site that looks great and loads fast. Maybe you&apos;ve got 
            questions about improving your portfolio, or you just need someone to bounce ideas off of.
          </p>

          <p className="text-lg md:text-2xl leading-relaxed">
            Whatever it is, don&apos;t hesitate to reach out. I&apos;m always open to connecting, 
            helping where I can, and learning from others, too.
          </p>

        </div>

        {/* Right Column: Form */}
        <div className="w-full sm:w-1/2">
          {isSent && (
            <p className="text-left text-green-500 mb-4">
              Thanks for reaching out! I'll get back to you as soon as I can.
            </p>
          )}
          {error && <p className="text-left text-red-500 mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-lg text-left mb-2 transition-colors duration-300"
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
                className="block text-lg text-left mb-2 transition-colors duration-300"
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
                className="block text-lg text-left mb-2 transition-colors duration-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What’s on your mind?"
                rows="5"
                value={formState.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div>
              <label
                className="block text-lg text-left mb-2 transition-colors duration-300"
                htmlFor="character"
              >
                Your Favorite LOTR Character (Optional)
              </label>
              <input
                type="text"
                id="character"
                className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Samwise, Gandalf, Arwen..."
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
          <div className="flex flex-col pt-4 transition-colors duration-300 space-y-2 w-full items-center">
            <p>You can also reach me at:</p>
            <a
              href="mailto:kelsob@gmail.com"
              className="hover:underline transition-colors duration-300"
            >
              kelsob@gmail.com
            </a>
          </div>
          <div className="flex flex-col pt-4 transition-colors duration-300 space-y-2 w-full items-center">
            <p>or view more work at:</p>
            <a
              href="https://www.pixelburstdigital.com"
              className="hover:underline transition-colors duration-300"
            >
              www.pixelburstdigital.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
