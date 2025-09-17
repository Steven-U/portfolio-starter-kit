
export default function About() {
  return (
    <section className="sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-950 ring-1 ring-neutral-800 p-6 sm:p-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 top-1/3 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 blur-3xl opacity-40"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>
        </div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{strokeWidth:1.5}} className="text-neutral-500">
              <path d="M11 19L2 5h18L11 19z"></path>
            </svg>
            About
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.05] tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>
            My journey building innovative tech solutions.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="lg:col-span-1">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>
              <div className="absolute left-0 top-6 h-24 w-px bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-full"></div>
              <div className="relative mb-10">
                <span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">2019–2020</p>
                <p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Head Assistant & Data Analyst, Ministry of Armed Forces</p>
              </div>
              <div className="relative mb-10">
                <span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">2019–2025</p>
                <p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Entrepreneur in smart home & e-commerce</p>
              </div>
              <div className="relative mb-10">
                <span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">2022–2024</p>
                <p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Developed creator economy platforms</p>
              </div>
              <div className="relative">
                <span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">2025</p>
                <p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Scaling AI-driven solutions globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}