
function Projects() {
  const projects = [
    {
      name: 'Diabetic Retinopathy Classification',
      description: 'Developed a deep learning-based image classification system using Python, TensorFlow, and Keras. Integrated optimization algorithms to automate severity-based classification of diabetic retinopathy, enhancing diagnostic accuracy.',
      link: '#',
    },
    {
      name: 'Instagram Home Page Redesign',
      description: 'Redesigned Instagram’s home page with a focus on clean, user-friendly, and visually appealing UI/UX using Figma. Implemented a modern layout for seamless navigation and enhanced functionality.',
      link: '#',
    },
    {
      name: 'Rishi Cozy Cabin',
      description: 'Designed a responsive resort website using HTML, CSS, and JavaScript. Optimized booking functionality and improved user engagement for a seamless experience.',
      link: '#',
    },
  ];

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline mt-2 block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
