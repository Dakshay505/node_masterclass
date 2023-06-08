import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      "title": {
        type:String,
        required :true
      },
      "description": String,
      "price": Number,
      "discountPercentage": Number,
      "rating": Number,
      "stock": Number,
      "brand": String,
      "category": String,
      "thumbnail": String,
      "images": [
        String
      ]
})


const userModel = mongoose.model("user",userSchema);
export default userModel;