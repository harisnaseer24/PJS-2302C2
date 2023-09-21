// let car={
//     name:"Land Cruiser",
//     brand:"Toyota",
//     year:"2024",
//     engine:"3700cc"
// }
// document.write(car.name);
// console.log(car);
//Classes : template for creating objects


class Vehicle{
constructor(name,brand,year,engine){
this.name=name;
this.brand=brand;
this.year=year;
this.engine=engine;
}

start(){
    console.log(`${this.brand} ${this.name} ${this.year} is started it has ${this.engine} engine.`)
}
}

let landcruiser= new Vehicle("Land Cruiser","Toyota","2023","4800cc");
let corolla= new Vehicle("Corolla","Toyota","2023","1800cc");
let civic= new Vehicle("Civic","Honda","2023","1800cc");
let mehran= new Vehicle("Mehran","Suzuki","2017","800cc");
// let landcruiser= new Vehicle("Land Cruiser","Toyota","2023","4800cc");
landcruiser.start();
mehran.start();
corolla.start();
civic.start();

//oop: OBJECTED ORIENTED PROGRAMMING 
//PILLARS OF OOP
/*
1.ABSTRACTION


2.ENCAPSULATION


3.POLYMORPHISM
5+5=10;//ADD
"HI"+"bYE"="HIBYE"//CONCAT

4.INHERITANCE

*/

class MotorBikes extends Vehicle{
constructor(name,brand,year,engine,seating,fuelTank){
    super(name,brand,year,engine),
    this.seat=seating,
    this.Tank=fuelTank;

}

kick(){
    console.log(`${this.brand} ${this.name}  dekho one kick start ha. this is ${this.seat} seating with  ${this.Tank} of tank`)
}

}

let yamaha= new MotorBikes("ybr","yamaha","2024","125cc","2 person","12 liters");
// yamaha.start();
yamaha.kick();

// civic.kick();
