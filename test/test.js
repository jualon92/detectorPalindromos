let assert = require("assert");
let Frase = require("../index.js");

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

        
        it("deberia devolver True para palindromo con puntos o tildes", function(){
            let palComp = new Frase(".AnA.");
            assert(palComp.esPalindromo());
        });
        
        it("deberia devolver FAlse para palindromo con punto pero no igual", function(){
            let palComp = new Frase("AnA.");
            assert.notEqual(palComp.esPalindromo());
        });
        
    });

});

