const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {typr: 'string', default: ''},
    email: {typr: 'string', default: ''},
    password: {typr: 'string', default: ''},
})

module.exports = User = mongoose.model('model', UserSchema);