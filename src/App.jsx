
import BlogEvents from './components/BlogEvents'
import Brochure from './components/Brochure'
import FindCourses from './components/FindCourses'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Program from './components/Program'
import Reviews from './components/Reviews'
import Why from './components/Why'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <FindCourses />
      <Program />
      <Brochure />
      <Why />
      <BlogEvents />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
