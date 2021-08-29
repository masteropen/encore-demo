export function sayHello(name) {
    console.log('hello '+name);
}
function sayBye(name) {
    console.log('bye '+name);
}
function sayGoodMooring(name) {
    console.log('good mooring '+name);
}
var sayGoodNight = function (name) {
    console.log('good night '+name);
};

console.log('maybe a not used process on some entries');

(function (input) {
    console.log(input)
})('anonymous function');
