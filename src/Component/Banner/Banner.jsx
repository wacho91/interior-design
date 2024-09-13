
import Banner1 from "../../assets/banner.png"

const Banner = () => {
  return (
    <div>
        <div className="container py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/*Image Section*/}
                <div className="flex flex-col justify-center items-center">
                    <img src={Banner1} alt=""  className="w-[95%] md:w-full mx-auto"/>
                </div>
                {/*Text Section*/}
                <div className="space-y-5 flex justify-center flex-col">
                    <h1 className="text-4xl font-bold font-serif">We Believe that a team makes any project better</h1>
                    <p className="text-gray-500 text-sm leading-7"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
                    earum accusantium tempore nam aliquid{" "}</p>
                    <div>
                        <button className="primary-btn">Discover Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
