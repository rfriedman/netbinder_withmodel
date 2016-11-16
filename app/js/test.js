angular.module('testApp', [])


  .controller('testController', function() {
    var testList = this;
    testList.message = [
      {text:'I come from angular'},
      {text:'my controller is testController'}];
    });


