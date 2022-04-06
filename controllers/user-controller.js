import people from "./users/users.js";

let users = people;

// use express instance app to declare HTTP GET
const userController = (app) => {
    // request pattern /api/users to call a function
    app.get('/api/users', findAllUsers);
}

// function runs when /api/users requested
const findAllUsers = (req, res) => {
    // responds with array of users
    res.json(users);
}

// exports so server.js can import
export default userController;