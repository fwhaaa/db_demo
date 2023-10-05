var mysql =require('mysql')

var connections =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"20020525fwh",
    
    port:"3306"
});

connections.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    connections.query("select * from mytest.topic;", function (err, result) {
        if (err) throw err;
        console.log(result);
    }) ;
        
})

