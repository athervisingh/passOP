
import { useState } from "react";
import React, { useRef } from 'react'
import { useEffect } from "react";
import { stringify, v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Manager = () => {

    const ref = useRef();
    const passwordRef = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])


    const getPassword = async() => {
        let req = await fetch('http://localhost:3000/');

        let password = await req.json()
        console.log(password)
    
        setpasswordArray(password)
        
        
}


    useEffect(() => {
        getPassword();
      
    }, [])
    


    const deletePassword = async(id) => {
        
        let c = confirm("Do you really want to delete password")

                if (c) {
                    setpasswordArray(passwordArray.filter((item) => item.id !== id))
                    // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id !== id)))  

                    let res = await fetch('http://localhost:3000/', { method: "DELETE", headers: { "content-Type": "application/json" }, body: JSON.stringify({id}) })
                }
      
     
    }
 


    const copyText = (text) => {
        toast.info('Copy to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
        });
        navigator.clipboard.writeText(text)
    }
    const showPassword = () => {
      
        if (ref.current.src.includes("image/closeeye.png")) {
            ref.current.src = "image/openeye.png"
            passwordRef.current.type = "text";
        }
        else {
            ref.current.src = "image/closeeye.png"
            passwordRef.current.type = "password";
        }
    }
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
     
    }

    const savePassword = async () => {


        if (form.site.length > 0 && form.username.length > 0 && form.password.length > 0) {
        
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
           
             await fetch('http://localhost:3000/', { method: "POST", headers: { "content-Type": "application/json" }, body: JSON.stringify({...form, id: uuidv4()})})
            setForm({ site: "", username: "", password: "" });
        } else {
            alert("Password not saved successfully ......")
        }
     
    }


    const editPassword = async (id) => {
        setpasswordArray(passwordArray.filter((item) => item.id !== id))
        await fetch('http://localhost:3000/', { method: "DELETE", headers: { "content-Type": "application/json" }, body: JSON.stringify({ id }) })
        setForm(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))

    }

    return (


        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />

            <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>

          <div className='flex justify-center mt-20'>
              <div className='font-bold text-2xl text-white'>
                  <span className='text-gray-400'>&lt;</span>
                  <span>Pass</span>
                  <span className='text-gray-400'>OP/&gt;</span>
                  <div className='text-xs text-gray-400 pl-2'>Password Manager</div>
              </div>
          </div>
          <div className='text-xl text-white flex justify-center font-extrabold shadow-2xl shadow-gray-500 mt-1 pb-2 max-sm:text-xs '>Manage your Password in your own way</div>


          
          <div className='flex justify-center mt-10'>
                <input type="text" name='site' value={form.site} onChange={handleChange} placeholder='Enter website URL...' className='rounded-full w-1/2 pl-3 bg-gray-400 text-black placeholder:text-gray-700 p-1 max-sm:text-xs max-sm:w-1/2'/>
          </div>
          <div className='flex justify-center mt-8 ml-5'>
              <input type="text" name='username' value={form.username} onChange={handleChange} placeholder='Enter Username...' className='rounded-full w-1/3 pl-3 bg-gray-400 text-black  placeholder:text-gray-700 mr-2 p-1 max-sm:text-xs max-sm:w-1/2' />
              
                <input type="password" ref={passwordRef} name='password' value={form.password} onChange={handleChange} placeholder='Enter Password...' className='rounded-full w-1/6 pl-3 bg-gray-400 text-black  placeholder:text-gray-700 p-1 max-sm:text-xs max-sm:w-1/2' />   
              <span><img ref={ref} src="image/closeeye.png" alt="openEye" width='25px' className='cursor-pointer relative right-8 top-1' onClick={showPassword} /></span>
          </div>

          <div className='flex justify-center mt-8'>
              <button onClick={savePassword} className='flex gap-3 p-2 rounded-full bg-gradient-to-r from-blue-700 to-violet-900 hover:bg-gradient-to-r hover:from-blue-500'>
                  <img src="image/Add.gif" alt="Add logo" width="30px" className='rounded-full max-sm:w-[15px]' />
                  <span className='text-white font-bold mt-1 max-sm:text-xs'>Save Password</span>
              </button>
          </div>


            <div className="text-white ml-36 font-bold mt-8 max-lg:ml-16 max-[450px]:text-center max-[450px]:ml-2">Your Passwords</div>
          <hr  className="text-gray-600 opacity-10 w-5/6 mx-auto"/>
          <div className="flex justify-center mt-2">
              {passwordArray.length === 0 && <div className="text-white text-xl">Your password is not found !</div>}
              {passwordArray.length !== 0 &&
                  <table className="text-white border border-gray-500 w-10/12 overflow-scroll h-44 mb-28 max-sm:text-xs ">
                      <thead className="bg-gray-500">
                          <tr>
                                <th className="overflow-scroll ">Website URL</th>
                                <th className="overflow-scroll ">Username</th>
                                <th className="overflow-scroll ">Password</th>
                                <th className="overflow-scroll ">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {passwordArray.map((item, index) => {
                              return (
                                  <tr key={index}>
                                      <td className="border border-x-gray-500 border-y-0 py-2 px-2 text-center ">
                                          <div className="flex gap-3">
                                              <a className="overflow-scroll max-sm:w-20" href="{item.site}" target='_blank'>{item.site}</a>
                                              <img onClick={() => { copyText(item.site) }} className="hover:w-5  cursor-pointer overflow-scroll" src="image/copy.svg" alt="copy" />
                                          </div>
                                      </td>
                                      <td className="border border-x-gray-500 border-y-0 py-2 px-2 text-center">
                                          <div className="flex gap-3 overflow-clip">
                                              <span className="overflow-scroll max-sm:w-10"> {item.username}</span>
                                              <img onClick={() => { copyText(item.username) }} className="hover:w-5  cursor-pointer overflow-scroll" src="image/copy.svg" alt="copy" />
                                          </div>
                                      </td>
                                      <td className="border border-x-gray-500 border-y-0 py-2 px-2 text-center">
                                          <div className="flex gap-3 overflow-clip">
                                              <span className="overflow-scroll"> {"***".repeat(item.password.length)}</span>
                                              <img onClick={() => { copyText(item.password) }} className="hover:w-5  cursor-pointer overflow-scroll" src="image/copy.svg" alt="copy" />
                                          </div>
                                      </td>
                                      <td className="border border-x-gray-500 border-y-0 py-2 px-2 text-center">
                                          <div className="flex gap-1">
                                              <img onClick={()=>{editPassword(item.id)}} className="cursor-pointer overflow-scroll" src="image/edit.svg" alt="edit" />
                                              <img onClick={() => { deletePassword(item.id) }} className="cursor-pointer overflow-scroll" src="image/delete.svg" alt="delete" />
                                          </div> 
                                      </td>
                                  </tr>
                                  

                              )

                          })}


                       
                     
                      </tbody>
                  </table>}
          </div>
          

     </div>
  )
}

export default Manager