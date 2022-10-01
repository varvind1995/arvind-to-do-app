const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    topic: {type: String},
    description: {type: String}
},'todo');

module.exports = {Todo};
