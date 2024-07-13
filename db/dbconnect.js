import mongoose from "mongoose";

const url = "mongodb://localhost:27017/userauth";

async function dbconnect(){
    try{
    await mongoose.connect(url)
    .then(console.log(`DataBase Connected`))
    .catch((err)=>{console.error(`dataBase Connection error ${err}`)})
    }catch(e){
        console.log(e);
    }
}

export default dbconnect;