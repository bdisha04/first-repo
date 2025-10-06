//Arithmatic operator
let a = 7
let b = 4

console.log("a =", a ,"& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);



//Assignment operator
let c = 5
let d = 6

console.log("c =", c ,"& d =", d);
c += 5; 
console.log("c = ", c);
d -= 4; 
console.log("d = ", d);



//Comparison operator
let e = 4
let f = 2

console.log("e =", e ,"& f =", f);
console.log("4 == 2", e == f);
console.log("4 != 2", e != f);
console.log("4 === 2", e === f);
console.log("4 !== 2", e !== f);
console.log("4 > 2", e > f);
console.log("4 >= 2", e >= f);



//Logical operator
let g = 8
let h = 6

console.log("g =", g ,"& h =", h);
let cond1 = g > h;
let cond2 = g === 8;
console.log("cond1 && cond2 = ", cond1 && cond2);
let cond3 = g > h;
let cond4 = g === 5;
console.log("cond3 && cond4 = ", cond3 && cond4);
let cond5 = g > h;
let cond6 = g === 8;
console.log("cond5 || cond6 = ", cond5 || cond6);
let cond7 = g > h;
let cond8 = g === 5;
console.log("cond7 || cond8 = ", cond7 || cond8);
console.log("!(8<6) =", !(g < h));
console.log("!(8>6) =", !(g > h));
console.log("!(8===6) =", !(g === h));