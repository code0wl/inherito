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
         * Get super
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

            instance['id'] ? instance.id = instance.id : instance.id = generateUUID();
            Array.isArray(instance['inherit']) ? inherit(instance, superProps) : false;
            instance['debug'] ? logObject(instance) : false;

            return instance;
        };

    return {
        create: create
    };

})();

module.exports = inHerito;