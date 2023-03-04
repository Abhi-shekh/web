console.log('Hello guys');
function createRectangle(length, breadth) {
    let rectangle1 = {
        length: length,
        breadth: breadth
    }
    return rectangle1;
}
let rectangle1 = createRectangle(5, 4);
rectangle1.color = 'red';
console.log(rectangle1);
delete rectangle1.color;
console.log(rectangle1);


// Primitive data types
// let a=10;
// let b=a;
// a++;

// console.log(a);
// console.log(b);


// Reference data types
// let x ={value:10};
// let y=x;
// x.value++;

// console.log(x.value);
// console.log(y);

// call by value
// let a = 10;
// function inc(a) {
//     a++;
// }

// inc(a);
// console.log(a);


// // call by reference
// let x={value:10};
// function inc(x){
//     x.value++;
// }
// inc(x);
// console.log(x);
let numbers=[1,4,6,9];
console.log(numbers);
