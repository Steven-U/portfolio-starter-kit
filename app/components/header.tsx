'use client'

export default function Header() {
  return (
    <header className="sm:px-6 md:px-10 w-full max-w-7xl mt-10 mr-auto ml-auto pr-4 pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="cursor-pointer text-lg font-semibold tracking-tight font-playfair" onClick={() => window.location.href='/'} role="button">S.UNG</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-neutral-700 items-center">
          <a href="#about" className="hover:text-black transition-colors font-medium">About</a>
          <a href="#work" className="hover:text-black transition-colors font-medium">Work</a>
          <a href="#techstack" className="hover:text-black transition-colors font-medium">Tech Stack</a>
          <a href="#contact" className="hover:text-black transition-colors font-medium">Contact</a>
        </nav>
        <div className="flex gap-3 items-center">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 rounded-full pr-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            Book a tech session
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{strokeWidth: 1.5}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}