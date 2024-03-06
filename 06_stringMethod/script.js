const message = 'hello world';
const capitalMessage = message.toUpperCase()

const xtraMessage = '  hi, I am Anurag  ';
const trimMessage = xtraMessage.trim();
const trimEnd = xtraMessage.trimEnd();
const trimStart = xtraMessage.trimStart();


const rawMessage = ' hey! I am Ankit Yadav';
const finalMessage = rawMessage.toUpperCase();

const lastfourDigits = '123';
const maskedAccountNumber = lastfourDigits.padStart(16,'*');
console.log(maskedAccountNumber);

const templateStrings = `last four digit of my account is`.concat(' ',lastfourDigits);
const capitalMessages = message.toUpperCase()
const bankBalance = 9873;

const templateString2 = `I have ₹${bankBalance} in my account.`;

const addedString = 'I have ₹' + bankBalance + ' in my account.';