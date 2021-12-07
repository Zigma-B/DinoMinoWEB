const { Schema, model } = require('mongoose');

const topSchema = Schema({
    name: {
        type: String
    },
    score:{
        type: String
    }
});


module.exports = model( 'Top', topSchema );
