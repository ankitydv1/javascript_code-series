let username = 'ankita'

const user = {
    firstName : 'Ankit',
    lastName : 'yadav',
    Address : {
        city : 'Ballia',
        pinCode : 277209,
        state : 'UP',
        moreDetails : {
            population : 9876554,
            area : '234 sq km',
        },
    },
    age : 15,
    isGraduate : false,
}

// Object.seal(user) //

Object.freeze(user)


