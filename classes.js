class Hamster{
    owner=''
    constructor(name){
        this.name = name
    }
    price = 15
    wheelRun(){

    }
    eatFood(){

    }
    getPrice(){

    }

}

//committed with message "created Hamster class"
console.log('////////////////////////////////////////////////')
//Creating Person Class
class Person{
    constructor(name){
    this.name = name;
    }
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = [];
    bankaccount = 0;
    
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(name){
        console.log("Hello ",name);
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }
    // ageUp() - increment age, increment height, increment weight,
    // decrement mood, increment bank account by 10 (birthday money)
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankaccount+=10
    }
    //buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, 
    //decrement bankAccount by the value of the hamster (hint: use getPrice())
    buyHamster(newhamster){
        this.hamsters.push(newhamster);
        this.mood+=10;
        this.bankaccount-= (newhamster.getPrice());
    }

    setAge(age){
        for(let i=this.age;i<age;i++){
            this.ageUp();
        }
    }
}  
//commited till here with message "Created Hamster class"

//Create a Story with your Person class
//Instantiate a new Person named Timmy
const Timmy=new Person('Timmy');
console.log('when Timmy was in Tummy..lol')
console.log(Timmy)
console.log('when Timmy was 5 years old')
console.log(`My name is ${Timmy.getName()}`)
//Age Timmy five years
Timmy.setAge(5);
console.log(`\n ${Timmy.getName()} age is '${Timmy.getAge()} \n`)
console.log(`${Timmy.getName()}'s bank balance is ${Timmy.bankaccount}`)
console.log(`${Timmy.getName()}'s weight is ${Timmy.weight}`)
// Have him eat five times.//Have him exercise five times
for(let i=0;i<5;i++){
    Timmy.eat()
    Timmy.exercise()
}
//Age Timmy 9 years
console.log("\n After 4 Years")
Timmy.setAge(9);
console.log(`${Timmy.getName()}'s age is ${Timmy.getAge()}`)
console.log(`${Timmy.getName()}'s bank balance is ${Timmy.bankaccount}`)
console.log(`${Timmy.getName()}'s weight is ${Timmy.weight}`)

//Create a hamster named "Gus" //Set Gus's owner to the string "Timmy"
const gus =new Hamster('Gus')
gus.setOwner(Timmy.getName());
gus.eatFood();
gus.wheelRun();
//Have Timmy "buy" Gus
Timmy.buyHamster(gus)
//Age Timmy 15 years
console.log("\n Now Timmy is 15 years old.")
Timmy.setAge(15)
console.log(`${Timmy.getName()}'s age is ${Timmy.getAge()}`)
console.log(`${Timmy.getName()}'s bank balance is ${Timmy.bankaccount}`)
console.log(`${Timmy.getName()}'s weight is ${Timmy.weight}`)
//Have Timmy eat twice
for(let i=1; i<=2; i++) {
    Timmy.eat();
    Timmy.exercise();
}
console.log(Timmy)
//commited till here with message "Created Timmy's Story"

console.log('///////////////////////////////////////')