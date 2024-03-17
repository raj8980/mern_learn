var a = [4,5,6];

a.push(7);
console.log(a);

a.pop(7);
console.log(a);

a.shift();
console.log(a);

a.unshift(4);
console.log(a);

var b=[7,8,9];
console.log(a.concat(b));

a.forEach(function(item,index) {
    console.log(index);
    console.log(item);
});

let newArr= a.map(function(item){
    return item * 2;
});

console.log(newArr);


let newArr2 = a.filter(function(item){
    return item % 2 == 0;
});

console.log(newArr2);

let newArr3 = a.find(function(item){
    return item % 2 != 0;
});

console.log(newArr3);

a=[34,34523,232,4,566,678];
let newArr4= a.sort(function(a,b){
    return a - b;
});
console.log(newArr4);