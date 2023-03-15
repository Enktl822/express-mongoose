
import mongoose from "mongoose"

mongoose.connect(
    `mongodb+srv://enktl822:UN150N9Ll5M9i3sP@cluster0.lwvwfce.mongodb.net/sample_mflix?retryWrites=true&w=majority`
);


export default mongoose.connection;


