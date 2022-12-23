import mongoose from "mongoose";

export const connectDatabase = async () => {
  mongoose.set("strictQuery", false);
    console.log("connexions ", mongoose.connections)
  // if(mongoose.connections[0]){
  //   return
  // }
  await mongoose
    .connect(
      "mongodb+srv://admin:gL6x8rA4v4rU3cAe@cluster0.an05dnn.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected !"))
    .catch((err) => console.log(err));
}
