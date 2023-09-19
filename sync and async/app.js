// console.log("hi1")
// console.log("hi2")
// console.log("hi3")
// console.log("hi4")
//above is synchronous mehthod

//async methods
/*setTimeout()
setInterval()
callbacks
Promise
async/await
fetch
*/

// console.log("hi1")
// console.log("hi2")
// setTimeout(()=>{console.log("hi3")},1000)
// console.log("hi4")
// console.log("hi4")
// console.log("hi1")
// console.log("hi2")
// console.log("hi3")
// console.log("hi4")
//above is synchronous mehthod

//async methods
/*setTimeout()
setInterval()
callbacks
Promise
async/await
fetch
*/

console.log("hi1")
console.log("hi2")
// setTimeout(()=>{console.log("hi3")},10000);
// setInterval(()=>{console.log("hi3")},1000);

console.log("hi4")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5")
console.log("hi5");

//callbacks: are invokes when the answer to the request arrives
//Promises
// let pizzaKhilaya=false;


// let prom= new Promise((res,rej)=>{
// if(pizzaKhilaya==true){
//     return res("thanks for the treat")
// }else{
//     return rej("acha nahi kia tmne")
// }
// }).then(function(data){
// console.log(data)}).catch(function(data){console.log(data)}) 


let number=Math.round(Math.random()*10);
console.log(number);

let checkNumber= new Promise((a,b)=>{
   if(number>5){
    return a ("Wada Poora ho gaya😍")
   } else{
    return b ("Wada toot gaya😥")
   } 
}).then((c)=>{
    console.log(c)
}).catch((c)=>{
    console.log(c)
})






//constructor function