console.log("Grundlagen");
console.log("==========");
 
console.log("Aufgabe 1");
console.log("Erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und2");
 
// Der Wert 1 wird zugewiesen (=) an eine Variable namens a.
let a = 1;
let b = 2;
 
// MIt dem Plus-operator findet eine String-Verkettung statt. Ein String ist eine zeichenkette, eingerahmt mit hochkommas.
console.log("Der wert der Variablen a ist:" +a);
 
console.log("Aufgabe 2");
console.log("Gib das Ergebnis der Addition von a und b aus.");
 
// wenn links oder rechts vom Plusoperator ein Sttring steht wird verkettet.
//Wenn links und rechts Zahlen stehen, wird addiert.
console.log(a+b);
console.log("Das ergebnis der addition:"+(a+b));
 
console.log("Aufgabe 3");
console.log("Gib das Ergebniss der Subtraktion, Multiplikation, Division von a und b aus.");
 
console.log("Subtraktion:"+(a-b));
console.log("Multiplikation:"+(a*b));
console.log("Division:"+(a/b));
 
console.log("Aufgabe 4");
console.log("c ist das Ergebnis der Addition von a und b.");
 
let c =a + b;
console.log("Der Wert von c ist:" +c);
 
 
 
 
 
console.log("Aufgabe5");
console.log(" a und b sind die Seitenlängen der Katheten eines rechtwinkligen Dtreiecks. Bestimme die Länge der Hypotenuse c");
 
// cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heisst: zuerst ein Kleinbuschtabe. Verbundene Wörter beginnen groß.
let cQuadrat= a*a+b*b;
 
//Javascript kiennt eine Bibliothek namens Math in der Bibliothek gibt es eine Funktion namens sqrt. Als Parameter in den runden Klammern erwartet sqrt eine Zahl, aus der dann die Wurzel gezogen wird.
c= Math.sqrt(cQuadrat);
 
console.log("Die Hypotenuse ist" +c+" lang.");
 
console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde');
console.log('nach zwei Jahren ausgezahlt. Beachte den Zinseszinseffekt.');
 
let laufzeit = 2;
let startkapital = 100;
let zinssatz = 0.1;   /* Das Komma ist zur Entwicklungszeit ein Punkt. */
 
let kapitalNachEinemJahr = startkapital * (1 + zinssatz);
 
console.log("Kapital nach einem Jahr: " + kapitalNachEinemJahr + " EUR.");
 
let kapitalNachZweiJahren = kapitalNachEinemJahr * (1 + zinssatz);
 
console.log("Kapital nach zwei Jahren: " + kapitalNachZweiJahren + " EUR.");
 
//let endkapital = Math.pow((startkapital * zinssatz) , laufzeit);
 
let endkapital = startkapital * Math.pow(1 + zinssatz, laufzeit);
 
console.log("Endkapital nach " + laufzeit + " Jahren: " + endkapital + " EUR.");

console.log('Aufgabe 7');
console.log('Die Reihe aus der vorherigen aufgabe werden als Reihe dargestellt');

endkapital = startkapital;
console.log ('endkapitalzubeginn');
endkapital = startkapital * (1 + zinssatz);
console.log('endkapitalNachEinemJahr');
endkapital = startkapital * (1 + zinssatz);
console.log('endkapitalNachZweiJahren');

console.log('Aufgabe 8');
console.log('In aufgabe 7 wurde die Anweisung endkapital = ... mehrfach wiederholt. Um sich tipparbeit zu sparen und die Wiederholung der Anweisung in der gewünschten H');

console.log('Aufgabe 9');
console.log('Wenn der Artikel Lebensmittel ist, dann ist die MwSt 7%, ansonsten 19%');
console.log('IN Excel würde das dann so aussehen =Wenn(A1=Lebensmittel;7;19');

let Artikel = 'Lebensmittel';
let MwStSatz = (Artikel === "Lebensmittel") ? 7:19;

console.log('der MwSt satz für den Artikel' + Artikel + ' beträgt: ' + MwStSatz +'%');