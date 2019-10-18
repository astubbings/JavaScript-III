/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global object binding - when none of the other rules apply 'this' defaults to the window Object

* 2. most of the time we will use Implicit Binding which means 'this' refers to the object it is contained in (best way i can think about it.)

* 3. New Binding is when we use a Constructor to make new Objects and we can use a 'new' method outside of the constructor function and that allows to the constructor to make new objects

* 4. seems like explicit binding is an extension of new binding but this is explicitly defined outside the constructor and the new const.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sayTreeSpecies(nameoftree) {
    console.log(this);
    return nameoftree;
}
sayTreeSpecies("Oak Tree");



// Principle 2
// code example for Implicit Binding
const myTreeObj = {
    flora: 'Tree',
    whatSpecies: function(species) {
      console.log(`I am a ${this.flora} and my species is ${species} ${this.flora}`);
      //console.log(this);
    }
  };
  myTreeObj.whatSpecies('Oak');



// Principle 3
// code example for New Binding

function WelcomingFlora(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      //console.log(this);
    };
  }
  
  const bush = new WelcomingFlora('Tree');
  const tree = new WelcomingFlora('Bush');
  
  bush.speak();
  tree.speak();


// Principle 4
// code example for Explicit Binding

bush.speak.call(tree);