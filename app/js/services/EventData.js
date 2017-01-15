
/*
eventsApp.factory('eventData', function($http, $log){
	return {
		getEvent: function(successcb){
			$http({method:'GET', url:'data/event/1'}).
				success(function(data, status, header, config){
					successcb(data);
				}).
				error(function(data, status, header, config){
					log(data, status, header, config);
				})

		}
	}


})
*/
eventsApp.factory('eventData', function($http){
	return {
		getEvent: function(){
			return $http({method:'GET', url:'data/event/1'});
				}
		}
	}


)
