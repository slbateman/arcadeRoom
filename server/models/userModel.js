import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  socket_id: {type: String, default: ""},
  username: { type: String, required: true },
  password: { type: String},
  email: { type: String, default: "" },
  avatar: {
    type: String,
    default:
      "data:image/png;base64,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",
    limit: "30mb",
  },
  bio: { type: String, default: "" },
  color: { type: String, default: "#ffffff" },
  msgDensity: { type: Number, default: 16 },
  msgBrightness: { type: String, default: "#ffffff" },
  charTotal: { type: Number, default: 0 },
  msgTotal: { type: Number, default: 0 },
  rmsCreated: { type: Number, default: 0 },
  rmsDeleted: { type: Number, default: 0 },
  badges: { type: Array },
  createdAt: {
    type: String,
    default: new Date().toISOString,
  },
});

const Users = mongoose.model("user", userSchema);

export default Users;
