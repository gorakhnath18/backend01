import dotenv, { config } from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'

})


connectDB()












/*

( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("error",error);
            throw err
            
        })
        app.listen(process.env.PORT,() => {
            console.log(
                `app is listeningon port ${process.env.PORT}`
            );
            
        })

    }catch(error){
        console.error("ERROR:",error)
        throw err
        
     }
})()
     
*/