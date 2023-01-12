let myH2AfterTheFirstH2 = document.createElement("h2"); // Declare variable 'myH2' and create an H2 element

let myH2AfterTheSecondH2 = document.createElement("h2"); // Declare variable 'myH2' and create an H2 element

console.log(myH2AfterTheFirstH2); // returns '<h2></h2>'

console.log(myH2AfterTheSecondH2); // returns '<h2></h2>'

myH2AfterTheFirstH2.innerText = "¡Yo soy un nuevo H2 en rojo!"; // Insert inner text to variable myH2AfterTheFirstH2 with value '¡Yo soy un nuevo H2 en rojo!'

myH2AfterTheSecondH2.innerHTML = "¡Yo soy <em>otro</em> nuevo H2 en azul!"; // Insert inner HTML to variable myH2AfterTheSecondH2 with value '¡Yo soy otro nuevo H2 en azul!'

console.log(myH2AfterTheFirstH2.innerText); // returns '¡Yo soy un nuevo H2 en rojo!'

console.log(myH2AfterTheSecondH2.innerText); // returns '¡Yo soy«otro nuevo H2 en azil!'

myH2AfterTheFirstH2.style.color = "red"; // Add CSS property 'color' with value 'red' to variable myH2AfterTheFirstH2

myH2AfterTheSecondH2.style.color = "blue"; // Add CSS property 'color' with value 'blue' to variable myH2AfterTheSecondH2

console.log(myH2AfterTheFirstH2.style); // returns 'CSSStyleDeclaration > color: 'red'

console.log(myH2AfterTheSecondH2.style); // returns 'CSSStyleDeclaration > color: 'blue'

let sibling = document.querySelectorAll("h2");

console.log(sibling); // returns "NodeList(2) [h2.h2, h2.h2]
//      0: h2.h2
//      1: h2.h2
//      length: 2
//      [[Prototype]]: NodeList"

sibling[0].after(myH2AfterTheFirstH2); // Adds what is contained as the variable "myH2AfterTheFirstH2" after the first element of the NodeList tagged as "sibling"
sibling[1].after(myH2AfterTheSecondH2); // Adds what is contained as the variable "myH2AfterTheSecondH2" after the second element of the NodeList tagged as "sibling"
