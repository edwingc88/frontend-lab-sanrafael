import Hero from '../components/Hero'
import Courses from '../components/Courses'
import CentroMedico from '../components/CentroMedico'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <div>
      <Hero />
      <About />
      <CentroMedico />
      <Courses />
      <Footer />
    </div>
  )
}
