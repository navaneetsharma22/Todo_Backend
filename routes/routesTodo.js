const express = require("express");
const router = express.Router();   // ✅ FIXED

// import controller
const { createTodo } = require("../controllers/createTodo");
const {getTodo} = require("../controllers/createTodo");


// define API routes
router.post("/createTodo", createTodo);
router.get("/getTodos",getTodo);


module.exports = router;
