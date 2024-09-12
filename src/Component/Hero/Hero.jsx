
import HeroPng from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[400px]">
            {/*Text Section*/}
            <div className="flex flex-col justify-center gap-5">
                <h1 className="text-5xl font-bold">SKETCH LUXURY INTERIOR DESIGN</h1>
                <p className="text-sm text-gray-500">Bring your dream to life with one-on-one design help & hand picked
                products tailored to your style, space and budget.</p>

                <div>
                    <button></button>
                </div>
                
            </div>
            
            {/*Images Section*/}
            <div className="flex flex-col justify-center">
                <img src={HeroPng} alt="Hero" className="w-[300px] object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Hero
