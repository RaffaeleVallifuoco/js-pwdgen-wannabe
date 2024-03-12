console.log('prova');

const username = prompt('Inserisci il tuo nome'); //string  | null
const last_name = prompt('Inserisci il tuo cognome'); //string | null
const randomInt = Math.floor((Math.random() * 100) + 1); //number | null


console.log('nome:' + username);

console.log('nome:' + last_name);

const password = username+last_name;
console.log('pw : '+ password);


prompt('Your Js password is : ' + password + randomInt);

