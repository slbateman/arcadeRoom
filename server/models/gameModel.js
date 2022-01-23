import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
  leaderBoard: { type: Array },
  highScorer: {type: String, default: "Slobat"},
  currentHighScore: { type: Number, default: 0 },
  
})

const Game = mongoose.model("game", gameSchema)

export default Game; 