//foreach()
/*Without using the native “Array.prototype.forEach” 
method of JavaScript, compose a function titled “myEach” t
hat will take in an array of elements and executes any callback 
function (provided by you) on each of those elements.
 */
let arrayOne = [1,2,3,4,5];
const myforeach = ()=>{
    for(let i = 0 ;i <arrayOne.length;i++){
        // console.log(arrayOne[i]);
    }
}
myforeach(arrayOne)

//map()
/*Without using the native “Array.prototype.map” 
method of JavaScript, 
compose a function titled “myMap” 
that will take in an array of elements 
and executes a callback function (provided by you) 
on each of those elements.
 */
const myMap = (arr,cb) =>{
    let arrayTwo = []
    let indexholder; 
    for(let i = 0 ; i <arr.length; i++){
        indexholder = cb(arr[i])
        arrayTwo.push(indexholder);

    }return arrayTwo;
    
} 
const addThree = (n)=>{return n * 3}
// console.log(myMap(arrayOne, addThree));

//filter()
/*Without using the native “Array.prototype.filter” 
method of JavaScript, 
compose a function titled “myFilter” 
that will take in an array of elements and executes a 
callback function (provided by you) on each of those elements.
 */

const myFilter = (arr,cb) =>{
    let anotherArray = [];
    for(let i = 0; i <arr.length;i++){
        if(cb(arr[i]) == true) {
            anotherArray.push(arr[i]);
        }
    } 
    return anotherArray;   
}
const theFiltering = (n) => {return n.length > 6}
const someotherarray = ['dog','cat','lion','dogandcat']
console.log(myFilter(someotherarray,theFiltering));

//some()
const mySome = (arr,cb) =>{
  
    for(let i = 0; i <arr.length;i++){
        if(cb(arr[i])) {
           return true;
        }
    } 
    return false;
     
}
const theSome = (n) => {return n.length > 6}
let some = ['dog','cat','lion','dogandcat']
console.log(mySome(some,theSome));
//every()

//reduce()

//includes()

//indeof()

//push()

//lastindexof()