import Banner from "./Component/Banner/Banner"
import Banner2 from "./Component/Banner/Banner2"
import Brand from "./Component/Brand/Brand"
import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/NavBar/Navbar"
import Services from "./Component/Services/Services"
import Testimonial from "./Component/Testimonial/Testimonial"


function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brand />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonial />
    </main>
    
  )
}

export default App
