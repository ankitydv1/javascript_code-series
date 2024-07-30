//synchronous code 
console.log('hi-1')

for(let i=1; i<4; i++){
    console.log(i);
}

console.log('hi-2');

debugger
setTimeout(function(){
    console.log('hi-3')
},0)

setTimeout(hello,1000)
setTimeout(hello,2000)