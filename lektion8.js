//arbeta med konstruktorer


//skapa ett nytt objekt med hjälp av konstruktor
let kalle = new Object();
//Egenskaper
kalle.name = "Kalle";
kalle.lastName = "Berglöf";

//metoder

kalle.info = function(){
console.log(this.name + ' ' + this.lastName);
// med backtics, lättare för längre texter console.log(`${this.name} ${this.lastName}`);
}
kalle.info();


// object literal
let kalle2 = {
name: "Kalle",
lastName: "Berglöf"

}

console.log(kalle2);

