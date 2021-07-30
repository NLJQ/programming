//variables
/*let username = 'Nichelle';
console.log(username);*/

//constant
/*const rate = 1;
rate = 2;
console.log(rate);*/



let nichelle = {
    name: 'Nichelle',
    hair: 'brown',
    age: 22
};

//Dot notation
nichelle.hair = 'white';

//Bracket notation
let selection = 'age'
nichelle[selection] = 30;
// ^ is same as v
nichelle['age'] = 30;

//console.log(nichelle);

//Dynamic array
let testarray = [1, 2];
testarray[2] = 3;
//console.log(testarray);

//Functions
function welcome (name){
    //console.log('welcome to this world ' + name);
}
welcome('nichelle');

//Square function
function square (number){
    return number*number;
}
console.log(square(2));