var fs= require('fs');

module.exports = function (dirName, extName , callback){

fs.readdir(dirName, function(err, data){
    if(err){
        return callback(err)   
     }
    var regextest = new RegExp('.+\.'+ process.argv[3] + '$');
    data = data.filter(function(elem){
        return regextest.test(elem); 
    }).
  callback(null,data);
   
});
}