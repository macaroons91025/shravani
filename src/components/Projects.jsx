import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "POOKIE AS REGISTER, A SOCIOLINGUISTIC CASE STUDY OF GEN Z SLANG ON INSTAGRAM.",
      description: "Analyzed the sociological and linguistic impact of digital slang on contemporary communication."
    },
    {
      id: 2,
      title: "SOCIAL MEDIA VALIDATION THE IMPACT OF GRATITUDE IN SOCIAL MEDIA NARRATIVES AND WRITER MOTIVATION.",
      description: "Investigated psychological factors influencing content creation and narrative structure."
    },
    {
      id: 3,
      title: "FOR COLORED GIRLS WHEN THE RAINBOW IS ENUF",
      description: "Using mise-en-scène for analysing the visual and spatial elements of theatrical production, including lighting, movement, spatial arrangements, and how actors interact with their environment."
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <h3 className="text-rose-400 uppercase tracking-[0.2em] text-sm font-light text-center mb-3">
          MY WORK
        </h3>
        <h2 className="text-5xl sm:text-6xl font-light tracking-wide text-center text-rose-900 mb-12">
          Lead Researcher & Author
        </h2>
        <div className="w-16 h-px bg-rose-300 mx-auto mb-16"></div>

        {/* Single Big Box */}
        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-rose-200 p-8 md:p-12">
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div 
                key={project.id} 
                className={`pb-6 ${idx !== projects.length - 1 ? 'border-b border-rose-200' : ''}`}
              >
                {/* Title with bullet */}
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-rose-500 text-2xl mt-1">•</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-rose-900">
                    {project.title}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="ml-6">
                  <p className="text-rose-800 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;