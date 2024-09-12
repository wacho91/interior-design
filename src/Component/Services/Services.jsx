
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
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/*Card Section*/}

            </div>
        </div>
    </div>
  )
}

export default Services
