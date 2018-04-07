// Import route controller functions
const ToDoController = require('../todo_controllers/ToDoListController');

module.exports = function (router) {

    //REST api calls
    // Show todo-list or specific item of it
    router.get('/todo-list/:id?', ToDoController.getAll);

    // Create todo-list item
    router.post('/todo-list', ToDoController.create);

    // Change todo-list item
    router.patch('/todo-list/:id', ToDoController.update);

    // Delete todo-list item
    router.delete('/todo-list/:id', ToDoController.delete);

    return router;
};