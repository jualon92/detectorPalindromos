
module.exports = Frase;

function darVuelta(pfrase){
//se utiliza Array.from para evitar problemas con emojis
//  return  Array.from(pfrase).reverse().join("");
  return pfrase.reverse().join(""); //pfrase es String, se agrego en prototype.reverse(), syntactic sugar
}

function esVacio(pfrase){
  return pfrase.blank();
}

String.prototype.reverse = function(){ 
  return Array.from(this).reverse(); //this, own object.
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
    return this.procesar(this.contenido);
  }

  //procesa palabra, puede crecer
  this.procesar = function procesar(pfrase){
    return pfrase.toLowerCase();
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




