const username = prompt('please enter your name');
const userage = prompt('please enter your age')

console.log(`name: ${username}`);
console.log(`age: ${userage}`);


if(userage >= 0 && userage <= 4){
    console.log(`${username} is a kid`);
}
else if(userage >= 5 && userage <= 17){
    console.log(`${username} is a school student`);
}
else if(userage >= 18 && userage <= 24){
    console.log(`${username} is a college student`);
}
console.log('program ended')


