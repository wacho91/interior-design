
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="container py-11">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/*Company Information*/}
            <div className="space-y-4 font-semibold">
                <div className="flex items-center space-x-3">
                    <img src={Logo} alt="" className="w-10"/>
                    <p className="text-2xl font-bold">Interior</p>
                </div>
                <p>Greater Noida, Uttar Padresh, India</p>
                <p>@ 2024 Interior All rights reserved</p>
            </div>
            {/*Footer Links*/}
            <div className="grid grid-cols-2 gap-3">
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
                <h1 className="text-xl font-semibold">Contact Us</h1>
                <ul className="text-sm space-y-4">
                    <li>
                        <a href="#">FAQ'S</a>
                    </li>
                    <li>
                        <a href="#">Shipping & Retuens</a>
                    </li>
                    
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Footer
