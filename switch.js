
var fruit = prompt("What fruit do you need");

switch (fruit){

    case "Orange":
        console.log("Rs 10");
    
    case "Apple":
        console.log("Rs 20");
        break;
    
    case "Mango":
        console.log("Rs 50");
        break;
    
    case "Banana":
        console.log("Rs 25");
        break;
    
    default:
        console.log(`${fruit} fruit not available`);
}