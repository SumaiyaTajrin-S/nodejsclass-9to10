
const mongoose = require("mongoose");


const mongodbConfig = ()=>{
mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.ov6pfir.mongodb.net/${process.env.DATABASE_NAME}?appName=Cluster0`)
  .then(() => console.log("Connected!"));
}



module.exports = mongodbConfig




// mongodb+srv://sumaiyatajrin:fJ3VmgLorq9owZxQ@cluster0.ov6pfir.mongodb.net/$ecomerce?appName=Cluster0