var inHerito = (function(){
	
	'use strict';
	
	//private
	var

		logObject =  function (instance) {
			console.log('New inHerito instance:', instance.oName)
			console.dir(Object.keys(instance));
			console.dir(Object.keys(instance.hasOwnProperty()));
		},
		
		renderObject =  function (context, obj) {
			context.innerHTML = obj;
		},
		
		createObject = function(options) {
			var instance = Object.create(this);
			instance.oName = options.oName;
			instance.oType = options.oType;
			
			Object.defineProperties(instance, properties)
			
			logObject(instance);
			
			return instance;
		};
	
	// public api
	return {
		create : createObject,
		render : renderObject
	};	
	
})();

var artist = inHerito.create({oName: 'Musicisian', oType: 'female singer'});

