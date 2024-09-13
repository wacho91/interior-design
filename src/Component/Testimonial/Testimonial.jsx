

const TestimonialData = [
    {
      id: 1,
      name: "John Doe",
      designation: "Designer",
      img: "https://i.pravatar.cc/300?img=1",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      delay: 0.2,
    },
    {
      id: 2,
      name: "Alex",
      designation: "Developer",
      img: "https://i.pravatar.cc/300?img=2",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      delay: 0.4,
    },
    {
      id: 3,
      name: "George",
      designation: "Manager",
      img: "https://i.pravatar.cc/300?img=3",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      delay: 0.6,
    },
];

const Testimonial = () => {
  return (
    <div className="container">
        {/*Header Text*/}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
            <h1 className="text-3xl font-bold font-serif">
                Words from our coustomers
            </h1>
            <p className="text-gray-500 text-sm">
                Bring your dream home to life with one-on-one design help & hand
                picked products.
            </p>
        </div>
        {/* tesitomonial cards */}

    </div>
  )
}

export default Testimonial
