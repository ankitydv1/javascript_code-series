const username = prompt('please enter your name');
const userage = parseInt(prompt('please enter your age'));

console.log(`name: ${username}`);
console.log(`age: ${userage}`);

if(userage>=1 && userage<5){
    console.log('user is kid');
    console.log('just chill');
}
if(userage>=5 && userage<=17){
    console.log(`${username} is a school student`);
    console.log('And he or she is learning science and maths');
}
if(userage>=18 && userage<=25){
    console.log('user is college student');
    console.log('he or she is learning data structure');
}
if(userage>25 && userage<=50){
    console.log('user is working professinal');
    console.log('he or she is working in IT');
}
if(userage>50){
    console.log('user is working professinal');
    console.log('he or she is working in it');
}

console.log('program is ended');
