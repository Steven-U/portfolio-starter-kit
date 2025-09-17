'use client'

export default function Work() {
  const projects = [
    {
      title: 'Creava AI',
      url: 'https://www.creava.ai',
      description: 'AI-powered creative platform',
      category: 'AI Platform',
      gradient: 'from-neutral-600 to-neutral-800',
      featured: true
    },
    {
      title: 'ToolRanks',
      url: 'https://toolranks.com',
      description: 'Tool discovery and ranking platform',
      category: 'SaaS',
      gradient: 'from-neutral-700 to-neutral-900',
      featured: true
    },
    {
      title: 'VibePOV',
      url: 'https://vibepov.com',
      description: 'Creator economy platform',
      category: 'Creator Tools',
      gradient: 'from-neutral-800 to-black',
      featured: false
    },
    {
      title: 'Flaex Tools',
      url: 'https://tools.flaex.ai',
      description: 'Directory of AI tools and resources',
      category: 'Directory',
      gradient: 'from-neutral-500 to-neutral-700',
      featured: true
    }
  ]

  return (
    <section id="work" className="sm:p-8 max-w-7xl bg-neutral-50 rounded-3xl mt-10 mb-20 mx-auto p-6">
      <div className="relative pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40"></div>
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
        <div className="flex flex-col justify-between">
          <div className="">
            <span className="text-sm text-neutral-500">Selected work</span>
            <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-neutral-900 mt-2 font-medium tracking-tighter font-playfair">
              AI-powered platforms that drive innovation.
            </h2>
            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"></div>
              </div>
              <div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-600 bg-neutral-50 px-4 relative">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" style={{strokeWidth: 1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <span className="text-sm">Full-Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" style={{strokeWidth: 1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0"></path>
                  </svg>
                  <span className="text-sm">AI Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" style={{strokeWidth: 1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  </svg>
                  <span className="text-sm">E-commerce</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <p className="text-sm font-medium text-neutral-900 tracking-tight">Across industries and tech stacks</p>
            <p className="text-sm text-neutral-600 mt-1 max-w-sm">
              From retail and creator economy to defense and smart tech—tailored solutions for diverse challenges.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 max-w-sm rounded-full mt-4 pr-4 pl-4">
              Request full case studies
              <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article 
              key={project.title}
              className={`relative overflow-hidden aspect-[3/2] bg-gradient-to-br ${project.gradient} border-neutral-200 border rounded-3xl cursor-pointer transition-transform hover:scale-105 p-8`} 
              onClick={() => window.open(project.url, '_blank')} 
              role="button"
            >
              {project.featured && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-1.5 py-1.5 backdrop-blur">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" style={{strokeWidth: 1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="m6 13 3 3 8-8"></path>
                    </svg>
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-lg font-medium tracking-tight leading-tight">{project.title}</p>
                <p className="text-white/80 text-sm mt-1">{project.description}</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-white/60 text-xs">Visit site</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}