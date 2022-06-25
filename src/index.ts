// tipagem tyrpescript string, boolean, number ,...
const x:number = 10 //annotation do tipo

console.log(x);

//inferencia x annotation
let y = 12;
let z : number = 12;

//tipos básicos
let firstName: string = "Priscilla"
let age: number = 30
const isAdmin: boolean = true

// String != string

console.log( typeof firstName);

firstName = "João"

console.log(firstName);

//object
const myNumbers : number[] = [1,2,3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase())
myNumbers.push(5);

console.log(myNumbers);

//tuplas
let myTuple:[number, string,string[]]
myTuple = [5, "teste",["a", "b"]] //os eles mentos e tem que seguir a ordem de tipagem

//object literals -> {prop: value}
const user: {name: string, age :number}= {
    name: "João",
    age: 18
}

console.log(user)

//any ma pratica
let a : any = 0
a = "teste";
a =true;
a = [];

//union type tipagem complexa
let id: string | number = "10"
id = 200

//type alias 
type myIdType = number|string 

const userId: myIdType = 10
const productId: myIdType = "0001"
const shirId: myIdType = 123

//enum
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name : "Camisa gola V",
    size: Size.G
}
console.log(camisa)

//literal types
let teste: "algumvalor" | null

//funcoes

function sum (a : number, b: number){ //tipagem das variaveis e obrigatoria
    return a + b
}
console.log(sum(12,13));

function sayHelloTo (name: string): string {
    return `Hello ${name}`;
}
console.log (sayHelloTo("João"));

function logger (msg: string) :void{ //mesmo sem retornar valor é tipada
    console.log (msg);
}
logger("Teste!")

function greeting (name: string, greet?:string){ //narrowing
    if (greet){
        console.log (`Ola ${greet} ${name}`);
        return;
    } else{
        console.log (`Ola ${name}`);
    }
}

greeting ("José");
greeting ("José" , "Sir");

//interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers ( nums: MathFunctionParams){
    return nums.n1 + nums.n2
}

console.log(sumNumbers ({n1:1,n2:2}))

function multiplyNumbers ( nums: MathFunctionParams){
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10

}

console.log(multiplyNumbers(someNumbers));

//narrowing : chegagem de tipos
function doSomething (info: number | boolean) {
    if (typeof info === "number"){
        console.log(`o número é ${info}`)
        return;
    }
    console.log ("Não foi passado um número")
}

doSomething(5);
doSomething (true);

//generics
function showArraysItens <T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`Item : ${item}`)
    });
}

const a1 = [1,2,3];
const a2 = [ "a", "b" ,"c"];

showArraysItens(a1) ;
showArraysItens (a2);

//classes

class User {
    name
    role
    isApproved

    constructor ( name: string, role: string, isApproved :boolean) {
        this.name = name;
        this.role = role ;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log (`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow :boolean): void{
        if (canShow){
            console.log (`O nome do usuário é ${this.role}`)
            return

        } else{
            console.log ("Informação Restrita")
        }

        
    }
}

const zeca = new User ( "Zeca" , "Admin", true );
console.log (zeca);

zeca.showUserName();
zeca.showUserRole(false);

// interfaces em classes
interface IVehicle {
    brand: string
    showBrand():void
}

class Car implements IVehicle{

    brand
    wheels

    constructor (brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void{
        console.log (`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car ("VW", 4);
fusca.showBrand();

//herança

class SuperCar extends Car{

    engine

    constructor (brand: string, wheels: number , engine: number){
        super (brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar ("Audi" , 4 , 2.0)
console.log(a4)

a4.showBrand();

//decorators 

function BaseParamters(){
    return function <T extends {new ( ... args: any[]): {}}> (constructor : T){
        return class extends constructor {
            id = Math.random();
            createdAt = new Date ();
        }

    }
}

@BaseParamters()

class Person{
    name

    constructor ( name: string){
        this.name = name
    }
}

const sam = new Person ("Sam");

console.log (sam);

