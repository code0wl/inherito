const inHerito = (function(){
	
	'use strict';
	
	let 
	
		/** 
		 * @private 
		 * Log object if object has debug set to true
		*/
		logObject = function (instance) {
			Object.defineProperty(instance.props, 'debug', {writable: false, enumerable: false});
			console.info(instance.props);
		},
		
		/** 
		 * @private 
		 * Merge parent's props into instance if indicated
		*/
		inherit = (instance, superProps) => {
			// Internal calls are inaccessible 
			Object.defineProperty(instance.props, 'inherit', {writable: false, enumerable: false});
			if (instance.props.inherit === true) {
				return Object.assign(instance.props, superProps.props);	
			} else {
				let mixins = instance.props.inherit;
				mixins.map((currentValue) => {
					return instance.props[currentValue] = superProps.props[currentValue];
				});
			}
		},
		
		/** 
		 * @private
		 * Render object to DOM if specified in object creation
		 * Prototype, do not use for production yet
		*/
		render = (instance) => {
			if (instance.props.view) {
				let view = instance.props.view;
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
				instance.props = currentValue;
			});
			
			// options if provided
			instance.props['view'] ? render(instance) : false;
			instance.props['inherit'] ? inherit(instance, superProps) : false;
			instance.props['debug'] ? logObject(instance) : false;

			return instance;
		};
	
	// public api
	return {
		create : createObject
	};	
	
})();

