console.log("Hello World");

let targetDate = new Date("03/30/2022");
let currentDate = new Date("02/24/2022");

console.log((targetDate.getTime() - currentDate.getTime())/ (1000 * 3600 * 24));