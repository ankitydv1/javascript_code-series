// const user = {
//     username:"hitesh",
//     price:999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`)
//     }
// } 
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();

// const chai = () => {
//     let username = "ankit"
//     console.log(this);
// }


//explicit retun
// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"Ankit"})

console.log(addTwo(3,4))