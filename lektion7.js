//Literal
/*let car = {
    //egenskaper
namn: 'volvo 740',
årsmodell: '1982',
vikt: '1352kg',
isWorking: true,
delar: ['ratt', 'hjul', 'förgasare', 'vinge', 'turbo'],
//metoder, 
printInfo: function(){
    console.log('bilens namn:' + this.namn+ ' ' + 'bilens årsmodell' + this.årsmodell);
}
};*/
// ta bort egenskap delete car.isWorking;
//Lägg till egenskap car.egenskap = värde;
//console.log(car); //skriver ut all info om objektet.
//car.printInfo(); //Skriver ut metoden
/*
let car = {
name: "fiat",
model: "500",
weight: "850kg",
color: "white",
start: function (){console.log("Start.....")},
drive: function(){console.log("brum.. brum.. brum...")},
brake: function(){console.log("breaaaakk....")},
stop: function(){console.log("power... off...")}
};
car.start();
car.drive();
car.brake();
car.stop();
console.log(car);*/


//övning 1
/*let kurs = {
kursnamn: 'Javascript1',
lärare: 'Mahmud al Hakim',
skola: 'Nackademin',
antalVeckor: 4,
period: 'HT-18'
}*/
/*
let ferrari = {
registreringsnummer: "BBB 123",
fabrikat: "",
modell  : "",
modellår: "",
växellåda: "",
miltal: "",
tillverkningsår: "",
bränsle:"",
}

let porsche = {
    registreringsnummer: "xxx 123",
    fabrikat: "",
    modell  : "",
    modellår: "",
    växellåda: "",
    miltal: "",
    tillverkningsår: "",
    bränsle:"", }

    let Camaro = {
        registreringsnummer: "TTT 123",
        fabrikat: "",
        modell  : "",
        modellår: "",
        växellåda: "",
        miltal: "",
        tillverkningsår: "",
        bränsle:"", 
    }
*/
let a = 10;
let b = 15;

console.log(a);
console.log(b);

function swap(){
let c = a;
console.log("Aet är nu b " + (a = b));
console.log("Bet är nu A " + (b = c));
}
swap();
swap();
swap();