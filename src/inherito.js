const inHerito = (function () {

    'use strict';

    const

        /**
         * @function logObject
         * Log object if object has debug set to true
         * @private
         */
        logObject = function (instance) {
            Object.defineProperty(instance, 'debug', {writable: false, enumerable: false});
            console.dir(instance);
        },

        /**
         * Merge parent's props into instance if indicated otherwise inherit all by default in JS manner
         * @function inherit
         * @private
         */
        inherit = (instance, superProps) => {
            Object.defineProperty(instance, 'inherit', {writable: false, enumerable: false});

            let mixins = instance.inherit,
                inheritedObject = {};

            mixins.map((currentValue) => {
                inheritedObject[currentValue] = superProps[currentValue];
                return Object.setPrototypeOf(instance, inheritedObject);
            });
        },

        /**
         * Render object to DOM if specified in object creation
         * @function render
         * @todo: Prototype, do not use for production yet Placing riot.js here
         * @private
         */
        render = ({view}) => {
            if (view) {
                view.template.src = view.imageUrl;
                view.parent.querySelector(view.context).appendChild(view.template);
            } else {
                console.error('instance does not have a view');
            }
        },

        /**
         * @function create
         * Create object instance and log or render if true
         * @public
         */
        create = function create(...options) {
            let instance = Object.create(this),
                superProps = this;

            options.map((currentValue) => {
                Object.assign(instance, currentValue);
            });

            instance['view'] ? render(instance) : false;
            Array.isArray(instance['inherit']) ? inherit(instance, superProps) : false;
            instance['debug'] ? logObject(instance) : false;

            return instance;
        };

    return {
        create: create
    };

})();

module.exports = inHerito;