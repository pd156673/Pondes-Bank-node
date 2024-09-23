console.log('Booleans')
console.log('========')

console.log('Boolische Werte sind Wahrheitswerte,die wahr(true) oder falsch(false) annehmen können.')

//Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel 

console.log('Aufgabe 01')

if (true){
    console.log('Der Ausdruck ist wahr')
}else{
    console.log('Der Ausdruck ist unwahr/falsch/false.')
}


console.log('Aufgabe 2')
//In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 5 

if (a>6){
    console.log('Der Ausdruck ist wahr')
}else{
    console.log('Der Ausdruck ist unwahr/falsch/false.')
}


console.log('Aufgabe 3')
//Wenn die Schülerin 16 oder jünger ist, muss sie Fahrrad fahren,wenn sie 17 ist, darf sie Begleitet fahren, wenn sie 18 ist darf sie fahren.
//Vorraussetzung für das fahren ist der Führerschein

let Alter = 18;
let Führerschein = true;

if (Alter<17 || Führerschein === false){ //Wenn die Schülerin 16 ist oder keinen Führerschein hat oder beides, dann muss sie Fahrrad fahren.
    console.log('Die Schülerin muss Fahrrad fahren.')
}

if(Alter===17 && Führerschein === true){ //Wenn die Schülerin 17 ist und einen Führerschein hat, dann darf sie Begleitet fahren, sonst nicht.
    console.log('Die Schülerin darf Begleitet fahren')
}

if(Alter>17 && Führerschein === true){ //Wenn die Schülerin 18 ist und einen Führerschein hat, dann darf sie fahren, sonst nicht.
    console.log('Die Schülerin darf fahren')
}

//Andere Lösung 

if(Führerschein){ //Führerschein ist bereits true oder false, es bedarf keines Vergleichsoperators.

    if(Alter === 17){
        console.log('begleitend fahren')
    }else{
        console.log('darf fahren')
    }

}else{
    console.log('Fahrrad fahren')
}

//Andere Lösung
if(Führerschein){ //Führerschein ist bereits true oder false, }

console.log("Aufgabe 5")

//Auf einem Sparkonto soll bei einem positiven Kontostand auf der console stehen: "Zinsen berechnen"
//Wenn kein Guthaben existiert: "Keine Zinsen"

if(Kontostand){ //auf dem Prüfoperator kann verzichtet werden, da Zahlen bereits true oder false sind.
    console.log("Zinsen berechnen für Kontostand " + Kontostand)
} else{
    console.log("keine Zinsen, da Kontostand 0")
}

console.log("Aufgabe 6")

// ihr aufgaben text
let spielausgang = "sieg"
let Mannschaft = "Ajax Amsterdam"

if(spielausgang == "Sieg") {
    console.log(" Es gibt 3 Punkte")
}
// ihre logik mit if