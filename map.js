(function(){
        angular
        .module( "map", [] )
        .directive("map", function(){
		return {
			restrict: 'AE',
			scope: {
				data: "<"
			},
			template: '<h1>Accordion</h1>',
			compile: compile,
			link: link
		}
        });
})();