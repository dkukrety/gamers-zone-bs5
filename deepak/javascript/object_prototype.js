/**In JavaScript, the prototype is an internal property of an object that allows
 *  objects to inherit properties and methods from other objects. Every JavaScript
 *  object has a prototype, which acts as a blueprint for that object's properties and behaviors.

The prototype property allows you to add properties and methods to objects that are shared 
among all instances of a particular object type. It forms the basis of JavaScript's 
prototype-based inheritance model.

When you access a property or method on an object, JavaScript first checks if the object 
itself has that property or method. If it doesn't, it looks up the prototype chain to find 
the property or method on the object's prototype. This allows objects to inherit properties 
and methods from their prototypes.

The prototype property is specific to constructor functions and is used to define the
 properties and methods that will be inherited by instances created from that constructor
  function. You can add properties and methods to an object's prototype using the prototype property. */

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name);
  };
  
  // Creating instances of Person
  var person1 = new Person('Alice', 25);
  var person2 = new Person('Bob', 30);
  
  // Accessing the inherited method
  person1.greet(); // Output: Hello, my name is Alice
  person2.greet(); // Output: Hello, my name is Bob
  