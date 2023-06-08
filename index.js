import {config} from "dotenv"
import connectDb from "./database/dbConnect.js";
import app from "./app.js";
config({path:"config.env"});

connectDb();






app.listen(process.env.PORT,()=>{
  console.log(`server is running on port http://localhost:5050`);
})
