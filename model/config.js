const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://Riya:OFJeS87CbA8lNAw7@cluster0.kysgbai.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to database"));

db.once('open',function(){
    console.log('Connected to DataBase');
});

module.exports = db;