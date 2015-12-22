var grandOpeningsApp = angular.module('grandOpeningsApp', []);

grandOpeningsApp.controller('grandOpeningsCtrl', function ($scope) {
  $scope.weekdays = [
    {'day': 'Sunday'},
    {'day': 'Monday'},
    {'day': 'Tuesday'},
    {'day': 'Wednesday'},
    {'day': 'Thursday'},
    {'day': 'Friday'},
    {'day': 'Saturday'}
  ]

  $scope.prevDates = [
    {'prevDay': 1}
  ]

  $scope.duplicatePrevEvent = function() {
    var newItem = {'prevDay': 2};
    newItem.prevDay++ //?
    $scope.prevDates.push(newItem);
    $scope.count = $scope.prevDates.length;
  }
});

// grandOpeningsApp.directive('previewDate', function() {
//   return {
//     template: 'test'
//   }
// });

//Adding the filter for the minute ranges
grandOpeningsApp.filter('minuteRange', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i <= total; i++) {
      if (i < 10) {
        //Making sure there is a leading '0'
        i = '0' + i;
        input.push(i);
      } else {
        input.push(i);
      }
    }
    return input;
  };
});

//Adding the filter for the date/time ranges
grandOpeningsApp.filter('hourRange', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i < total; i++) {
      if (i == 0) {
        input.push(i + 12);
      } else {
        input.push(i);
      }
    }
    return input;
  };
});
