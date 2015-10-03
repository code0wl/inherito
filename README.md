# inHerito
inHherito is a composable object factory creator that allows you create the objects you want with ease and with the correct inheritance. It allows you to use properties and function methods from other objects without overusing and overinheriting. Every object that is created gets it's own logging information if option is set to true and allows you to keep a mindful eye on your objects.

inHerito allows you to pass any object property you may want and it bootstraps this into a new object for you with the correct inheritance with blazing speed.


###How to use
This script has no depencies except for running it in a ES5 safe environment. Can be used for Node or Window environment. You may use es15 becuase of babel integration. 

	var Racer = inHerito.create({ carType: 'Porche', experience: 400 });
Since Racer is the new factory, the options given to it will act as default options. 
	
You can then decide to keep using racer by typing
	var Racer = inHerito.create({ carType: 'Porche', experience: 400 });

