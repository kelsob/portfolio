// src/pages/About.jsx

const About = () => {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
          <p className="text-lg mb-6">
            Hi, my name is [Your Name], a passionate web developer with a strong background in [Your Field]. I specialize in creating responsive, user-friendly websites and applications. With a keen eye for detail and a commitment to excellence, I aim to build digital experiences that not only look great but also provide a seamless user experience.
          </p>
          <h2 className="text-3xl font-bold mb-3">Skills</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>JavaScript (React, Node.js)</li>
            <li>HTML & CSS (Tailwind, Bootstrap, SASS)</li>
            <li>Version Control (Git, GitHub)</li>
            <li>Responsive Design & Mobile-First Development</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default About;
  