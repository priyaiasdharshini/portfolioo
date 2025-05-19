
function Certifications() {
  const certifications = [
    { name: 'JavaScript', issuer: 'Guvi - Google Education Partner', year: '' },
    { name: 'Robotic Process Automation', issuer: 'Guvi - UI Path Learning Partner', year: '' },
    { name: 'ChatGPT for Everyone', issuer: 'Guvi - Google Education Partner', year: '' },
    { name: 'UI/UX for Beginner', issuer: 'Great Learning Academy', year: '' },
    { name: 'Oxford Achiever', issuer: 'Oxford University', year: '' },
    { name: 'Spoken Tutorial for Java', issuer: 'IIT Bombay', year: '' },
    { name: 'Data Structures and Algorithms using Python', issuer: 'Infosys Springboard', year: '' },
    { name: 'Database Management System', issuer: 'Infosys Springboard', year: '' },
    { name: 'Introduction to NoSQL Databases', issuer: 'Infosys Springboard', year: '' },
    { name: 'Object-Oriented Programming using Python', issuer: 'Infosys Springboard', year: '' },
    { name: 'Programming Fundamentals using Python', issuer: 'Infosys Springboard', year: '' },
    { name: 'Software Engineering and Agile Software Development', issuer: 'Infosys Springboard', year: '' },
    { name: 'Graphic Designing', issuer: 'Digitech Marketing Solutions - Google Partner', year: '' },
    { name: 'Introduction to Data Analytics', issuer: 'Simplilearn Skillup', year: '' },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p className="text-gray-600">{cert.issuer}{cert.year ? ` | ${cert.year}` : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
