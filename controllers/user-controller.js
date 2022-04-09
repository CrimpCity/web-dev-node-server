import people from "./users/users.js";

let users = people;

// use express instance app to declare HTTP GET
const userController = (app) => {
    // request pattern /api/users to call a function
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}


// http://localhost:4000/api/users/:uid

// function runs when /api/users requested
// const findAllUsers = (req, res) => {
//     // responds with array of users
//     res.json(users);
// }

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findUsersByType = (type) => {
    return users.filter(user => user.type === type);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;              // retrieve type parameter from query
    if (type) {                               // if type parameter in query
        res.json(findUsersByType(type));      // find all users of that type and respond       
        return;                               // return so it doesn't continue   
    }
    res.json(users);
}



const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}


const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr => usr._id !== userId);
    res.sendStatus(200);
}


const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(usr => usr._id === userId ? updatedUser : usr);
    res.sendStatus(200);
}


// exports so server.js can import
export default userController;