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
    <div className="container py-4 flex justify-between">
        {/*Logo Section*/}
        <img src={Logo} alt="Logo" className="w-12"/>
        {/*Link Section*/}
        <div>
            {
                NavLinks.map((link) => {
                    return (
                        <a key={link.id} href={link.link} className="mx-4">
                            {link.title}
                        </a>
                    )
                })
            }
        </div>
        {/*Button Section*/}
        <div>
            <button className="">Try For Free</button>
        </div>
    </div>
  )
}

export default Navbar
