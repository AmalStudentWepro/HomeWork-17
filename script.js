// 1
// let num = +prompt("Введите число больше 100:");

// while (num <= 100 || isNaN(num)) {
//     num = +prompt("Нужно больше 100");
// }
// alert("гуд");

// 2
let arr = [4, 16, 19, 22, 11, 144, 967, 19124];
let chetnie = [];
let nechetnie = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        chetnie.push(arr[i]);
    } else {
        nechetnie.push(arr[i]);
    }
}

console.log(chetnie);
console.log(nechetnie);

// 3
let arr1 = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]

let categories1 = {
    SMM: [],
    programming: [],
    Dizayn: [],
    "3dsmax": [],
    Backend: []
};

for (let i = 0; i < arr1.length; i++) {
    let type = arr1[i].info.faculity;

    if (type in categories1) {
        categories1[type].push(arr1[i]);
    }
}

console.log(categories1);