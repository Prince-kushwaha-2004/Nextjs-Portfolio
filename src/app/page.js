import AboutPage from '../components/pages/AboutPage.jsx'
import HomePage from '../components/pages/HomePage'
import Projects from '../components/pages/Projects.jsx'
import Contact from '@/components/pages/Contact.jsx'
import Skills from '../components/pages/Skills.jsx'
function App() {
  return (
    <>
      <div className="w-full overflow-x-hidden flex flex-col">
        <HomePage />
        <AboutPage />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </>
  )
}

export default App
