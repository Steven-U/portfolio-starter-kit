export default function Services() {
  return (
    <section id="services" className="sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 mt-12 pt-16 px-4">
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-600">Packages</p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 mt-2 font-medium tracking-tighter font-playfair">
              Choose the tech solution for your project
            </h3>
            <p className="sm:text-base text-sm text-neutral-600 mt-4 max-w-[80ch]">
              Agile development sprints with clear deliverables and AI optimization.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 hover:bg-neutral-800 transition text-sm font-medium text-white bg-neutral-900 ring-neutral-800 ring-1 rounded-xl pt-3 pr-6 pb-3 pl-6">
            Get a tailored quote
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium tracking-tight text-neutral-900 font-playfair">Tech Sprint</h4>
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fast-forward" style={{width: '14px', height: '14px', color: 'rgb(64, 64, 64)'}}>
                  <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path>
                  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path>
                </svg>
                Fast
              </span>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter">€5k</span>
                <span className="text-neutral-600 text-sm">per week</span>
              </div>
              <p className="text-sm text-neutral-600 mt-2">Rapid prototyping with AI tools and basic stack setup.</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg> 
                API integration
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg> 
                Next.js frontend
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm font-medium text-neutral-900 bg-neutral-100 w-full border-neutral-200 border rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4">
              Start a Tech Sprint
            </a>
          </div>
          <div className="relative rounded-2xl border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white p-8 shadow-lg shadow-blue-100/50">
            <div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-blue-600 text-white text-xs font-medium px-3 py-1 ring-2 ring-white">Most popular</div>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium tracking-tight text-neutral-900 font-playfair">Full-Stack Solution</h4>
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-xs text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers" style={{width: '14px', height: '14px', color: 'rgb(6, 95, 70)'}}>
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                </svg>
                Depth
              </span>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter">€15k</span>
                <span className="text-neutral-600 text-sm">3-week sprint</span>
              </div>
              <p className="text-sm text-neutral-600 mt-2">Complete platform with AI, frontend, and backend integration.</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg> 
                Full-stack development
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg> 
                AI-driven features
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg> 
                DevOps deployment
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 hover:bg-blue-700 transition text-sm font-medium text-white bg-blue-600 w-full ring-blue-600 ring-1 rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4">
              Book Full-Stack
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </a>
          </div>
          <div className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium tracking-tight text-neutral-900 font-playfair">Embedded Developer</h4>
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play" style={{width: '14px', height: '14px', color: 'rgb(64, 64, 64)'}}>
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                Embedded
              </span>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter">€750</span>
                <span className="text-neutral-600 text-sm">per day</span>
              </div>
              <p className="text-sm text-neutral-600 mt-2">Hands-on development with AI and full-stack expertise.</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg> 
                Agile standups
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg> 
                Priority coding
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg> 
                Remote/on-site
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm font-medium text-neutral-900 bg-neutral-100 w-full border-neutral-200 border rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4">
              Discuss Embedded
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}