
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

eventsApp.factory('eventData', function($http){
	return {
		getEvent: function(){
			return $http({method:'GET', url:'data/event/1'});
				}
		}
	}


)*/
//above http method is being replaced to use the RESTful architrecture and resoure service
eventsApp.factory('eventData', function($resource){
	var resource =  $resource('data/event/1',{id:'@id'}); 
	return {
		getEvent: function(){
			return resource.get({id:1});
		},
		save: function(event){
			event.id = 999;
			return resource.save(event);
				}
		}
	}


)
