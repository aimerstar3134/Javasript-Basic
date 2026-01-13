// commonjs module syntax
function add(x, y) {
    return x + y;
}

const subtract = (x, y) => x - y;
module.exports = {add,subtract} ;

// ES6 module syntax
// export function add(x, y) {
//     return x + y;
// }

// export const subtract = (x, y) => x - y;