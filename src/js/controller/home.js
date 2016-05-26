angular.module('todoApp', ['ui.router'])
  .controller('HomeController', function ($http) {
    self = this
    self.userInput = ""
    self.result = []
    self.submit = function() {
      self.result = []
      var inputSentences = self.userInput.split('. ');
      for(var i=0; i<inputSentences.length-1;i++) {
        inputSentences[i] += '.'
      }
      $http.post('url', {
        sentences: inputSentences
        }).success(function (response) {
          self.result = response.result
        })
    }
  })
