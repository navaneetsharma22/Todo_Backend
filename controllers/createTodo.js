// import the model
const Todo = require("../models/Todo");

// CREATE TODO
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const response = await Todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

// // GET ALL TODOS ✅ (THIS WAS MISSING)
// exports.getTodos = async (req, res) => {
//   try {
//     const todos = await Todo.find({});

//     res.status(200).json({
//       success: true,
//       data: todos,
//       message: "Todos fetched successfully",
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       data: "internal server error",
//       message: err.message,
//     });
//   }
// };


// // GET TODO BY ID
// exports.getTodoById = async (req, res) => {
//   try {
//     const id = req.params.id;

//     const todo = await Todo.findById(id);

//     if (!todo) {
//       return res.status(404).json({
//         success: false,
//         message: "Todo not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: todo,
//       message: `Todo ${id} fetched successfully`,
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };

