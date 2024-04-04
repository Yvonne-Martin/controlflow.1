let a = 20;
let b = 30;

let add = a+b;
console.log({add});
let subtract = a-b;
console.log({subtract});
let division = a/b;
console.log({division});
let multiply = a*b;
console.log({multiply});

let c = "20";
let loselyEqualTo = a==c;
console.log({loselyEqualTo}); 
let strictlyEqualTo = a===c;
console.log({strictlyEqualTo})
let notEqualTo = a!=c;
console.log({notEqualTo});
let strictlyNotEqualTo = a!==c;
console.log({strictlyNotEqualTo});

a++
console.log('increment', a);
a--
console.log('decrement', a);

let compound = a+=b;
console.log({compound});
console.log("b",typeof b)

//implicit coercion
let d = a*c;
console.log(d)
console.log('d-type',typeof d)
let f = +c;
c=+c;
console.log(c);


console.log({f});
//explicit coersion
console.log({c});
let e = Number(c);
console.log({e});