const userAge = 18;

const isCollegeStudent = (userAge >=17)&&(userAge <= 22);
const isSchoolStudent = (userAge >= 2) && (userAge <= 19);

const isStudent  = (isSchoolStudent) || (isCollegeStudent)

const andResult = 0 && 2;
const orResult = 0 || 2;

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'hello' || null

const andResult4 = 'Hello' && 4 + 8
const orResult4 = 'hello' || 4 + 8

const andResult5 = 'Hello' && 4 + 8
const orResult5 = undefined || 4 + 8 * 5

const andResult6 = 'Hello' && console.log('hello')
const orResult6 = undefined || console.log('hello')
