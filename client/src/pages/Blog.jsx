import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Footer from '../components/Footer'
import { div } from 'motion/react-client'
import Navbar from '../components/Navbar'
import moment from 'moment'
import Loader from '../components/Loader'

const Blog = () => {
  const {id} = useParams(null)
  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchBlogData = async() => {
    const data = blog_data.find(item => item._id == id)
    setData(data)
  }

  const fetchComments = async()=>{
    setComments(comments_data)
  }

  const addComment = async (e)=>{
    e.preventDefault(); 
  }

  useEffect(()=>{
    fetchBlogData()
    fetchComments()
  }, [])

  return data ? (
    <div className='relative'>

      <img src={assets.gradientBackground} className='absolute opacity-50 -z-10 -top-52' alt="" />

    <Navbar/>
    
    <div className='text-center text-gray-600 mt-20'>
      <p className='text-primary font-medium py-4'>Published on {moment(data.createdAt).format("Do MMMM YYYY")}</p>
      <h1 className='font-semibold text-2xl sm:text-5xl max-w-2xl mx-auto'>{data.title}</h1>
      <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
      <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Michael Brown</p>
    </div>

    <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
      <img src={data.image} className='rounded-3xl mb-5' alt="" />
      <div className='rich-text max-w-4xl mx-auto' dangerouslySetInnerHTML={{__html: data.description}}></div>
      
      {/* comment section */}
      <div className='mt-14 mb-10 max-w-3xl mx-auto'>
        <p className='font-semibold mb-4'>Comments ({comments.length})</p>
        <div className='flex flex-col gap-4'>
          {comments.map((item,index)=>(
            <div key={index} className='relative bg-primary/4 border border-primary/5 max-w-xl  p-4 rounded text-gray-600'>
              <div className='flex items-center gap-2 mb-2'>
                <img src={assets.user_icon} className='w-6' alt="" />
                <p className='font-medium'>{item.name}</p>
              </div>
              <p className='text-sm max-w-md ml-8'>{item.content}</p>
              <div className='absolute right-4 bottom-3 text-xs flex items-center gap-2'>{moment(item.createdAt).fromNow()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* comment box */}
      <div className='max-w-3xl mx-auto'>
        <p className='font-semibold mb-4'>Add your comment</p>
        <form onSubmit={addComment} className='max-w-lg flex flex-col items-start gap-4'>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none'/>
          <textarea onChange={(e)=>setContent(e.target.value)} value={content} className='w-full h-48 p-2 rounded border border-gray-300 outline-none' required placeholder='Add a Comment'></textarea>
          <button type='submit' className='bg-primary rounded text-white p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>
        </form>
      </div>

      {/* share buttons */}
      <div className='max-w-3xl mx-auto my-16'>
        <p className='font-semibold my-4'>Share these article on social media</p>
        <div className='flex'>
          <img src={assets.facebook_icon} width={50} alt="" />
          <img src={assets.twitter_icon} width={50} alt="" />
          <img src={assets.googleplus_icon} width={50} alt="" />
        </div>
      </div>

    </div>
          <Footer/>
    </div>
  ) : <Loader/>
}

export default Blog


// {moment(item.createdAt) fromNow()} eg. 2 days ago 
// e.preventDefault(); prevent the deafult behavour whewn we submit the form
// when user add a comment it should be stored in a state variable (control input fields)