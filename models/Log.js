// models/Log.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  calories: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  }
});

module.exports = Log = mongoose.model('log', LogSchema);