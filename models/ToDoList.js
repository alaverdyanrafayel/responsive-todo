// Mongoose ODM requirements for schema
const mongoose    = require('mongoose');
mongoose.Promise  = global.Promise;
const Schema      = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// Create todo-list schema
const ToDoListSchema = new Schema({
    title: { type: String }
    // order_number: { type: Number, unique: true }
});

module.exports = mongoose.model('ToDoList', ToDoListSchema);