const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userController = require("./controllers/userController");
const chartController = require("./controllers/chartController");
const login = require("./middleware/authentication");

app.post("/login", userController.login);
app.post("/register", userController.createUser);

app.get("/", login, chartController.getJobAPI);
app.get("/positions/:id", login, chartController.getJobAPIById)

app.listen(port, (_) => console.log("Server is running on port:", port));