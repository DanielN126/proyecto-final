const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PostSchema = new Schema({
  Balance: {
    type: Number,
    required: true
  },
  Ingresos: {
    type: Number,
    required: true
  },
  Gastos: {
    type: Number,
    required: true
  },
  MetaDeAhorro: {
    type: Number,
    required: true
  },
  Evento: {
    type: String,
    trim: true, 
    required: true
  }
}, { timestamps: true });

module.exports = Mongoose.model("Post", PostSchema);
