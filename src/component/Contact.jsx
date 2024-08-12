import React from 'react'

const Contact = () => {
  const sendMsg = () => {
    alert("Your message has been sent successfully. We will respond within 24 hours.")
  }
  return (
    <div className='text-white min-h-[88vh] font-serif'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>

      <h1 className='mt-16 p-5 pb-4 font-bold underline text-2xl'>Contact US</h1>
      <p className='ml-10'>We'd love to hear from you! If you have any questions, suggestions, or need assistance with PassOP, please feel free to reach out to us.</p>

      <div className='ml-20 mt-5 max-md:ml-5'>
        <h1 className='text-xl underline'>Contact Form</h1>
        <form action="" className='flex flex-col gap-5 ml-5 mt-5'>
          <div>
            <span className='font-bold'>NAME : </span>
            <input type="text" placeholder='Enter your Name...' className='rounded-full pl-3 bg-gray-400 text-black  placeholder:text-gray-700  ' />
          </div>
          <div>
            <span className='font-bold'>Email : </span>
            <input type="text" placeholder='Enter your Email...' className='rounded-full pl-3 bg-gray-400 text-black  placeholder:text-gray-700  ' />
         </div>
          <div>
            <span className='font-bold'>Message : </span>
            <input type="text" placeholder='Write your issues and feedbacks...' className='rounded-full pl-3 bg-gray-400 text-black  placeholder:text-gray-700  w-72 max-md:w-52' />
         </div>
          
          <button className='p-2 rounded-full w-36 bg-gradient-to-r from-blue-700 to-violet-900 hover:bg-gradient-to-r hover:from-blue-500'>
            <span onClick={sendMsg} className='text-white font-bold mt-1 max-sm:text-xs'>Send Message</span>
          </button>
        </form>
      </div>


      <div className='ml-20 mt-5 mb-7 max-md:ml-5'>
        <h1 className='text-xl underline'>Contact Information</h1>
        <ul className='mt-5 ml-5'>
          <li><span className='font-bold'>Email:</span> <a href="/">support@passop.com</a></li>
          <li><span className='font-bold'>Phone:</span> <a href="/">+1-800-123-4567</a></li>
          <li><span className='font-bold'>Address:</span> 123 Secure Lane, Tech City, TX 78910, USA</li>
        </ul>
      </div>
<hr className='opacity-30 '/>

      <p className='font-mono text-center mt-3 opacity-80'>
        Our support team is available to help you with any issues or questions you may have. We aim to respond to all inquiries within 24 hours.
      </p>
      
      <p className='font-mono text-center mt-6 opacity-80 pb-20'>
        🌟🌟Thank you for reaching out!🌟🌟
      </p>
    </div>
  )
}

export default Contact