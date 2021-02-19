const { Schema, model } = require("mongoose");
// const { collection } = require("./User");

// Con este modelo mongodb crea una collection llamada note
const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    author: String,
    date: {
      type : Date,
      default : Date.now
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Note", noteSchema);
