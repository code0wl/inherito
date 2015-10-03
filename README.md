#inHerito prototype
inHerito is a composable factory that allows you create the objects you want with ease and with the correct inheritance. It allows you to use properties and function methods from other objects without overusing and overinheriting. Every object that is created gets it's own logging information if option is set to true and allows you to keep a mindful eye on your objects.

Do you need this design pattern? No!
Would it be useful for bootstrapping a new application? Hell yes!

inHerito allows you to pass any object property you may want and it bootstraps this into a new object for you with the correct inheritance with blazing speed.


###How to use
This script has no depencies except for running it in atleast a ES5 capable environment. Can be used for Node or Window environment if using the render feature or not. You may use es15 becuase of babel integration. 
A more fleshed out documentaiton will follow as I keep building up features. For now check the example files.

Ensure that you have gulp-cli installed globally by 
	
	$ sudo npm i gulp-cli -g
	
Once that is done, just install like any other project using node & npm

	$ npm i 
	$ gulp serve
	
###In development
- Compose and merge objects together
- Inherit default states