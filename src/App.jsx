import Abouts from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

import Navbar from "./components/Navbar"
import Projects from "./components/Project"
import Skill from "./components/Skill"



const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Abouts />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App