
// lavoro sui numeri

const totalNumbers = 5;
const maxNumbers = 100;
const Numbers = generateNumbers(totalNumbers);
console.log(Numbers);
let result = document.getElementById("grid");

// funzione: genera i 5 numeri diversi
function generateNumbers(totalNumbers) {
  let Numbers = [];

  while (Numbers.length < totalNumbers) {
    let randomNumber = 0;
    do {
      randomNumber = Math.floor(Math.random() * maxNumbers) + 1;
    } while (Numbers.includes(randomNumber));
      Numbers.push(randomNumber);

    for (let i = 0; i < totalNumbers/5; i++) {
      const box = document.createElement("div");
      box.className = "box";
      box.innerText = randomNumber;
  
      grid.appendChild(box);
      setTimeout (() => {
        box.className = "no-box";
      }, 3000);
      setTimeout (() => {
        const response = prompt('avanti esci i numeri')
      }, 4000); 
      
     
  }}





  
  return Numbers;
  
}

  
