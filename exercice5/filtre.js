var fs= require('fs');

fs.readdir(process.argv[2], function(err, data){
    if(err){
        return console.error(err);
    }
    var regextest = new RegExp('.+\.'+ process.argv[3] + '$');
    data.filter(function(elem){
        return regextest.test(elem); 
    }).
    forEach(function(elem){
        console.log(elem);
    });
});