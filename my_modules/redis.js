var redis = require('redis');
var cli = redis.createClient();

redis.mod = function(){

  var obj = {};

  obj.cli = cli;

  obj.getId = function(id){
    var str = '';
    if(!id || id == 'undefined'){
      // GENERATE A NEW UNIQUE ID
      var buildId = function(){
        str = '';
        var charbank = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for (var i = 0;i <= 16; i++) {
        	var ind = Math.floor(Math.random() * (charbank.length-1)) + 1;
            str += charbank[ind];
        }

        cli.smembers('ids', function(err, mems){
          console.log(mems);
          if(mems.indexOf('str') > -1){
            buildId();
          } else {
            cli.sadd('ids', str);
          }
        });
      };
      buildId();
    } else {
      // RETURN THE SELECTED ID
      str = id;
    }
    return str;
  };

  return obj;

}();

module.exports = redis;
