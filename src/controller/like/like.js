import likeModel from "../../model/like/like.js";

const likeController={

    create:async(req,res)=>{
        try{

            const {userid,postid}=req.body;
            const data= await likeModel.create({
                userid,
                postid

            })
         
            return res.json({
                message:"Data is Inserted",
                data,
            })


        }catch(error){
            return res.status(500).json({
                Message:error
            })
        }
    },
    update:async(req,res)=>{
        try{
            const {id,postid,userid}=req.body;
            const data=await likeModel.findOne({
                where:{
                    id,
                }
            })
            data.userid=userid
            data.postid=postid
            const newdata= await data.save()
            return res.json({
                Message:"Data Updated...",
                newdata,
            })
        }
        catch(error){

            res.json({
                Message:error,
            })


        }
    },
    delete:async(req,res)=>{

        try{ 
            const {del}=req.params;
            const data=await likeModel.findOne({
                where:{
                    id:del,
                }
               
                
            })
            await data.destroy()

            return res.json({
                message:"This Entry is Deleted",
               
            })



        }catch(error){
            return res.status(500).json({
                message:error
            })
        }


    },
}


export default likeController;