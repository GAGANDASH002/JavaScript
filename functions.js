let bread1 = prompt("Which bread would you like to have:--");
let veggies1 = prompt("choose veggies");
let sauce1 = prompt("choose sauces of your choice");

function makeSandwich(bread,veggies,sauce){
    let sandwich = bread + "bread" + veggies + " " + sauce + "sandwich is ready";
    return sandwich;
}

let vegSandwich= makeSandwich(bread1,veggies1,sauce1);
console.log(vegSandwich);