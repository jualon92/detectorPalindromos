let assert = require("assert");
let Frase = require("../main.js");
//let Frase = require("jualon92-palindromo") validacion de npm por mail todavia no me anda :( 

describe("Frase", function() {
    describe("#esPalindromo", function() {

        it("devuelve true por ser palindromo", function() { // mensaje string y funcion
            let esPal = new Frase("ana");
            assert(esPal.esPalindromo());
        });

        it("devuelve false por no ser palindromo", function() {
            let noPal = new Frase("manzana");
            assert.notEqual(noPal.esPalindromo());
        });

        it("deberia devolver verdadero para palindromos con mayus", function(){
            let palMayus = new Frase("ANa");
            assert(palMayus.esPalindromo());
        });

        it("deberia devolver True con frases con puntos y comas", function(){
            let palComp = new Frase("ana, ana.");
            assert(palComp.esPalindromo());
        });
        
    });

});

