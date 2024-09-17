
import Logo from "../../assets/logo.png"
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { SlideLeft } from "../../Animation/Animate";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
        variants={SlideLeft(0.2)}
        initial="initial"
        whileInView="animate"
    >
        <div className="container py-11">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                    {/*Company Information*/}
                    <div className="space-y-4 font-semibold">
                        <div className="flex items-center space-x-3">
                            <img src={Logo} alt="" className="w-6"/>
                            <p className="text-xl font-bold">Interior</p>
                        </div>
                        <p>Greater Noida, Uttar Padresh, India</p>
                        <p>@ 2024 Interior All rights reserved</p>
                    </div>
                    {/*Footer Links*/}
                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-4">
                            <h1 className="text-xl font-semibold">About Us</h1>
                            <ul className="text-sm space-y-4">
                                <li>
                                    <a href="#">Our Story</a>
                                </li>
                                <li>
                                    <a href="#">Designer</a>
                                </li>
                                <li>
                                    <a href="#">Craftmanship</a>
                                </li>
                                <li>
                                    <a href="#">Sustainability</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-xl font-semibold">Support</h1>
                            <ul className="text-sm space-y-4">
                                <li>
                                    <a href="#">FAQ'S</a>
                                </li>
                                <li>
                                    <a href="#">Shipping & Retuens</a>
                                </li>
                                <li>
                                    <a href="#">Care guide</a>
                                </li>
                                <li>
                                    <a href="#">Warranty</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*Contact Section*/}
                    <div className="space-y-4">
                        <h1 className="text-xl font-semibold ml-6">Contact Us</h1>
                        <ul className="text-base space-y-4 font-semibold ml-6">
                            <li className="flex items-center space-x-3">
                                <FaPhone />
                                <a href="#">+91 123456789</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <LuMessageSquare />
                                <a href="mailto:contact.thecodingjourney@gmail.com">Email</a>
                            </li>
                        </ul>
                    </div>
            </div>
            {/* bottom section */}
            <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-5">
                &copy; 2024 CD. All rights reserved
            </p>
        </div>
    </motion.footer>
  )
}

export default Footer
