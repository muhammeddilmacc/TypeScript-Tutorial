interface Greetable {
  isMust?: boolean; // optional thanks to '?' sign. If not provided, it will be undefined
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name + " and " + this.age);
  }
}

let user1: Greetable;
user1 = new Person("Muhammed", 30);

user1.greet("Hi there - I am");

console.log(user1);

