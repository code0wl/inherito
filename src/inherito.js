var inHerito = (function(){
	
	'use strict';
	
	var 
	
		logObject =  function (instance) {
			console.dir(instance);
		},
		
		renderObject =  function (context, obj) {
			context.innerHTML = obj;
		},
		
		createObject = function(...options) {
			let instance = Object.create(this);
				
			options.map(function(currentValue, index){
				instance = currentValue;				
			});
			
			instance['debug'] ? logObject(instance) : false;

			return instance;
		};
	
	// public api
	return {
		create : createObject,
		render : renderObject
	};	
	
})();

