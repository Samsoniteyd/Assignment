import express from 'express';
import bodyParser from 'body-parser';
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("../routes/user");
const authRoute = require("../routes/auth");
const productRoute = require("../routes/product");
const cartRoute = require("../routes/cart");
import path from 'path';

const cors = require("cors");



const app = express();
app.use(bodyParser.json());


app.use('/images', express.static(path.join(__dirname, '../assets')));


  dotenv.config();

  mongoose.connect( process.env.MONGO_URL).then(()=> console.log ("DBConnection successfull"))
 .catch((err)=> {
     console.log(err);
 });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);





app.listen(8000, ()=>{
   
    console.log("Server is running!");
});