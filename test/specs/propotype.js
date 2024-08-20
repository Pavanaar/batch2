// let car={
//     name:"audi",
//     model:2017,
//     colour:"white"
// }
// let newcar=Object.create(car)
// newcar.model=2023
// console.log(newcar);

//console.log(Object.getPrototypeOf(newcar));
 












let car={
    name:"audi",
    model:2017,
    colour:"white"
}
let newcar=Object.create(car)
console.log(newcar);
newcar.name="audi"
newcar.model=2024
newcar.colour="black"

// console.log(newcar.model);
console.log(newcar);
console.log(Object.getPrototypeOf(newcar));

