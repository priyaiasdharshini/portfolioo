
function Experiences() {
  const experiences = [
    {
      company: 'Aazad Academy',
      role: 'Frontend Developer',
      period: 'Present',
      description: 'Specializing in building responsive web applications using modern JavaScript and React frameworks. Focused on creating optimized user experiences with cross-browser compatibility and accessibility standards.',
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} | {exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
