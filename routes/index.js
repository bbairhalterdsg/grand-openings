var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
  .get(function(req, res, next) {
    res.render('index', { title: 'Store Opening Management System' });
  })

  .post(function(req, res, next) {
    var go = req.body;
    var days = go.goPrevDate;

    var prevDateArr = [];

    var timeKeys = {
      goPrevTime: [
        'goPrevTime_startHour',
        'goPrevTime_startMinute',
        'goPrevTime_startAmPm',
        'goPrevTime_endHour',
        'goPrevTime_endMinute',
        'goPrevTime_endAmPm'
      ]/*,
      goEventTime: [

      ],
      appearTime: [

      ]
      */
    };

    for(var d=0;d<=days.length-1;d++){
      var day = {};
      for(var key in Object.keys(timeKeys)){
        var obj = {};
        key = Object.keys(timeKeys)[key];
        var startTime="";
        var endTime="";
        for(var k=0;k<=timeKeys[key].length-1;k++){
          if(timeKeys[key][k].indexOf('start') > -1){
            startTime += go[timeKeys[key][k]];
          } else{
            endTime +=  go[timeKeys[key][k]];
          }
        }
        console.log(go[days[d][key]]);
        go[days[d][key]] = {
          startTime: startTime,
          endTime: endTime
        }
      }
    }

    //console.log(go);


    res.redirect('/');
  });

module.exports = router;
