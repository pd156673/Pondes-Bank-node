console.log("FUNKTIONEN")
console.log("==========")

// Funktionen führen Operationen aus

let länge = 3
let breite = 5

let flaecheninhalt = länge * breite
console.log("Hier wie vorher berechnet:")
console.log("Flächeninhalt:" + flaecheninhalt)

// Jetzt die berechnung in einer Funktion:

// Zuerst wird die Funktion erstellt:

function berechneFlaecheninhalt (breite, länge){
    return länge * breite
}

// in einem 2. Schritt wird die Funktion aufgerufen:
console.log("Hier mit funktion berechnet:")
console.log("Flächeninhalt:" + berechneFlaecheninhalt(10,10))

// Der Vorteil von funktionen ist,l dass die Berechnung im Rumpf nur einmal ausformuliert werden muss.
// Die Funktion kann dann an vielen Stellen aufgerufen werden

// So werden Funktionen erstellt:

// 1. Das Reservierte Wort function 
// 2. ein sprechender Name. D.h. der Name soll beschreiben, was die Funktion macht.
// 3. Runde klammern am ende nehmen Parameter entgegen. Parameter sind das was die Funktion als input zur berechnung benötigt.
//    Funktionen können mehrere oder auch keinen Parameter entgegen nehmen.
// 4. In den geschweiften klammern wird die logik ausprogrammiert
// 5. Mit dem reservierten Wort return wird das ergebnis zurückgegeben.
console.log("----------")
console.log("Aufgabe 1:")
// Berechne das Volumen eines Quaders mit einer Funktion

function berechneVolumen (laenge, breite, hoehe){
    return laenge * breite * hoehe
}

console.log("Volumen:" + berechneVolumen(5,6,7))
console.log("----------")
console.log("Aufgabe 2:")
// Berechne den Bruttopreis aus dem Nettopreis

function berechneBruttoausNetto (Nettopreis, Mehrwertsteuersatz){
    return Nettopreis * Mehrwertsteuersatz
}

console.log("Bruttopreis:" + berechneBruttoausNetto(100,1.19))
console.log("----------")
console.log("Aufgabe 3:")
// Berechne die Schulnote aus der Abitur - Punktzahl.
function berechneNote(punktzahl) {
    let note;

    if (punktzahl <= 15) {
        note = 1.0;
    } else if (punktzahl <= 25) {
        note = 1.3;
    } else if (punktzahl <= 35) {
        note = 1.7;
    } else if (punktzahl <= 45) {
        note = 2.0;
    } else if (punktzahl <= 55) {
        note = 2.3;
    } else if (punktzahl <= 65) {
        note = 2.7;
    } else if (punktzahl <= 75) {
        note = 3.0;
    } else if (punktzahl <= 85) {
        note = 3.3;
    } else if (punktzahl <= 95) {
        note = 3.7;
    } else if (punktzahl <= 105) {
        note = 4.0;
    } else if (punktzahl <= 115) {
        note = 4.3;
    } else if (punktzahl <= 125) {
        note = 4.7;
    } else {
        note = 5.0;
    }

    return note;
}


console.log("Note für die Punktzahl 10: " + berechneNote(10))
console.log("----------")

console.log("Aufgabe 4:")

// Funktionen können auch innerhalb von Klassen definiert werden.
// Beispiel: Kredit

class Kredit{
    constructor(){
        this.Laufzeit
        this.Zinssatz
        this.Betrag
    }
    berechneGesamtkostenamEndederLaufzeit(){
        return this.Betrag + this.Betrag * this.Zinssatz
    }
}

let kredt = new Kredit
kredit.Betrag = 100
kredit.Laufzeit = 2
kredit.Zinssatz = 0,1

console.log("Gesamtkosten:" + kredit.berechneGesamtkostenamEndederLaufzeit())