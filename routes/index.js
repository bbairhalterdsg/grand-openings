var express = require('express');
var router = express.Router();
var redis = require('../my_modules/redis');

/* GET home page. */
router.route('/')
  .get(function(req, res, next) {
    var id = redis.mod.getId();
    console.log(id);
    res.render('index', { title: 'Store Openings' });
  })

  .post(function(req, res, next) {
    var go = req.body;

    var timekeys = [
      'storeNum',
      'storeName',
      'openingSoon',
      'newStore',
      'go',
      'goDate',
      'goPrevDateStart',
      'goPrevDateEnd',
      'goEvtDateStart',
      'goEvtDateEnd',
      'couponImg',
      'appearanceImg1',
      'appearanceDate',
      'appearanceName1',
      'appearanceTitle1',
      'appearanceDesc1',
      'giveawayDate',
      'giveawayD1T1',
      'giveawayD1Dec1',
      'giveawayD1Savings1',
      'giveawayDate2',
      'giveawayD2T1',
      'giveawayD2Desc1',
      'giveawayD2Savings1',
      'giveawayDate3',
      'giveawayD3T1',
      'giveawayD3Desc1',
      'giveawayD3Savings1',
      'winC1Brand1',
      'winC1Dec1',
      'winC1Savings1',
      'winC2Brand1',
      'winC2Dec1',
      'winC2Savings1',
      'winC3Brand1',
      'winC3Dec1',
      'winC3Savings1',
      'socialImg',
      'disclaimer'
    ];

    var goObj = function(){
      var obj = {};
      for(var key in timekeys){
        key = timekeys[key];
        obj[key] = go[key];
      }
      return obj;
    }();

    console.log(goObj);

    res.redirect('/');
  });

module.exports = router;
