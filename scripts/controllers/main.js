'use strict';

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {
  
    
   $scope.addTodo = function() {
     var todo = {name: "This is a new to do."};
       $scope.todos.push(todo);
   };
    
    dataService.getTodos(function(response) {
        console.log(response.data);
        $scope.todos = response.data;
    });
    
    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };

    $scope.saveTodo = function(todo, $index) {
        dataService.saveTodo(todo);
    };
    
    $scope.todos = [
        {"name": "clean the house"},
        {"name": "water the dog"},
        {"name": "feed the lawn"},
        {"name": "pay dem bills"},
        {"name": "run"},
        {"name": "swim"}
    ]
})
