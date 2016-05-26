angular.module('todoApp', ['ui.router'])
  .controller('HomeController', function ($http) {
    self = this
    self.userInput = ""
    self.result = []
    self.submit = function() {
      self.result = []
      $http({
        method: 'GET',
        url: 'http://url'
      }).then(function successCallback(response) {
        self.result = response.result
      }, function errorCallback(response) {
        console.log("Error")
      });
    }
  })
