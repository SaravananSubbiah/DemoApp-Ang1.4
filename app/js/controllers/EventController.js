'use strict';
eventsApp.controller('EventController',
	function EventController($scope, eventData, $log ) {
		$scope.boolValue = true;
		$scope.mystyle = {color:'red'};
		$scope.myclass = "blue";
		$scope.buttondisabled = true;
		$scope.sortorder = '-name';
		//$scope.event = eventData.event;
		/*
		eventData.getEvent(function(event){
			$scope.event = event;
		});
		
		eventData.getEvent()
			.success(function(event){$scope.event = event; })
			.error(function(data, status, headers, config){
					log(data, status, headers(), config);
				});*/
			eventData.getEvent()
			.$promise
			.then(function(event){$scope.event = event})
			.catch(function(response){console.log(response)})
			
			$scope.upVoteSession = function(session){
				session.upVoteCount++;
			},
			$scope.downVoteSession = function(session){
				session.upVoteCount--;
			}


	})
