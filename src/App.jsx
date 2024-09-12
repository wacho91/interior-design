import Brand from "./Component/Brand/Brand"
import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/NavBar/Navbar"
import Services from "./Component/Services/Services"


function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brand />
      <Services />
    </main>
    
  )
}

export default App
