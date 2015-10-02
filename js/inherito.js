var inHerito = (function(){
	
	'use strict';
	
	//private
	var

		logObject =  function (instance) {
			var key, properties = [];
			console.log('New inHerito instance:', instance.oName)
			for (key in instance) {
				if (instance.hasOwnProperty(key)) {
					properties.push(instance);
				}
			}
			console.log(instance.oName, properties);
		},
		
		renderObject =  function (context, obj) {
			context.innerHTML = obj;
		},
		
		createObject = function(options) {
			var instance = Object.create(this);
			instance.oName = options.oName;
			instance.oType = options.oType;			
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

