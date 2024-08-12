import React from 'react'

const About = () => {
  return (
    <div className='text-white min-h-[85vh] font-serif'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
      <h1 className='mt-16 pt-5 pb-4 flex justify-center font-bold underline text-2xl'>ABOUT US</h1>
        <hr className='opacity-30'/>
      <div className='flex  gap-4 max-md:flex-col max-md:items-center'>

        <div className='flex mt-6 border border-gray-400 w-1/3 justify-between border-opacity-35 ml-5 max-2xl:h-[30vh] max-2xl:overflow-scroll max-md:flex-col max-2xl:pt-8 max-md:w-[70vw]'>
          <div className='max-2xl:h-[218] max-md:flex max-md:justify-center'>
            <img src="image/athervi.png" className='w-36 bg-gray-400 pt-3 mt-12 ml-4 rounded-full border border-white max-2xl:w-16 max-2xl:mt-6' alt="" />
          </div>

          <div className='w-2/3 p-14 max-2xl:p-5  max-2xl:text-xs max-md:w-full '>
            Welcome to <span className='font-bold'>PassOP</span>, a cutting-edge password manager designed to protect your passwords and store them securely. Created by <span className='font-bold'>Athervi Singh</span>, a final-year BTech student in Computer Science, PassOP aims to simplify digital security for everyone.
          </div>
          
        </div>
        <div className='p-10 mt-6 border border-gray-400 w-1/3 border-opacity-35 ml-5 max-2xl:h-[30vh] max-2xl:overflow-scroll max-md:w-[70vw]'>

          <h1 className='font-bold text-xl mb-6 max-2xl:text-sm  max '>Who We Are <hr className='opacity-30' /></h1>
          <div className=' max-2xl:text-xs'>
            PassOP is an innovation of Athervi Singh, a passionate computer science student dedicated to enhancing cybersecurity. With a strong academic foundation and a keen interest in digital security, Athervi has developed PassOP to address the growing need for reliable password management solutions.
          </div>

        </div>
        <div className='p-10 mt-6 border border-gray-400 w-1/3 border-opacity-35 ml-5 mr-5 max-2xl:h-[30vh] max-2xl:overflow-scroll max-md:w-[70vw]'>

          <h1 className='font-bold text-xl mb-6 max-2xl:text-sm '>Our Mission <hr className='opacity-30' /></h1>
          <div className='max-2xl:text-xs '>
            Our mission is to provide a secure and user-friendly platform for managing your passwords. In a digital world where security threats are constantly evolving, PassOP ensures that your sensitive information is protected with the highest standards of encryption and security protocols.
          </div>

        </div>

      </div>


      <div>
        <h1 className='text-2xl mt-8 flex justify-center font-bold'>What We Offer</h1>
        <div className='flex justify-center'>
          <hr className='opacity-30 w-80 ' />
        </div>
        <div  className='flex justify-center'>
          
          <dl className=''>
            <div className='flex gap-2 mb-1 mt-2'>
              <dt className='font-medium text-[18px] ml-5'>Advanced Encryption:</dt>
              <dd className='mt-1'>PassOP uses state-of-the-art AES-256 bit encryption to keep your passwords and personal data safe. This military-grade encryption ensures that only you can access your information. </dd>
            </div>


            <div className='flex gap-2 mb-1'>
              <dt className='font-medium text-[18px] ml-5'>User-Friendly Interface:</dt>
              <dd className='mt-1'>Designed with simplicity in mind, PassOP offers an intuitive interface that makes it easy to store, retrieve, and manage your passwords. No technical expertise is required to use our platform effectively.</dd>
            </div>

            <div className='flex gap-2 mb-1'>
              <dt className='font-medium text-[18px] ml-5'>Cross-Platform Support:</dt>
              <dd className='mt-1'>Access your passwords from any device, anywhere, anytime. PassOP is compatible with Windows, macOS, iOS, and Android, ensuring seamless integration across all your devices.</dd>
            </div>

            <div className='flex gap-2 mb-1'>
              <dt className='font-medium text-[18px] ml-5'>Automatic Backup and Sync:</dt>
              <dd className='mt-1'> Your data is always up-to-date and accessible. PassOP automatically backs up and syncs your passwords, so you never have to worry about losing access.</dd>
            </div>


            <div className='flex gap-2 mb-1'>
              <dt className='font-medium text-[18px] ml-5'>Reliable Customer Support:</dt>
              <dd className='mt-1'>We are here to assist you with any questions or issues. Our support team is dedicated to providing prompt and helpful responses to ensure your experience with PassOP is smooth and trouble-free.</dd>
            </div>

          </dl>

        </div>
        

       
      </div>

      

      <div className='flex gap-16 justify-center mt-10 max-md:flex-col max-md:items-center max-md:gap-4'>
        

        <div>

          <h1 className='text-2xl mt-4 flex justify-center font-bold'>Our Vision</h1>
          <div className='flex justify-center'>
            <hr className='opacity-30 w-48 ' />
          </div>
          <p className='text-center mt-1'>
            We envision a world where everyone can manage their digital security with ease and confidence. <br /> PassOP is committed to continuously improving and adapting to the latest security challenges, <br /> ensuring that your information remains safe and protected.
          </p>
        </div>

        <div>

          <h1 className='text-2xl mt-4 flex justify-center font-bold'>Commitment to Security</h1>
          <div className='flex justify-center'>
            <hr className='opacity-30 w-96 ' />
          </div>
          <p className='text-center mt-1'>
            At PassOP, we prioritize your privacy and security. We regularly update our software to incorporate the latest <br /> security measures and conduct thorough audits to maintain the integrity of our platform. <br /> Your data is our top priority, and we take every step necessary to protect it.
          </p>
        </div>

      </div>


      <div className='mt-6'>

        <h1 className='text-2xl mt-4 flex justify-center font-bold'>Join Us</h1>
        <div className='flex justify-center'>
          <hr className='opacity-30 w-36 ' />
        </div>
        <p className='text-center mt-1'>
          Join the PassOP community today and take control of your digital security. With PassOP, your passwords are always protected and easily accessible. Trust us to keep your digital life secure.
        </p>
      </div>

    
    <hr  className='mt-14 opacity-35'/>
      <p className='pb-28 text-center text-sm font-mono mt-3'>😊 😊 😊 This description incorporates the name PassOP and maintains a professional and informative tone. 😊 😊 😊 </p>
    </div>
  )
}

export default About    