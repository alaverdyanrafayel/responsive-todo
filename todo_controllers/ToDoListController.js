const ToDoList = require('../models/ToDoList'); // Import todo-list model

// Gets items from todo-list
module.exports.getAll = function(req, res) {

    if(req.params.id) {
        // Get all items from todo-list
        ToDoList.findOne({_id: req.params.id}).exec( function (err, todoItem) {
            if(err) res.json({ success: false, error_message: err });
            res.json({
                type: "GET",
                success: true,
                requested_todoItem: todoItem
            });
        });
    }
    else {
        // Get specific item from todo-list
        ToDoList.find({}).exec( function (err, todoList) {
            if(err) res.json({ success: false, message: err });
            res.json({
                type: "GET",
                success: true,
                requested_todoList: todoList
            });
        });
    }
}

// Creates todo-list item
module.exports.create = function (req, res) {
    const todo = req.body
    var todoItem = new ToDoList({
        title: req.body.title
        // order_number: req.body.order_number
    });

    todoItem.save( function (err, todoItem) {
        if(err) {
            if(err.code === 11000) {
                res.json({ success: false, message: 'Order-Number already exists!' });
            }
            else res.json({ success: false, error_message: err });
        }
        else {
            res.json({
                success: true,
                success_message: 'User has been created!',
                created_todoItem: todoItem
            });
        }
    });
}

// Updates todo-list item
module.exports.update = function (req, res) {
    ToDoList.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (todoItem){
        ToDoList.findOne({ _id: req.params.id }).then(function (updatedToDoListItem){
            res.json({
                type: "PUT",
                success: true,
                todoItem: todoItem,
                updated_todoItem: updatedToDoListItem
            });
        });
    });
}

// Deletes todo-list item
module.exports.delete = function (req, res) {
    console.log(req.params.id)
    ToDoList.findByIdAndRemove({ _id: req.params.id }).then(function (todoItem){
        res.json({
            type: "DELETE",
            success: true,
            deleted_user: todoItem
        });
    });
}