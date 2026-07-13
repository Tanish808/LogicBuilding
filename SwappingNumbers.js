function swapping(a, b){
   let c = b;
   b = a;
   a = c;
   return {a, b}
}
console.log(swapping(2,3));