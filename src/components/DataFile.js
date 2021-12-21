//DataFile.js
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import sloth from "../images/asloth.png";
import bat from "../images/abat.png";
import frostpine from "../images/afrostpine.png";
import art1 from "../images/arcadeGame.png";
import art2 from "../images/mfGame.png";

const info = [
  {
    id: 0,
    name: "Frostypine",
    email: "",
    img: frostpine,
    color: "#001aff",
    blurb: "this is a tree",
  
    bio: "Frostypine is a tree that lives in the mountains, in eternal winter even in the summer. The pinecone sometimes seen is a fake pinecone shaped rock and was placed on herself for decoration",
    art1: art1,
    art2: art2,
  },

  {
    id: 1,
    name: "Sloth",
    email: "",
    img: sloth,
    color: "white",
    blurb: "Is not the known species of sloth found in the jungle, but actually cryptid decended from ice age era giant sloths. can mysteriously make a strange branch to hang on that seems to be infinet in length and floats in mid air.",
    bio: "About Sloth",
  },

  {
    id: 2,
    name: "Slobat",
    email: "stevelbateman@gmail.com",
    img: bat,
    color: "#befe3b",
    blurb: "Lives in a pocket space, probably is the one that found the fake pinecone and started the whole strange game the three freinds like to play.",
    bio: "Space Invaders (1978) established the 'multiple life, progressively difficult level paradigm' used by many classic arcade games.[75] Designed by Tomohiro Nishikado at Taito, he drew inspiration from Atari's block-breaker game Breakout (1976) and several science fiction works. Nishikado added several interactive elements to Space Invaders that he found lacking in earlier video games, such as the ability for enemies to react to the player's movement and fire back, with a game over triggered by enemies killing the player (either by getting hit or enemies reaching the bottom of the screen) rather than a timer running out.[76] In contrast to earlier arcade games which often had a timer, Space Invaders introduced the 'concept of going round after round.'[77] It also gave the player multiple lives before the game ends,[78] and saved the high score.[79] It also had a basic story with animated characters along with a 'crescendo of action and climax' which laid the groundwork for later video games, according to Eugene Jarvis.[80]",
  },
];

export default info;
