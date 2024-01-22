console.log("Ricetta Spaghetti all'Amatriciana");

let i1 = "Spaghetti";
let i2 = "Guanciale";
let i3 = "Vino bianco";
let i4 = "Peperoncino fresco";
let i5 = "Pomodori pelati";
let i6 = "Pecorino romano";
let i7 = "Sale fino";

let ingredienti = i1 + ", " + i2 + ", " + i3 + ", " + i4 + ", " + i5 + ", " + i6 + ", " + i7 + ".";
console.log("Per preparare questo piatto avremo bisogno dei seguenti ingredienti: " + ingredienti);

let num1 = 320;
let num2 = 150;
let num3 = 50;
let num4 = 1;
let num5 = 400;
let num6 = 75;

let quantità =
  num1 +
  "g" +
  " " +
  i1 +
  ", " +
  num2 +
  "g" +
  " " +
  i2 +
  ", " +
  num3 +
  "g" +
  " " +
  i3 +
  ", " +
  num4 +
  " " +
  i4 +
  ", " +
  num5 +
  "g" +
  " " +
  i5 +
  ", " +
  num6 +
  "g " +
  i6 +
  ", " +
  i7 +
  ".";
console.log("Per la preparazione di una dose per quattro persone occorrono: " + quantità);

let totale = num1 + num2 + num3 + num5 + num6 + "g";
console.log("Il quantitativo totale per quattro persone è: " + totale);
