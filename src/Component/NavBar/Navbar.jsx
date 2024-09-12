import Logo from "../../assets/logo.png"

const NavLinks = [
    {
        id: 1,
        title: "About",
        link: "#"
    },

    {
        id: 2,
        title: "Services",
        link: "#",
      
    },

    {
        id: 3,
        title: "Project",
        link: "#",
    },

    {
        id: 4,
        title: "Contact",
        link: "#",
    },
]

const Navbar = () => {
  return (
    <div className="container py-4 flex justify-between items-center">
        {/*Logo Section*/}
        <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-10"/>
            <span className="text-2xl font-bold">Interior</span>
        </div>
        {/*Link Section*/}
        <div className="hidden lg:block">
            {
                NavLinks.map((link) => {
                    return (
                        <a key={link.id} href={link.link} className="mx-4 text-sm font-semibold">
                            {link.title}
                        </a>
                    )
                })
            }
        </div>
        {/*Button Section*/}
        <div>
            <button className="primary-btn">
                Try For Free
            </button>
        </div>
    </div>
  )
}

export default Navbar
