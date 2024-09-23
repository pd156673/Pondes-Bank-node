console.log("Objekte")
console.log("=======")

// Bislang speichern wir Werte mit Variablen 
// Jede Variable nimmt genau einen Wert auf. IN dem Beispiel ist der Wert "Hans".
// In der realen Welt gibt es Objekte, über die mehrere Werte abgespeichert werden sollen.
// Beispiel: Schüler im Schulverwaltungsprogramm
// Interessierende Eigenschaften: Vorname, Nachnahme, Gebdatum/ ort, Klasse, Anschrift ...
// let vorname = hans
// let ...
// Problem: Die Eigenschaften stehen in keinem Zusammenhang. 
// Um den Zusammenhang zwischen einzelnen Werten herzustellen, gibt es Klassen und Objekte.
// Zunächst legt der Programmierer zur entwicklungszeit die Baupläne (Klassen) fest, nach denen Objekte zur
// laufzeit erstellt werden.
// Und das geht so:

class Schueler {
    constructor (){
        this.Vorname
        this.Nachname
        this.Klasse 

    }
}

// Die Objekte werden nun aus dem Bauplan (=Klasse) wie folgt erzeugt:

let schueler = new Schueler()
schueler.Vorname = "Hans"
schueler.Nachname = "Meier"
schueler.Klasse = "GW23A"

// Die Werte können wieder ausgegeben werden:

console.log ("Nachname: " + schueler.Nachname + ", Vorname: " + schueler.Vorname)

let schueler2 = new Schueler ()
schueler2.Nachname = "Pondes"
schueler2.Vorname = "David"
schueler2.Klasse = "GW23A"

console.log ("Nachname: " + schueler2.Nachname + ", Vorname: " + schueler2.Vorname)

// Um aus dem Bauplan (=Klasse) ein konkretes Objekt zu erzeugen, sind 3 Schritte notwendig:
// 1. Deklaration: let schueler 
// Bei der Deklaration wird bekannt gegeben wird bekanntgegeben, dass es ein Objekt namens schueler geben soll.
// 2. Instanziierung: new Schueler ()
// Bei der Instanziierung werden Speicherzellen im Arbeitsspeicher reserviert, um
// Eigenschaftswerte aufzulegen.
// 3. Initialisierung: schueler.Nachname = "Schmidt"
// Bei der Initialisierung werden konkrete Werte in die Speicherzellen



console.log("Aufgabe 1")
// Für eine Autovermietung sollen Autos verwaltet werden.
// Erstelle den Bauplan, um dann 3 Objekte zu instanziieren.


class Auto {
    constructor (){
        this.Modell
        this.Bezeichnung
        this.Getriebe
        this.PsAnzahl

    }
}
// Aus dem Bauplan werden nun drei Objekte instanziiert

let auto = new Auto ()
Auto.Modell = "Suv"
Auto.Bezeichnung = "X3"
Auto.Getriebe = "Automatik"
Auto.PsAnzahl = "300"

console.log ("Modell: " + Auto.Modell + ", Bezeichnung: " + Auto.Bezeichnung)


console.log ("Aufgabe 2")
// Deklariere, Instanziiere, initialisiere ein Objekt der realen Welt der eigenen Wahl.

class Schallplatte {
    constructor (){
        this.Album
        this.Preis
        this.Künstler

    }
}


let schallplatte = new Schallplatte ()
Schallplatte.Album = "Brothers in Arms"
Schallplatte.Preis = 25
Schallplatte.Künstler = "Dire Straits"

console.log ("Album: " + Schallplatte.Album + ", Preis: " + Schallplatte.Preis)

