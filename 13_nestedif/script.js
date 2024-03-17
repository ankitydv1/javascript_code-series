const username ='ankit';
const userage = 22;

if(username){
    console.log(`name :${username}`);
}
if(userage){
    console.log(`age : ${userage}`);
}

else if(userage >= 18 && userage <= 24){
    console.log(`${username} is a working professional`);
    console.log('and he/she is a web developer');
    if(userage >= 20){
       console.log('he is above 19');
    }else{
        console.log('he is below 19');
    }
}