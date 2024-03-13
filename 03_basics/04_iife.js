// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}());
//chai()

// (function aurchai(){
//     console.log(`DB CONNECTED TWO`);
// }())

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )  ()


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )  ('hitesh')
