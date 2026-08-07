'use client'

type Project = {
  title: string
  url?: string
  description: string
  category: string
  gradient: string
  featured: boolean
  private?: boolean
}

export default function Work() {
  const projects: Project[] = [
    {
      title: 'adaptyv-loop',
      url: 'https://github.com/Steven-U/adaptyv-loop',
      description: 'Budgeted design–test–learn loop over a lab API. 76 tests, contract-validated against the published OpenAPI spec.',
      category: 'Open Source',
      gradient: 'from-violet-600 to-purple-900',
      featured: true
    },
    {
      title: 'Sovereign',
      description: 'AI-driven quant trading system, live in production. Rust core running an event-driven signal pipeline with real-time on-chain processing, hard risk limits, and an append-only ledger for replay and audit.',
      category: 'Quant / Systems',
      gradient: 'from-slate-700 to-neutral-950',
      featured: true,
      private: true
    },
    {
      title: 'Creava',
      url: 'https://www.creava.ai',
      description: 'Agent pipeline on a temporal knowledge graph, with MiPRO/GEPA prompt optimization behind a regression-gated promotion step.',
      category: 'Agentic AI',
      gradient: 'from-neutral-700 to-neutral-900',
      featured: true
    },
    {
      title: 'IdeaSignal',
      url: 'https://ideasignal.ai',
      description: 'AI-powered market validation tool',
      category: 'AI Tool',
      gradient: 'from-emerald-600 to-teal-900',
      featured: true
    },
    {
      title: 'Virtutela',
      description: 'Client e-commerce storefront MVP (Currently postponed)',
      category: 'Client Work',
      gradient: 'from-blue-600 to-indigo-900',
      featured: true,
      private: true
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
      description: 'Curated ecosystem to discover SaaS and AI products, launch projects, and build authority.',
      category: 'Ecosystem',
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
              Things I built, and shipped.
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
                  <span className="text-sm">Agentic AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" style={{strokeWidth: 1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  </svg>
                  <span className="text-sm">Evals</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <p className="text-sm font-medium text-neutral-900 tracking-tight">Across industries and tech stacks</p>
            <p className="text-sm text-neutral-600 mt-1 max-w-sm">
              A decade spanning healthcare, energy, banking and defense, now building agentic AI systems solo at startup velocity.
            </p>
            <a href="https://github.com/Steven-U" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 max-w-sm rounded-full mt-4 pr-4 pl-4">
              See more on GitHub
              <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col justify-between relative overflow-hidden bg-white border border-neutral-200 rounded-[2rem] p-8 transition-all duration-300 ${project.private ? '' : 'cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-neutral-300 hover:-translate-y-1'}`}
              onClick={project.private ? undefined : () => window.open(project.url, '_blank')}
              role={project.private ? undefined : 'button'}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  {/* Project Monogram/Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-900 text-white shadow-sm transform group-hover:scale-105 transition-transform duration-300 shrink-0 border border-black">
                    <span className="font-bold text-xl font-playfair">{project.title.charAt(0)}</span>
                  </div>
                  
                  {/* Badges Container */}
                  <div className="flex flex-wrap justify-end gap-2 pl-4">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-900 bg-neutral-100 px-2.5 py-1 rounded-md border border-neutral-200 uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        Featured
                      </span>
                    )}
                    <span className="inline-flex items-center text-[11px] font-bold text-neutral-600 bg-neutral-50 px-2.5 py-1 rounded-md border border-neutral-200 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-black transition-colors">{project.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
                {project.private ? (
                  <span className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Private System
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-neutral-900 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}