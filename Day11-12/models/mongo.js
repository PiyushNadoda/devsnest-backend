const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {type: 'string', default: ''},
    email: {type: 'string', default: ''},
    password: {type: 'string', default: ''},
})

module.exports = User = mongoose.model('model', UserSchema);