// immediately invoked function expression(IIFE)
(function chai() {
    //named IIFE
    console.log(`DB connected`)
})();

(function chai1(name) {
    //Simple IIFE
    console.log(`DB connected 2 ${name}`)
})("Atharva")
