// import model 
const Todo = require('../models/Todo');

// GET ALL TODOS
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire todo list fetched successfully",
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error",
        });
    }
};


// GET TODO BY ID
exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;

        const todo = await Todo.findById({_id:id}); // cleaner way

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo data not found for given id",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} fetched successfully`, // fixed template string
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error",
        });
    }
};
