#inHerito (Solving overinheritance with composable objects) 
<p><img src="https://travis-ci.org/code0wl/inherito.svg?branch=master" ></p>
inHerito is a composable factory that allows you create the objects you want with ease and with the correct inheritance. It allows you to use properties and function methods from other objects without overusing and overinheriting. Every object that is created gets it's own logging information if option is set to true and allows you to keep a mindful eye on your objects. This is my take on solving the original OOP problem of overinheriting.
Now you have OLOO (Objects Linked to Other Objects) and inherit only if you say so. 

Do you need this design pattern? No!

Would it be useful for bootstrapping a new application? Hell yes!
To set the tone and get the correct mindset. [watch this](https://www.youtube.com/watch?t=159&v=8pTEmbeENF4)

Never be affraid again to have more than one level deep of inherited object inheritance tree. In OOP we usually create newer objects for the sake of inheritance and not for the sake of
semantical correctness. 

- Ex: Let's consider a dog. A good and sane OOP developer would most likely create an abstract tree that resides the dog animal this way
	
	Animal // And Followed by animal properties (ex blood, heart, etc.)
	Animal.dog // And Followed by dog properties (bark, bite, age, how many legs, etc.)
	
But let's say in that same program we want to make a robot dog, which semantically inherits a of the dog's properties to begin with. But we know semantically that robot dog belongs basically from two classes.
It's not an Animal anymore but shares a lot with dog. 	

	Animal // And Followed by animal properties (ex blood, heart, etc.)
	Animal.dog // And Followed by dog properties (bark, bite, age, etc.)
	
My proposed solution is inherit or mixin the functions or static props you need. This keeps your objects clean and as reusable as possible. And as a complete extra benefit: You shall be more semantically correct.
Allow me to illustrate (use your imagination :D)

	let robotDog = dog.create({
		inherit: [bite, bark],
		material: metal
	});

	Is it a dog? true
	Is it a robot? true 

###How to use
This tool has no depencies except for running it in atleast an ES5 capable environment. Can be used for Node or Window environment if using the render feature or not. You may use es15 becuase of babel integration. 
A more fleshed out documentaiton will follow as I keep building up features. For now check the example files.

Ensure that you have gulp-cli installed globally by 
	
	$ sudo npm i gulp-cli -g
	
Once that is done, just install like any other project using node & npm

	$ npm i 
	$ gulp serve

In development
- Proper documentation
