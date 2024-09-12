
import { BiSolidDollarCircle } from "react-icons/bi"
import { FaVectorSquare } from "react-icons/fa"
import { FaPenToSquare } from "react-icons/fa6"



const ServiceCard = [
    {
        id: 1,
        title: "Luxury Facilities",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        icon: <FaVectorSquare />,
        link: "#",
        delay: 0.2,
    },

    {
        id: 2,
        title: "Quality Products",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        icon: <FaPenToSquare />,
        link: "#",
        delay: 0.4,
    },

    {
        id: 3,
        title: "Affordable Price",
        description:
            "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        icon: <BiSolidDollarCircle />,
        link: "#",
        delay: 0.6,
    },
]

const Services = () => {
  return (
    <div>
        <div className="container py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/*Card Section*/}
                {
                    ServiceCard.map((card) => {
                        return (
                            <div key={card.id} className="space-y-4 border-[1px] border-black/30 
                                p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
                            >
                                <span className="inline-block text-xl border-[1px] border-black rounded-full hover:border-white hover:bg-white hover:text-black p-4">{card.icon}</span>
                                <p className="text-2xl font-bold font-serif">{card.title}</p>
                                <p className="text-gray-400 text-xs">{card.description}</p>
                                <a href={card.link} className="inline-block border-b border-black">Learn More</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Services
