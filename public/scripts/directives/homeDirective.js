;(function() {
	var app = this.nb;

	app.directive('homeFall', ['homeService', function(homeService) {
	 	var link = function(scope, element, attrs) {
            scope.datas = homeService.homeDirectiveData;
        }

        return {
        	restrict : 'EA',
	        replace : true,
	        scope : {
	            fallDatas : '='
	        },
	        templateUrl : 'partials/directives/homeDirective.html',
	        link : link
        }
	}])

}())