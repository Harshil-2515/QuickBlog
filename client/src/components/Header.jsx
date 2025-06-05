import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'>

            <div className='inline-flex items-center justify-center gap-4 py-1.5 px-6 mb-4 rounded-full border border-primary/40 bg-primary/10 text-sm text-primary'>
                <p>New: AI Feature Integrated</p>
                <img src={assets.star_icon} alt="" className='w-2.5 ' />
            </div>
            
            <h1 className='text-3xl sm:text-6xl font-semibold text-gray-700 sm:leading-16'>Your own <span className='text-primary'>Blogging</span><br/>platform</h1>

            <p className='my-6 sm:my-8 max-w-2xl m-auto text-gray-500 max-sm:text-xs'>This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>

            <form className='flex justify-between max-w-lg mx-auto max-sm:scale-75 border border-gray-300 bg-white rounded-full overflow-hidden'>
                {/* shrinks the element to 75% of its original size */}
                <input className='w-full pl-4 outline-none' type="text" placeholder='Search For Blogs' required />
                <button className='py-2.5 px-8 bg-primary text-white hover:scale-107 transition-all cursor-pointer' type='submit'>Search</button>
            </form>
        </div>
        
        {/* Background gradient Image */}
        <img src={assets.gradientBackground} alt="" className='absolute -top-[50px] z-[-1] opacity-65' /> 
        {/* z-[-1] to push it at last layer */}
    </div>
  )
}

export default Header