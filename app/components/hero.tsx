export default function Hero() {
  return (
    <section className="relative sm:px-6 md:px-10 w-full max-w-7xl mt-12 mr-auto mb-16 ml-auto pr-4 pl-4">
      <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] font-medium text-black tracking-tighter font-playfair">
        I build AI-powered solutions for creators and innovation.
      </h1>
      <p className="sm:text-2xl text-base text-black max-w-3xl mt-4">
        Full-stack development with AI tools, delivering scalable platforms from concept to launch, crafted with precision.
      </p>
      <div className="flex flex-wrap gap-2.5 mt-8">
        <span className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" style={{strokeWidth: 1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m6 13 3 3 8-8"></path>
            <path d="M7 21h10"></path>
            <path d="M12 17V3"></path>
          </svg>
          Full-Stack Dev
        </span>
        <span className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" style={{strokeWidth: 1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0"></path>
          </svg>
          AI Solutions
        </span>
        <span className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-[14px] h-[14px]">
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
          </svg>
          Creators Economy
        </span>
        <span className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" style={{strokeWidth: 1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          </svg>
          MLOps
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
        <a href="#work" className="inline-flex items-center justify-center hover:bg-neutral-800 transition text-base font-medium text-white bg-neutral-900 h-12 rounded-full pr-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          See selected work
        </a>
        <a href="#contact" className="inline-flex items-center justify-center hover:bg-neutral-100 transition text-base font-medium text-neutral-900 bg-white h-12 border-neutral-200 border rounded-full pr-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          Get in touch
        </a>
      </div>
    </section>
  )
}