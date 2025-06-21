import fs from 'fs'
import imagekit from '../configs/imageKit'
import Blog from '../models/Blog'


export const addBlog = async(req, res)=>{
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog)
        const imgFile = req.file

        // check if all feilds are present
        if(!title || !description || !category || !imgFile){
            return res.json({success: false, message: "Missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imgFile.path)

        // upload image to imagekit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imgFile.originalname,
            folder: "/blogs"
        })

        // optimize thorugh imagekit  url transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'}, // auto compression
                {format: 'webp'}, // convert to modern format
                {width: '1280'}  // width resizing 
            ]
        })

        const image = optimizedImageUrl
        
        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image,
            isPublished
        })

        res.json({success: true, message: "Blog added successfully"})

        // before storing our data on mongodb we will store our image on cloudstorage and url will get stored in db
    } catch (error) {
        res.json({success: false, message: error.message})
    }
} 