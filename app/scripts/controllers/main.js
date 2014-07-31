/*global Firebase */

'use strict';

angular.module('tAppApp')
  .controller('MainCtrl', function ($scope, $timeout) {
  	var rootRef = new Firebase('https://scorching-fire-3239.firebaseio.com/');
  	var messagesRef = rootRef.child('messages');

    $scope.currentUser = null;
    $scope.currentText = null;
    $scope.messages = [];

  	messagesRef.on('child_added', function(snapshot){
  		$timeout(function(){
        var snapshotVal = snapshot.val();
        $scope.messages.push(snapshotVal);
      });
  	});

    $scope.sendMessage = function(){
      var newMessage = {
        user: $scope.currentUser,
        text: $scope.currentText
      };

      messagesRef.push(newMessage);
    };

  });



