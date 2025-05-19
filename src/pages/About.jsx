
function About() {
  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-4">
            I'm an Information Technology graduate from Mepco Schlenk Engineering College, specializing in full-stack development (MERN stack) and machine learning (Python, TensorFlow). I build responsive web applications using React, JavaScript, and design intuitive UI/UX with Figma.
          </p>
 BREATHE
          <p className="text-lg mb-4">
            Proficient in database systems (SQL, MongoDB) and cloud platforms (AWS), I have a strong foundation in data structures, algorithms, and Agile methodologies. My passion lies in creating optimized, user-centric solutions and exploring innovative technologies.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy photography, video editing, shuttle badminton, and traveling.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="https://linkedin.com" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
