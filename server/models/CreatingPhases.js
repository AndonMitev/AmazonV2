const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const creatingPhasesSchema = new mongoose.Schema({
    currentStep: { type: Number, default: 1, required: true },
    tempProductId: { type: objectId, ref: 'TempProduct' },
    userId: { type: objectId, ref: 'User', required: true }
});

module.exports = mongoose.model('CreatingPhases', creatingPhasesSchema);