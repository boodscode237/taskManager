const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [165, 'name can not be more than 165 chars']
    },
    completed:{
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', taskSchema)