 
function esPalindromo(pfrase){
    let palNormalizada = pfrase.toLowerCase(); //mayus no afecten
    return darVuelta(palNormalizada) === palNormalizada;
}

 
function darVuelta(pfrase){
//se utiliza Array.from para evitar problemas con emojis
  return  Array.from(pfrase).reverse().join("");
}

console.log(esPalindromo("hola"));
console.log(esPalindromo("ana"));
console.log(esPalindromo("ANA"));
//ignorar emojis


