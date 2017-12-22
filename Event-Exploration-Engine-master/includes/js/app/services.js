angular.module('eCube.services', []).
factory('eCubeAPIservice', function($http) {

  var foo = {};
  // Getting Information For Product With Id 

  foo.getKeyphrases = function(page, query){
    return $http({
      method: 'get',
      url: '127.0.0.0:8000/eCube/keyPhraseRequest/?page=' + page + '&query=' + query,
    });
  }

  return foo;
});
