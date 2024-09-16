

const NewsLetter = () => {
  return (
    <div className='max-w-[500px] mx-auto space-y-5 py-14'>
      <h1 className='text-3xl font-bold font-serif text-center'>Subscribe to our Newsletter</h1>
      <p className='max-w-[400px] mx-auto text-gray-500 text-sm text-center'>
        Lorem ipsum dolor sit amet consectetur 
        dipisicing elit. Ullam dignissimos eos 
        consequuntur, illum necessitatibus in.
      </p>
      {/*Form Here*/}
      <div className='!mt-10 flex justify-center'>
        <input type="text" placeholder='Enter Your Email' className='px-4 py-4 border-[1px] border-black'/>
        <button className='bg-black text-white px-6 py-4 uppercase'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
