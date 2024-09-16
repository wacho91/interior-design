
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="container py-11">
      <div className="grid grid-cols-1 md:grid-cols-3">
            {/*Company Information*/}
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <img src={Logo} alt="" className="w-10"/>
                    <p className="text-2xl font-bold">Interior</p>
                </div>
                <p>Greater Noida, Uttar Padresh, India</p>
                <p>@ 2024 Interior All rights reserved</p>
            </div>
            {/*Footer Links*/}
            {/*Contact Section*/}
      </div>
    </div>
  )
}

export default Footer
