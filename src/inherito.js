var inHerito = (function(){
	
	'use strict';
	
	var
		logObject =  function (instance) {
			let key, properties = [];
			for (key in instance) {
				if (instance.hasOwnProperty(key)) {
					properties.push(instance);
				}
			}
			console.log('inherito object: ', instance);
		},
		
		renderObject =  function (context, obj) {
			context.innerHTML = obj;
		},
		
		createObject = function(...options) {
			let instance = Object.create(this);
				
			options.map(function(currentValue, index){
				instance[index] = currentValue;
			});
			
			logObject(instance);
			return instance;
		};
	
	// public api
	return {
		create : createObject,
		render : renderObject
	};	
	
})();

var artist = inHerito.create({kind: 'Musicisian', instrument: 'Guitar', gender: 'female!'});
