var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/testpost', function(req, res, next) {
//   console.log(req.body);
//   var prevDateArr = [];
//   for( var i=0; i=req.body.count; i++) {
//     var obj = {};
//     obj.goPrevDate1 = req.body.goPrevDate1[i];
//     $(prevDateArr).push(obj);
//   }
//   console.log(prevDateArr);
// });

module.exports = router;
