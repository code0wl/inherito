const inHerito = (function () {

    'use strict';

    const

        /**
         * Log object if object has debug set to true
         * @function logObject
         * @parameter {object} instance
         * @private
         */
        logObject = (instance) => {
            Object.defineProperty(instance, 'debug', {writable: false, enumerable: false});
            console.dir(instance);
        },

        /**
         * Merge parent's props into instance if indicated otherwise inherit all by default in JS manner
         * @function inherit
         * @parameter {object} instance
         * @parameter {object} superProps
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

        generateUUID = () => {
            let dateNow = new Date();

            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                let randomness = (dateNow + Math.random()*16)%16 | 0;
                dateNow = Math.floor(dateNow/16);
                return (c=='x' ? randomness : (randomness&0x3|0x8)).toString(16);
            });

            return uuid;
        },

        /**
         * Render object to DOM if specified in object creation
         * @function render
         * @parameter {object} view
         * @todo: Prototype, do not use for production yet Placing riot.js here
         * @private
         */
        render = ({view}) => {
            if (view) {
                view.template.src = view.imageUrl;
                view.parent.querySelector(view.context).appendChild(view.template);
            } else {
                console.log('instance does not have a view');
            }
        },

        /**
         * Create object instance and log or render if true
         * @function create
         * @parameter {object} options
         * @public
         */
        create = function create(...options) {
            let instance = Object.create(this),
                superProps = this;

            options.map((option) => {
                Object.assign(instance, option);
            });

            instance.id = generateUUID();

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