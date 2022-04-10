// import posts from "./tuits/tuits.js";
// let tuits = posts;

import tuitsDao from "../daos/tuitsDao.js";



const tuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

// const findAllTuits = (req, res) => { res.json(tuits); }
const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}


// THIS USES posts from "./tuits/tuits.js"
// const createTuit = (req, res) => {
//     const newTuit = req.body;
//     newTuit._id = (new Date()).getTime() + '';
//     newTuit.stats = { comments: 0, retuits: 0, likes: 0, dislikes: 0 };
//     tuits.push(newTuit);
//     res.json(newTuit);
// }

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // make usernames unique
    newTuit.postedBy.username = (new Date()).getTime() + '';
    newTuit.stats = { comments: 0, retuits: 0, likes: 0, dislikes: 0 };
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}


// THIS USES posts from "./tuits/tuits.js"
// const deleteTuit = (req, res) => {
//     const tuitdIdToDelete = req.params.tid;
//     tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
//     res.sendStatus(200);
// }

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}


// // THIS USES posts from "./tuits/tuits.js"
// // Updates ONLY tuitText and stats attributes
// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updatedTuit = req.body;
//     tuits.forEach(t => t._id === tuitdIdToUpdate ? (
//         t.tuitText = updatedTuit.tuitText, t.stats = updatedTuit.stats) : t)
//     res.sendStatus(200);
// }

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.sendStatus(status);
}


// exports so server.js can import
export default tuitsController;