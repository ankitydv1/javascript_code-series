function a(b){
    console.dir(b);
    b()
}
// a('hii')
// a({userName:'Ankit',userAge:50})
// a([1,7,8,9])

// console.dir(a);

// function sayhi(){
//     console.log('hiiiii');
// }

// a(sayhi)

//callback function 

a(function sayhi(){
     console.log('hiiiii');
 })
