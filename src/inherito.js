const inHerito = (function(){
	
	'use strict';
	
	let 
	
		/** 
		 * @private 
		 * Log object if object has debug set to true
		*/
		logObject = (instance) => {
			console.dir(instance);
		},
		
		/** 
		 * @private 
		 * Merge parent's props into instance if indicated
		*/
		inherit = (instance, superProps) => {
			return Object.assign(instance, superProps);
		},
		
		/** 
		 * @private
		 * Render object to DOM if specified in object creation
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
		createObject = function(...options) {
			let instance = Object.create(this),
				superProps = this;
						
			// set only the new properties
			options.map((currentValue) => {
				instance = currentValue;
			});
			
			// options if provided
			instance['view'] ? render(instance) : false;
			instance['inherit'] ? inherit(instance, superProps) : false;
			instance['debug'] ? logObject(instance) : false;

			return instance;
		};
	
	// public api
	return {
		create : createObject
	};	
	
})();

