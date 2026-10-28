// Ex2
console.log("Zadanie 2");
const num = 2;
console.log(num % 2 == 0 ? "Parzysta" : "Nieparzysta");

// Ex3
console.log("Zadanie 3");
const isPunished = true;
const isResident = true;
const age = 67;

!isPunished && isResident && age >= 35 ? console.log("Możesz być prezydentem!") : console.log("Nie możesz być prezydentem!");

// Ex4
console.log("Zadanie 4");
const lenght = 39;

function calculatePrice(x: number): number {
    let price: number;

    if (x <= 0) {
        price = 0;
    } else if (x <= 15) {
        price = 3;
    } else if (x <= 40) {
        price = 1.5 + (x - 15) * 0.2;
    } else {
        price = 1 + (x - 40) * 0.1;
    }

    return price;
}

console.log("Cena przejazdu to: " + calculatePrice(38));
