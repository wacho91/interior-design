import { motion } from "framer-motion"
import { SlideUp } from "../../Animation/Animate"

const NewsLetter = () => {
  return (
    <div className='max-w-[500px] mx-auto space-y-5 py-14'>
      <motion.h1 
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className='text-3xl font-bold font-serif text-center'
      >
        Subscribe to our Newsletter
      </motion.h1>
      <motion.p 
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className='max-w-[400px] mx-auto text-gray-500 text-sm text-center'
      >
        Lorem ipsum dolor sit amet consectetur 
        dipisicing elit. Ullam dignissimos eos 
        consequuntur, illum necessitatibus in.
      </motion.p>
      {/*Form Here*/}
      <motion.div 
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className='!mt-10 flex justify-center'
      >
        <input type="text" placeholder='Enter Your Email' className='px-4 py-4 border-[1px] border-black'/>
        <button className='bg-black text-white px-6 py-4 uppercase'>Subscribe</button>
      </motion.div>
    </div>
  )
}

export default NewsLetter
