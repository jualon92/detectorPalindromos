(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

module.exports = Frase;
let pal = prompt("ingresar palindromo de prueba");
let fraseIngresada = new Frase(pal);

if (fraseIngresada.esPalindromo()) {
  alert(fraseIngresada.contenido + " es un palindromo!");
} else {
  alert(fraseIngresada.contenido + " no es un palindromo :(")
}


String.prototype.reverse = function(){ 
  return Array.from(this).reverse(); //this, own object.
}

function darVuelta(pfrase){
//se utiliza Array.from para evitar problemas con emojis
  return  Array.from(pfrase).reverse().join("");
 // return pfrase.reverse().join(""); //pfrase es String, se agrego en prototype.reverse(), syntactic sugar
}

function esVacio(pfrase){
  return pfrase.blank();
}


String.prototype.blank = function(){ //devuelve true si frase es whitespaces
  return !this.trim(); // si trim() devuelve "" es verdadero
}

Array.prototype.last = function(){ //devuelve ultimo ele de array
   return this[this.length - 1]
}


//////////////////////


function Frase(contenido){ //funcion constructor, clase.
  this.contenido = contenido; // atributo

  //devuelve palabra a utilizar, se separa logica procesamiento y devolver frase
  this.getPal = function getPal(){
    //return this.contenido.toLowerCase() //procesa y retorna, hace dos cosas a la vez :/
  //  return this.procesar(this.contenido); //para que parametro? utilizar this
      return this.procesar();
  }

  this.letters = function letters() {
    arrTarget = Array.from(this.contenido);
    return arrTarget.filter( letra => letra.match(/[a-zA-Z]/)).join(""); //"hola."=>["h",o","l","a"]
  
  }


  //procesa palabra, puede crecer
  this.procesar = function procesar(){
    return this.contenido.toLowerCase();
  }


  //sujeto se encarga de afirmar si es o no palindromo.
  this.esPalindromo = function esPalindromo(){ //metodo,mensaje
    return darVuelta(this.getPal()) === this.getPal();
  }

  this.gritar= function gritar(){
    return this.contenido.toUpperCase()
  }
}


function palabraTraducida(contenido, tradu){
  this.contenido = contenido;
  this.tradu = tradu;

  //override, toma tradu en vez de contenido
  this.getPal = function getPal(){
    return this.procesar(this.tradu);
  }

}

//hereda de clase Frase metodos y atributos
palabraTraducida.prototype = new Frase()

//prueba
String.prototype.reverse = function(){
  return Array.from(this).reverse() //this, own object.
}





},{}]},{},[1]);
