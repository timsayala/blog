import express from "express"
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

const app = express()



// app.get('/test',(req,res)=>{

//     res.json("It works")
   
//     })


app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.listen(8800, ()=>{
    console.log("Connected! ")
})