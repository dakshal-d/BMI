const express= require('express');
const bodyParser= require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/ind.html");
});

app.post("/", function(req,res){
    var weight= parseFloat(req.body.weight);
    var height= parseFloat(req.body.height);
    var bmi = weight/(height*height);
    res.send("Your bmi is "+ bmi);

})
app.listen(3030, function(){
    console.log("server started.");
});