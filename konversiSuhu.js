const { celciusToFahrenheit, celciusToReamur } = require('./rumusSuhu');

let suhuC = 35;

console.log("========================================");
console.log("   PROGRAM MINI APP MODULAR - KONVERSI SUHU");
console.log("========================================");
console.log(`Suhu dalam Celcius : ${suhuC}°C`);
console.log(`Hasil ke Fahrenheit: ${celciusToFahrenheit(suhuC)}°F`);
console.log(`Hasil ke Reamur    : ${celciusToReamur(suhuC)}°R`);
console.log("========================================");