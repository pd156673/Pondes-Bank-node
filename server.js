/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
// Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links zugewiesen an die konstante namens PORT. Das einfache gleichheitszeichen lässt sich also übersetzen mit "... wird zu gewiesen an ..."
const PORT = 3000;
// Der Wert "0.0.0.0" wird zugwiesen an eine konstante namens HOST
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	// res ist die Antwort des Servers an dem Browser.
	// send() ist die anweisung etwas an dem Browser zu senden
	// Hello ... ist der Wert der an die Anweisung send() übergeben wird 
	res.send('Hello remote world!\n');
});
// Mit listen() wird der Server angewiesen, auf den angegeben Host
// Port zu lauschen.
app.listen(PORT, HOST);

// Mit der Anweisung Console.log() wird dem Server Administrator auf der Konsole angezeigt, was der Server macht. 
// Der Programmierer schreibt dazu in die Runden Klammern den Ausdruck, der auf der Konsole angezeigt werden soll. 
// Die werte der Beiden Konstanten HOST un PORT werden den Ausdruck übergeben. 
// Ein wert mit anschließenden Klammern steht immer für eine Anweisung etwas zu tun. 
console.log(`Running on http://${HOST}:${PORT}`);
// require('./uebungen/01-grundlagen')
// require('./uebungen/02-booleans')
// require('./uebungen/03-objekte')
require('./Klausuren/Test20240930')
