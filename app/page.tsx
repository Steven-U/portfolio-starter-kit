import Header from './components/header'
import Hero from './components/hero'
import Work from './components/work'
import TechStackComponent from './components/tech-stack'
import TechStack from './components/techstack'
import About from './components/about'
import Contact from './components/contact'
import Services from './components/services'

export default function Page() {
  return (
    <>
      <div className="absolute top-0 w-full -z-10 h-[880px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>

      <Header />
      <Hero />
      <About />
      <Work />
      <TechStack />
      <TechStackComponent />
      <Services />
      <Contact />
    </>
  )
}