import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";


const __dirname = path.resolve();

//import routes
import UserRouter from "./routes/userRoute.js";
const app = express();



// using middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public/dist'));
app.use(morgan('default'));




// routes
app.use("/api/v1",UserRouter)
app.use("*",(req,resp)=>{
    resp.sendFile(path.resolve(__dirname,"public/dist",'index.html'))
})


export default app;