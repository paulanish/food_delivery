import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://paulanish:anish.1zo@cluster0.wk8hkky.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}