let inHerito = (function () {

    'use strict';

    const

        /**
         * Log object if object has debug set to true
         * @function logObject
         * @parameter {object} instance
         * @private
         */
        logObject = (instance) => {
            Object.defineProperty(instance, 'debug', {writable: true, enumerable: false});
            console.log(instance);
        },

        /**
         * Get super
         * @function inherit
         * @parameter {object} instance
         * @parameter {object} superProps
         * @private
         */
        inherit = (instance, superProps) => {
            Object.defineProperty(instance, 'implements', {writable: false, enumerable: false});

            let mixins = instance.implements,
                inheritedObject = {};

            mixins.map((currentValue) => {
                inheritedObject[currentValue] = superProps[currentValue];
                return Object.setPrototypeOf(instance, inheritedObject);
            });
        },

        /**
         * Generates a unique id if one does not exist
         * @function generateUUID
         * @returns {string}
         */
        generateUUID = () => {
            let
                dateNow = new Date(),
                uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                    let randomness = (dateNow + Math.random() * 16) % 16 | 0;
                    dateNow = Math.floor(dateNow / 16);
                    return (c == 'x' ? randomness : (randomness & 0x3 | 0x8)).toString(16);
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
            Array.isArray(instance['implements']) ? inherit(instance, superProps) : false;
            instance['debug'] ? logObject(instance) : false;

            return instance;
        };

    return {create};

})();