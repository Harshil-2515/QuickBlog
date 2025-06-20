


export const addBlog = async(req, res)=>{
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog)
        const imgFile = req.file

        // check if all feilds are present
        if(!title || !description || !category || !imgFile){
            return res.json({success: false, message: "Missing required fields"})
        }

        // before storing our data on mongodb we will store our image on cloudstorage and url will get stored in db
    } catch (error) {
        
    }
} 