var inHerito = (function(){
	
	'use strict';
	
	var 
	
		/** 
		 * @private 
		 * Log object if object has debug set to true
		*/
		logObject = (instance) => {
			console.dir(instance);
		},
		
		/** 
		 * @public
		 * Render object to DOM
		*/
		render = (instance) => {
			if (instance.view) {
				let view = instance.view;
				view.template.src = view.imageUrl;
				view.parent.querySelector(view.context).appendChild(view.template);
			} else {
				return false;
			}
		},
		
		/**      
		 * @public
		 * Create object instance and log or render if true
		*/
		createObject = (...options) => {
			let instance = Object.create(this);
			
			options.map(function(currentValue){
				instance = currentValue;
			});
			
			instance['view'] ? render(instance) : false;
			instance['debug'] ? logObject(instance) : false;

			return instance;
		};
	
	// public api
	return {
		create : createObject,
		render : render
	};	
	
})();

