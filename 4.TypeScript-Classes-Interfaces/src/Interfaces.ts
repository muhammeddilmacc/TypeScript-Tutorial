interface person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: person;

user1 = {
  name: "Bekir",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

