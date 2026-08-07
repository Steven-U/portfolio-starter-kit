'use client'

import { useState } from 'react'

export default function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Investment Packages</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Tier 1 */}
        <div 
          onClick={() => setSelectedPackage('sprint')}
          role="button"
          tabIndex={0}
          className={`cursor-pointer relative rounded-3xl p-8 flex flex-col h-full transform transition-all duration-300 border-2 ${
            selectedPackage === 'sprint' 
              ? 'bg-black text-white border-black scale-105 shadow-2xl z-10' 
              : 'bg-white text-neutral-900 border-neutral-200 hover:border-black shadow-sm'
          }`}
        >
          <div className={`absolute top-0 right-8 -translate-y-1/2 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-md border ${
            selectedPackage === 'sprint' ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
          }`}>
            Recommended
          </div>
          <h3 className="text-2xl font-bold mb-2">The "Zero to Autonomous" Sprint</h3>
          <p className={`${selectedPackage === 'sprint' ? 'text-neutral-400' : 'text-neutral-500'} mb-6 flex-grow transition-colors`}>A 4 to 6-week guided sprint where you build your specific project alongside me.</p>
          
          <div className="mb-6">
            <span className="text-4xl font-bold">€1,500 - €2,500</span>
            <span className={`${selectedPackage === 'sprint' ? 'text-neutral-400' : 'text-neutral-500'} ml-2 transition-colors`}>/ project</span>
            <div className={`text-sm mt-2 font-medium ${selectedPackage === 'sprint' ? 'text-neutral-400' : 'text-neutral-500'} transition-colors`}>
              (Available in 3 monthly installments)
            </div>
          </div>
          
          <ul className={`space-y-4 mb-8 ${selectedPackage === 'sprint' ? 'text-neutral-300' : 'text-neutral-600'} transition-colors`}>
            <li className="flex items-start">
              <svg className={`w-6 h-6 mr-3 shrink-0 ${selectedPackage === 'sprint' ? 'text-white' : 'text-neutral-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              1x 90-minute kickoff & 1x 60-min weekly pair-programming call
            </li>
            <li className="flex items-start">
              <svg className={`w-6 h-6 mr-3 shrink-0 ${selectedPackage === 'sprint' ? 'text-white' : 'text-neutral-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Deliverable: Full-stack system ready for production (incl. payment processing)
            </li>
            <li className="flex items-start">
              <svg className={`w-6 h-6 mr-3 shrink-0 ${selectedPackage === 'sprint' ? 'text-white' : 'text-neutral-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Access to my curated stack, best tools, and engineering practices
            </li>
            <li className="flex items-start">
              <svg className={`w-6 h-6 mr-3 shrink-0 ${selectedPackage === 'sprint' ? 'text-white' : 'text-neutral-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Async support (Slack/WhatsApp) when you get stuck
            </li>
          </ul>
        </div>

        {/* Tier 2 */}
        <div 
          onClick={() => setSelectedPackage('masterclass')}
          role="button"
          tabIndex={0}
          className={`cursor-pointer relative rounded-3xl p-8 flex flex-col h-full transform transition-all duration-300 border-2 ${
            selectedPackage === 'masterclass' 
              ? 'bg-black text-white border-black scale-105 shadow-2xl z-10' 
              : 'bg-white text-neutral-900 border-neutral-200 hover:border-black shadow-sm'
          }`}
        >
          <h3 className="text-2xl font-bold mb-2">The Claude 5 Masterclass</h3>
          <p className={`${selectedPackage === 'masterclass' ? 'text-neutral-400' : 'text-neutral-500'} mb-6 flex-grow transition-colors`}>A focused deep dive into the methodology (Opus/Fable prompting, environment setup).</p>
          
          <div className="mb-8">
            <span className="text-4xl font-bold">€600 - €900</span>
            <span className={`${selectedPackage === 'masterclass' ? 'text-neutral-400' : 'text-neutral-500'} ml-2 transition-colors`}>/ package</span>
          </div>
          
          <ul className={`space-y-4 mb-8 ${selectedPackage === 'masterclass' ? 'text-neutral-300' : 'text-neutral-600'} transition-colors`}>
            <li className="flex items-start">
              <svg className={`w-6 h-6 mr-3 shrink-0 ${selectedPackage === 'masterclass' ? 'text-white' : 'text-neutral-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              3x 90-minute sessions over two weeks
            </li>
            <li className="flex items-start">
              <svg className={`w-6 h-6 mr-3 shrink-0 ${selectedPackage === 'masterclass' ? 'text-white' : 'text-neutral-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Avoiding legacy mistakes in AI coding
            </li>
            <li className="flex items-start">
              <svg className={`w-6 h-6 mr-3 shrink-0 ${selectedPackage === 'masterclass' ? 'text-white' : 'text-neutral-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Perfect for teams on a tighter budget
            </li>
          </ul>
        </div>
      </div>
      
      {/* Call to action appears when a package is selected */}
      <div className={`mt-16 text-center transition-all duration-500 ${selectedPackage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <a 
          href={`https://cal.com/steven-u/meeting?package=${selectedPackage}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center bg-black text-white border-2 border-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors shadow-lg hover:shadow-xl duration-200"
        >
          Make a call with me
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </section>
  )
}
