import tuitsModel from "../mongoose/tuits/tuitsModel.js";


export const findAllTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({ _id: tid });
export const updateTuit = (tid, tuit) => {
    // update the text field
    tuitsModel.updateOne({ _id: tid }, { $set: { tuitText: tuit.tuitText } });
    // update the stats field
    tuitsModel.updateOne({ _id: tid }, { $set: { stats: tuit.stats } });
}


export default { findAllTuits, createTuit, deleteTuit, updateTuit };