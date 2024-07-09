/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        const msg = "Hello World"
        return msg
    }
};


 const f = createHelloWorld();
 f(); // "Hello World"
