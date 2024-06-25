// Immediately Invoked Function Expressions (IIFE)


(function hello(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Gagan')