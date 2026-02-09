const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose
        .connect(process.env.DATABASE_URL)
        .then(() => console.log("DB ka connection successful"))
        .catch((error) => {
            console.log("Issue in DB Connection");
            console.error(error.message); // ✅ FIX
            process.exit(1); // 👇 explained below
        });
};

module.exports = dbConnect;
