const inHerito = (function(){
	
	'use strict';
	
	let 
	
		/** 
		 * @private 
		 * Log object if object has debug set to true
		*/
		logObject = (instance) => {
			Object.defineProperty(instance, 'debug', {writable: false, enumerable: false});
			console.dir(instance);
		},
		
		/** 
		 * @private 
		 * Merge parent's props into instance if indicated
		*/
		inherit = (instance, superProps) => {
			Object.defineProperty(instance, 'inherit', {writable: false, enumerable: false});
			return Object.setPrototypeOf(instance, superProps);
		},
		
		/** 
		 * @private
		 * Render object to DOM if specified in object creation
		 * Prototype, do not use for production yet
		*/
		render = (instance) => {
			if (instance.view) {
				let view = instance.view;
				view.template.src = view.imageUrl;
				view.parent.querySelector(view.context).appendChild(view.template);
			} else {
				console.error('instance does not have a view');
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

