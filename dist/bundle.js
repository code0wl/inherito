'use strict';

var inHerito = (function () {

	'use strict';

	var logObject = function logObject(instance) {
		var key = undefined,
		    properties = [];
		for (key in instance) {
			if (instance.hasOwnProperty(key)) {
				properties.push(instance);
			}
		}
		console.log('inherito object: ', instance);
	},
	    renderObject = function renderObject(context, obj) {
		context.innerHTML = obj;
	},
	    createObject = function createObject() {
		var instance = Object.create(this);

		for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
			options[_key] = arguments[_key];
		}

		options.map(function (currentValue, index) {
			instance[index] = currentValue;
		});

		logObject(instance);
		return instance;
	};

	// public api
	return {
		create: createObject,
		render: renderObject
	};
})();

var artist = inHerito.create({ kind: 'Musicisian', instrument: 'Guitar', gender: 'female!' });
//# sourceMappingURL=bundle.js.map
