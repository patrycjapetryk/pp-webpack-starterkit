import "../scss/main.scss";

const atomy = "x";

if (true) {
  const atomy = "y";
  console.log("hello webpack" + atomy);
}

class Car {
  constructor(name) {
    // konstruktor
    this.name = name;
  }
}

class FamilyCar extends Car {
  // dziedziczenie
  constructor(name, maxSpeed) {
    super(name); // wywołanie bazowego konstruktora
    this.maxSpeed = maxSpeed;
  }
}

var familyCar = new FamilyCar("Volvo", 120);

console.log(familyCar.name);
console.log(familyCar.maxSpeed);

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function() {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then(successMessage => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});
