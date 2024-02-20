// import mongoose from "mongoose";

// const Connection =() =>{
//     const DB_URI=`mongodb+srv://djjhadipak:<gmailclone>@cluster0.veq44es.mongodb.net/?retryWrites=true&w=majority`;
//      try{
//         mongoose.connect(DB_URI, {useNewUrlParser:true});
//         console.log("Database Connect Successfully");
//      }
//      catch(error){
//         console.log("Error while connecting with database", error.message);

//      }
// }
//
// export default Connection;

import mongoose from "mongoose";

const Connection = async () => {
    const DB_URI = `mongodb+srv://dipak:dmailclone@mail.wwpkout.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Error while connecting with database:", error.message);
    }
}

export default Connection;
