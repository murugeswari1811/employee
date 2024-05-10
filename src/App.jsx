import React from 'react';
import { MdMenu } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { MdForum } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";
import { FaHashtag } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TfiComments } from "react-icons/tfi";
import './App.css'
const App = () => {
  return (
    <>
        <div className='flex flex-row h-screen w-screen overflow-hidden'>
            <div className='flex flex-col w-1/12 '>
                <div className='bg-black h-full overflow-y-scroll'>
                   
                    <div className='mt-4 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><MdMenu className='text-2xl'/></p>
                        <p className='text-xs text-[#FA0847]'>Menu</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><IoBookSharp className='text-2xl'/></p>
                        <p className=' text-xs text-[#FA0847]'>Books</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><FaRegMessage className='text-2xl'/></p>
                        <p className=' text-xs text-[#FA0847]'>Messages</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><FcLike className='text-2xl'/></p>
                        <p className='text-xs text-[#FA0847]'>Likes</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><MdForum className='text-2xl'/></p>
                        <p className='text-xs text-[#FA0847]'>Forum</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><FaComments className='text-2xl'/></p>
                        <p className='text-xs text-[#FA0847]'>Comments</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><FaHandsHelping className='text-2xl'/></p>
                        <p className='text-xs text-[#FA0847]'>Help</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><IoIosSettings className='text-2xl'/></p>
                        <p className='text-xs text-[#FA0847]'>Setting</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><IoIosLogIn className='text-2xl'/></p>
                        <p className='text-xs text-[#FA0847]'>Log In</p>
                    </div>
                    <div className='mt-2 flex items-center justify-center flex-col'>
                        <p className='bg-white rounded-full px-2 py-2 hover:bg-[#FA0847]'><CiLogout className='text-2xl'/></p>
                        <p className='text-xs text-[#FA0847]'>Log Out</p>
                    </div>
                </div>
                
            </div>
            <div className='flex flex-col w-3/12'>
                <div className='h-[10%] bg-gray-200'>
                    <div className='mt-3 ml-4'>
                        <p className='text-xl font-bold text-[#FA0847]'>Employee Portal</p>
                    </div>
                </div>
                <div className='h-[30%] bg-[#FA0847]'>
                    <div className='mt-4 flex flex-col justify-center items-center'>
                        <img className="h-24 w-24 rounded-full border-4 border-black" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLwe-Pt1Jkpus4qZg650A4TPtGi92Xqylxca5OZ548A&s" alt="" />
                        <p className='font-medium text-m'>Murugeswari</p>
                        <p className='text-sm text-gray-700'>muru@gmail.com</p>
                    </div>
                </div>
                <div className='pt-8 h-[60%] bg-[#FA0847] overflow-y-scroll'>
                   <div className='ml-8 mt-2 mr-8 flex flex-col gap-2  '>
                        <div className='pl-6 bg-black text-white rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black '><FaHashtag className='inline mr-2 text-[#FA0847]'/>Employee Files</div>
                        <div className='pl-6 bg-black text-white rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black'><FaHashtag className='inline mr-2 text-[#FA0847]'/>Reports</div>
                        <div className='pl-6 bg-black text-white rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black'><FaHashtag className='inline mr-2 text-[#FA0847]'/>Leave</div>
                        <div className='pl-6 bg-white text-black rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black'><FaHashtag className='inline mr-2 text-[#FA0847]'/>Event</div>
                        <div className='pl-6 bg-black text-white rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black'><FaHashtag className='inline mr-2 text-[#FA0847]'/>Payroll</div>
                        <div className='pl-6 bg-black text-white rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black'><FaHashtag className='inline mr-2 text-[#FA0847]'/>Time Clock</div>
                        <div className='pl-6 bg-black text-white rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black'><FaHashtag className='inline mr-2 text-[#FA0847]'/>Time Clock</div>
                        <div className='pl-6 bg-black text-white rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black'><FaHashtag className='inline mr-2 text-[#FA0847]'/>Time Clock</div>
                        <div className='pl-6 bg-black text-white rounded-2xl h-12 text-start pt-2 hover:bg-white hover:text-black'><FaHashtag className='inline mr-2 text-[#FA0847]'/>Time Clock</div>


                   </div>
                </div>

            </div>
            <div className='flex flex-col w-5/12'>
                <div className='h-[10%] bg-gray-200'>
                    <div className='flex items-center justify-center'>
                        <span><input className='relative border-2 border-[#FA0847] rounded-2xl px-12 mt-3  ' type="text" /><BsSearch className='absolute top-4 text-[#FA0847] text-xl right-[36%]' /></span>
                        
                    </div>
                </div>
                <div className='h-[10%] bg-gray-200'>
                   
                        <div className='mt-3 text-center text-xl font-medium text-[#FA0847]'>
                            <p className='bg-gray-700 py-1'>Posts</p>
                        </div>
                        

                    
                </div>
                <div className='h-screen bg-gray-200 overflow-y-scroll'>
                        <div className='flex flex-col ml-6 mt-2 '>
                            {[...Array(20)].map(()=>(
                                <>
                                <div className='mt-2 h-96 w-[95%] bg-blue-200 rounded-xl flex flex-row items-center justify-center'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row'>
                                        <p><img className="ml-2 mt-2  h-12 w-12 rounded-full border-2 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLwe-Pt1Jkpus4qZg650A4TPtGi92Xqylxca5OZ548A&s"/></p>
                                        <p className='ml-2 mt-3 text-[#FA0847]'>Murugeswari</p>
                                        

                                    </div>
                                    <div className='flex flex-row text-xs justify-center items-center'>
                                        <p className='mt-2 ml-8 mr-8'>In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful</p>
                                    </div>
                                    <div className='mt-4 flex flex-row justify-center items-center'>
                                        <img className="h-52 border-2 border-black w-96 rounded-xl" src="https://images.ctfassets.net/qpn1gztbusu2/rzvTVAbE2GmuUwWOKKTlH/647e3acd9babb61293a7d8791c465c68/Nature-quote-5.png"/>
                                    </div>
                                    <div className='mt-4 flex flex-row items-center justify-start'>
                                        <p className='ml-12 text-sm '><IoEyeOutline className='inline-block text-xl'/> 9992</p>
                                        <p className='text-sm ml-4'><FcLike className='inline-block text-xl'/> Like</p>
                                        <p className='text-sm ml-4'><TfiComments className='inline-block '/> Comments</p>
                                    </div>
                                   

                                </div>
                            
                            </div>
                                </>
                            ))}
                            
                        </div>
                </div>
            </div>
            <div className='flex flex-col w-3/12'>
                <div className='h-[10%] bg-gray-200'>
                    <div className='mt-1 mr-6 flex flex-row justify-end'>
                        <p className='mt-3 text-xl text-[#FA0847] mr-4'><LuBellRing/></p>
                        <p className='mt-2 mr-4 font-medium'>Murugeswari</p>
                        <img className='h-12 w-12 rounded-full border-2 border-black' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLwe-Pt1Jkpus4qZg650A4TPtGi92Xqylxca5OZ548A&s"/>

                    </div>
                </div>
                <div className='h-[20%]'>
                    <div>
                        <p className='ml-2 mt-2 text-m font-medium text-[#FA0847]'>Stories</p>
                    </div>
                    <div className='ml-2 flex flex-row overflow-x-scroll mt-4 gap-2' id="element-class">
                    {[...Array(20)].map(()=>(
                        <>
                            <img className="h-12 w-12 rounded-full border-2 border-purple-500" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"/>
                        </>
                    ))}
                    </div>
                    
                </div>
                <div className='h-[40%] '>
                    <div className='h-[5%]'>
                        <p className='ml-2 mt-2 text-m font-medium text-[#FA0847]'>Friends</p>
                    </div>
                    <div className='h-[95%] ml-2 flex flex-col mt-4 gap-2 overflow-y-scroll'>
                    {[...Array(20)].map(()=>(
                        <>
                            <div className='flex flex-row justify-center items-center'>
                                <img className="mt-1 h-12 w-12 rounded-full border-2 border-purple-500" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"/>
                                <p className='ml-6 text-[#FA0847] text-sm '>Gayu</p>
                                <p><button className='ml-6 bg-black text-white rounded-xl text-sm px-2 py-1'>Follow</button></p>
                            </div>
                        </>
                    ))}
                    </div>
                </div>
                <div className='pt-6 h-[30%] '>
                    <div className='h-[20%]'>
                        <p className='ml-2 mt-2 text-m font-medium text-[#FA0847]'>Recommendations</p>
                    </div>
                    <div className='h-[80%] flex flex-row overflow-x-scroll' id="element-class">
                        {[...Array(20)].map(()=>(<>
                            <img className='ml-2 rounded-xl h-28 w-28' src="https://static.vecteezy.com/system/resources/previews/003/392/088/non_2x/colorful-hand-drawn-girl-with-yellow-dress-taking-a-photo-stickers-vector.jpg"/>
                        </>))}
                    </div>

                </div>

            </div>
        </div>
        
        


    </>
  )
}

export default App;
