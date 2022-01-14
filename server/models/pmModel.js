import mongoose from "mongoose";

const pmSchema = mongoose.Schema({
    users: { type: Array, required: true },
    messages: {
      type: Array, 
      user_id: { type: String },
      message: { type: String },
      default: []
    },
  });
  
  const PMs = mongoose.model("pm", pmSchema)
  
  export default PMs