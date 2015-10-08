const inHerito = (function(){
	
	'use strict';
	
	let 
	
		/** 
		 * @private 
		 * Log object if object has debug set to true
		*/
		logObject = function (instance) {
			Object.defineProperty(instance.props, 'debug', {writable: false, enumerable: false});
			console.dir(instance);
		},
		
		/** 
		 * @private 
		 * Merge parent's props into instance if indicated otherwise inherit all by default in JS manner
		*/
		inherit = (instance, superProps) => {
			// Internal calls are inaccessible
			Object.defineProperty(instance.props, 'inherit', {writable: false, enumerable: false});
			let mixins = instance.props.inherit;
			
			if (mixins.length > 1) { 
				
				//remove later
				if (typeof instance === 'number' || typeof superProps.props === 'boolean') {
					throw new TypeError('second argument to Object.appendChain must be an object or a string');
				}

				// which values are set here again?
				var oNewProto = instance,
					oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

				for (var o1st = this.getPrototypeOf(o2nd);
					o1st !== Object.prototype && o1st !== Function.prototype;
					o1st = this.getPrototypeOf(o2nd) ) {
					o2nd = o1st;
				}

				if (oProto.constructor === String) {
					oNewProto = Function.prototype;
					oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
					this.setPrototypeOf(oReturn, oLast);
				}

				this.setPrototypeOf(o2nd, oNewProto);
				return oReturn;
					
				
			} else {
				// just assign that one prop
				let protoObject;
				mixins.map((currentValue) => {
					protoObject = Object.setPrototypeOf(instance, superProps.props[currentValue]);	
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
		createObject = function createObject(...options) {
			let instance = Object.create(this),
				superProps = this;
						
			// set only the new properties
			options.map((currentValue) => {
				instance.props = currentValue;
			});
			
			// options if provided
			instance.props['view'] ? render(instance) : false;
			Array.isArray(instance.props['inherit']) ? inherit(instance, superProps): false;
			instance.props['debug'] ? logObject(instance) : false;

			return instance;
		};
	
	// public api
	return {
		create : createObject
	};	
	
})();

