import mongoose from 'mongoose';
import tuitsSchema from "./tuitsSchema.js"


const tuitsModel = mongoose.model('TuitModel', tuitsSchema);
export default tuitsModel;