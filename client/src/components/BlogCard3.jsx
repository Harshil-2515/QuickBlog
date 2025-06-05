import React from 'react'

import { useNavigate } from 'react-router-dom';

const BlogCard3 = ({blog}) => {
    const {title, description, category, image, _id} = blog;
    const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-103 hover:shadow-primary/25 duration-300 cursor-pointer'>
        <img src={image} className='aspect-video' alt="" />
        <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>{category}</span>

        <div className='p-5'>
            <h5 className='font-medium mb-2 text-gray-900'>{title}</h5>
            <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{__html:description.slice(0,80)}}></p>
        </div>
    </div>
  )
}

export default BlogCard3

// Stays in line with other elements (like inline)
// Can have width, height, padding, and margin (like block)
// Slices it to show only the first 80 characters. starts from 0

// User needs to be redirected when he clicks a card for that we will use use navigate on the card