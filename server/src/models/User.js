const { Schema, model } = require("mongoose");
// Con este modelo mongodb crea una collection llamada user
const userSchema = new Schema({
   username: {
     type : String,
     required : true,
     trim : true,
     unique : true
   }
  },{
    timestamps : true
  })

module.exports = model("User", userSchema);