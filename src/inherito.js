const inHerito = (function (d) {

    'use strict';

    let
        /**
         * Log object if object has debug set to true
         * @function logObject
         * @parameter {object} instance
         * @private
         */
        logObject = (instance) => {
            Object.defineProperty(instance, 'logger', {enumerable: false});
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

            let mixins = instance.implements, inheritedObject = {};

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
         * @function renders elements to the DOM
         * @param instance
         * @param customTag
         */
        render = (instance, customTag) => {
            let instanceView = instance.view,
                keys = Object.keys(instance),
                elementInstance = new customTag(),
                element = d.querySelector(instanceView.el);

            elementInstance.innerHTML = instanceView.template;

            keys.forEach((key, index) => {
                if(key !== 'view') {
                    elementInstance.innerHTML += `<p>${key} :  ${instance[key]}</p>`;
                }

            });

            element.appendChild(elementInstance);
        },

        /**
         * Semantically creates new DOM elements
         * @function registerElements
         * @param {object} view
         */
        registerElements = (instance) => {
            if (!instance.view.tag.includes('-')) {
                console.error('Custom tags must include a hyphen');
            } else {
                let registeredTag = d.registerElement(instance.view.tag);
                instance.view.template ? render(instance, registeredTag) : false;
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

            instance['id'] ? instance['id'] : instance.id = generateUUID();
            instance['view'] ? registerElements(instance) : false;
            Array.isArray(instance['implements']) ? inherit(instance, superProps) : false;
            instance['logger'] ? logObject(instance) : false;

            return instance;
        };

    return {create};

})(document);