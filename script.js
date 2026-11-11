{
  let a = 0;
  const b = 1;
  var c = 2;
  console.log(a);
}
// Jag kan inte komma åt varibael som är utanför scope, eller innan men kommer åt inne i själva scope

/*
Uppgift 3

const add(num1, numb2){
    return num1 + num2;
}
 Function adder tal
Med let hade jag kunnat ändra varibel add men inte med const

function add(num1,num2){
return num1 + num2
}
return kastar tillbaka resultat som ex ovan gör den beräkning av två tal och retunerar summan, utan return hade functionen inte gjort något. Den hade fått två tal och inte gjort beräkningen
*/

// Uppgift 4

const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);
  console.log(num1 ? "truthy" : "falsy");

  if (
    num1 !== null &&
    num1 !== undefined &&
    typeof num1 === "number" &&
    num2 !== null &&
    num2 !== undefined &&
    typeof num2 === "number"
  ) {
    return num1 + num2;
  }
};
//Ternary operator är ett utryck som get ett värde, medan if/else är en sats som utför åtgärder.
// Skillnaden mellan == === är att === strikt sätt att göra jämförelse
// jag använde ! för att se att det inte är null eller undifiend samt  att num1 har typen av number.

// Uppgift 5.
const num1 = 0;
let arg1;
let sum = false;

console.log(add(sum, 1));
// Jag får undefind då funtionen kräver 2 siffror och jag ger den en sträng istället för 2 siffror

console.log(add("0", 3));
// Får undefind då jag ger den string och en siffra

console.log(add(3, "num1"));
// undefind jag ger en sträng

console.log(add(-5, num1));
// Får -5 efter jag plusar ihop -5 med varibel num1 som innehåller värdet 0

console.log(add(arg1, 7));
// arg1 har ingen värde så webbläsaren inte vet vad det innehåller och retunerar undefind

console.log(add);
// jag skriver ut och kallar på själva functionen utan att den får argument

console.log(add(num1, sum));
// Ger undefind då jag försöker addera en siffra med sträng och det går inte

/* 
parameter är som en platsbehållare som vi använder när vi skapar en funtion som ska ta emot argument.
Varibel är som en vägvisare till ett värde, eller du kan se det som en låda att stoppa in data
Argument är det faktiska data som vi passerar till funktionen när vi kallar den.*/

//
