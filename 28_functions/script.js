// function definition
function introduceMe(userName = 'name', post, age) {
    console.log('Hi,');
    console.log(`my name is ${userName}.`);
    console.log(`I am a ${post}`);
    console.log(`he is ${age} year old`)
}

// function call
// const returnValue = introduceMe()

introduceMe('ankit','web developer', '24')
console.log('hii')

introduceMe('shubham','flutter developer','25')
console.log('hii')

introduceMe('sanskar')
console.log('hii')