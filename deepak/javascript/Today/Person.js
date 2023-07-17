class Person
{
    constructor(name,age, score, address, gamesPlayed, picture);
    {
        this.name = name;
        this.age= age;
        this.score = score;
        this.address = address;
        this.gamesPlayed = gamesPlayed;
        this.picture = picture
    }

    greet(){
        console.log(`hello my name is ${this.name} and 
                     age is ${this.age}. My address ${this.address}`);
    }
}

const person1 = new Person("Amit",24,100,["flat#678","apartemnt",787882,"bangalore"]);
person1.greet();