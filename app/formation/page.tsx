import Header from '../components/header'
import Link from 'next/link'
import PricingSection from './pricing-section'

export const metadata = {
  title: 'AI Engineering for Project Managers | Steven Ung',
  description: 'Zero to Autonomous: Learn how to build web and mobile apps with Claude 5 models.',
}

export default function FormationPage() {
  return (
    <>
      {/* Removed slop gradient */}
      
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 font-playfair">
            Stop Managing Developers.<br className="hidden md:block" /> Start Building Yourself.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            A premium, outcome-based mentorship program designed exclusively for Project Managers and Corporate Professionals. Learn to leverage Claude 5 to go from idea to a working MVP in 4 weeks.
          </p>
          <div className="mt-10">
            <a href="https://cal.com/steven-u/meeting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
              Book a Strategy Call
            </a>
          </div>
        </section>

        {/* The Pitch */}
        <section className="mb-24 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Why most tutorials are useless</h2>
          <div className="flex flex-col gap-5 text-lg text-neutral-700 dark:text-neutral-300">
            <p>
              I don't do hourly tutoring. You're here to build a real product and own it, not copy generic advice from LinkedIn.
            </p>
            <p>
              Most AI coding guides teach "vibe coding"—writing code without explaining <strong>API key protection, database security rules, or authentication</strong>. This results in brittle apps that leak keys, get hacked, and break under any real load.
            </p>
            <p>
              I will show you what actually works in production: a secure environment setup, proper system boundaries, and managing the AI like a senior engineer rather than a junior developer.
            </p>
          </div>

          {/* Vibe Coder vs Real Build */}
          <div className="mt-10 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Vibe Coding vs. Real Builds</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-neutral-50 dark:bg-neutral-950 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-3">Vibe Coder</h4>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <li>• Hardcodes secret API keys directly into public repositories</li>
                  <li>• Ignores basic security, auth, and database rules</li>
                  <li>• Builds brittle, bug-ridden prototypes that break on deploy</li>
                  <li>• Gets stuck in infinite debugging loops when the AI hallucinates</li>
                </ul>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-950 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="font-bold text-neutral-900 dark:text-white mb-3">What You Will Build</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>• Environment variables, secure routes, and strict access controls</li>
                  <li>• Maintainable, secure, and production-ready MVPs</li>
                  <li>• Clean architecture, context files, and proper validation</li>
                  <li>• System failures debugged systematically without looping the model</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Path */}
          <div className="mt-10 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">What You Can Actually Do Next</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-base mb-6 leading-relaxed">
              You won't be a traditional software engineer, and you shouldn't want to be. Instead, you'll be able to build and run products solo:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Technical Product Owner / Builder</h4>
                <p className="text-neutral-600 dark:text-neutral-400">Stop writing specs for developers who take months to ship. Build and deploy secure, working prototypes yourself.</p>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Solopreneur</h4>
                <p className="text-neutral-600 dark:text-neutral-400">Launch, deploy, and charge for your own SaaS without needing a technical co-founder or paying agencies.</p>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Systems Architect</h4>
                <p className="text-neutral-600 dark:text-neutral-400">Sell custom tooling, databases, and integrations to businesses that still run on manual Excel sheets.</p>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Internal Tooling Lead</h4>
                <p className="text-neutral-600 dark:text-neutral-400">Replace slow, manual company operations with secure, self-hosted AI tools that you build and maintain.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <PricingSection />

        {/* Curriculum */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center font-playfair">The Curriculum</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-neutral-100 text-neutral-800 font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Unlearning the Past & Setting the Environment</h3>
                <p className="text-neutral-600 mb-4">"If you're using it like previous Claude models, it's going to suck."</p>
                <ul className="list-disc pl-5 text-neutral-600 space-y-2">
                  <li><strong>The Setup:</strong> Keep it lean. We'll use a simple MEMORY.md file so the AI retains context without being suffocated.</li>
                  <li><strong>The Golden Rule:</strong> "Stop telling it how to do the thing. Just say what you want done."</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-neutral-100 text-neutral-800 font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold mb-3">The "Effort" Dial & Model Selection</h3>
                <ul className="list-disc pl-5 text-neutral-600 space-y-2">
                  <li><strong>Sonnet 5:</strong> Speed and volume. Teach it to be highly specific.</li>
                  <li><strong>Opus 5:</strong> The daily driver. Ask for less and point it only at the end goal.</li>
                  <li><strong>Fable 5:</strong> The architect. Used for long-running jobs.</li>
                  <li><strong>The Effort Dial:</strong> Modulate effort levels (Low/Medium for rewrites, High/Max for complex logic).</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-neutral-100 text-neutral-800 font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Prompting Fable 5 & Architectural Planning</h3>
                <ul className="list-disc pl-5 text-neutral-600 space-y-2">
                  <li><strong>The "Why" Framework:</strong> Fable 5 needs business context. We use the structure: <em>"I'm working on [the larger task] for [who it's for]. They need [what the output enables]. With that in mind: [your request]."</em></li>
                  <li><strong>Project Kickoff:</strong> Use Fable 5 to map out the architecture for your actual app.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-neutral-100 text-neutral-800 font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Building the Real App & Debugging (Sessions 4-6)</h3>
                <ul className="list-disc pl-5 text-neutral-600 space-y-2">
                  <li>Move away from generic stacks. Use Opus 5 to build the specific components of your app.</li>
                  <li>Learn what to do when the AI hallucinates or gets stuck (using checkpoints, clearing context, isolating bugs).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
