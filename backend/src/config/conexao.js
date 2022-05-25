const mongoose = require("mongoose");

//var mongoose = require('mongodb').MongoClient;
//var dburl       =   "mongodb+srv://webiii:webiii@cluster0.idlui.mongodb.net/test";

var dburl       =   "mongodb://localhost:27017/webiii";

mongoose.connect(dburl, function(err, db) {
    try{
        console.log('MongoDB conectado!!!');
        db.close();
    
    } catch {
        throw err

    }
  }
);
