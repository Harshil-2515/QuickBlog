import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-white border-primary/70 border-[6px]'></div>
    </div>
  )
}

export default Loader