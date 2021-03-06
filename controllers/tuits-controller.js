import posts from "./tuits/tuits.js";


let tuits = posts;

const tuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = (req, res) => { res.json(tuits); }


const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.stats = { comments: 0, retuits: 0, likes: 0, dislikes: 0 };
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

// // updates entire Tuit
// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updatedTuit = req.body;
//     tuits = tuits.map(t => t._id === tuitdIdToUpdate ? (t.tuit = updatedTuit.tuit) : t);
//     res.sendStatus(200);
// }


// Updates ONLY tuit attribute
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits.forEach(t => t._id === tuitdIdToUpdate ? (
        t.tuitText = updatedTuit.tuitText, t.stats = updatedTuit.stats) : t)
    res.sendStatus(200);
}




// exports so server.js can import
export default tuitsController;