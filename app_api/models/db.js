var mongoose = require("mongoose");
var dbURI = "mongodb+srv://fatihulasli:fatih485189@mekanbul.dqvvzrj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresine bağlandı");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+" Bağlantıda hata oldu");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" Bağlantı kesildi");
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Uygulama kapatıldı");
    process.exit(0);
    
})
require("./venue"); 