// Parent class
class Animal {
    speak() {
      console.log("The animal makes a sound");
    }
  }
  
  // Subclass 1
  class Dog extends Animal {
    speak() {
      console.log("The dog barks");
    }
  }
  
  // Subclass 2
  class Cat extends Animal {
    speak() {
      console.log("The cat meows");
    }
  }
  
  // Polymorphism in action
  function makeAnimalSpeak(animal) {
    animal.speak();  // This will call the appropriate speak method depending on the type of animal
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  makeAnimalSpeak(dog); // The dog barks
  makeAnimalSpeak(cat); // The cat meow