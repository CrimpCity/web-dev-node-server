import posts from "./tuits/tuits.js";
let tuits = posts;


const updateTuit = (req, res) => { }
const deleteTuit = (req, res) => { }

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = (req, res) => { res.json(tuits); }

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}