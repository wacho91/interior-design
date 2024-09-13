
import Banner1 from "../../assets/banner.png"

const Banner = () => {
  return (
    <div>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/*Image Section*/}
                <div className="flex flex-col justify-center items-center">
                    <img src={Banner1} alt="" />
                </div>
                {/*Text Section*/}
                <div className="space-y-3 flex justify-center flex-col">
                    <h1 className="text-5xl font-bold">We Believe that a team makes any project better</h1>
                    <p className="text-gray-500 text-sm"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
                    earum accusantium tempore nam aliquid{" "}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
