// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, true, false, 'abc', 'cde', 'efg', -99, -100500];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj1 = {
    title: 'book1',
    pageCount: 99,
    genre: 'detective',
};

let obj2 = {
    title: 'book2',
    pageCount: 100,
    genre: 'roman',
};

let obj3 = {
    title: 'book3',
    pageCount: 100500,
    genre: 'fantasy',
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'book1',
    pageCount: 100,
    genre: 'fantasy',
    authors: [
        {
        name: 'author1',
        age: 25
        },
        {
        name: 'author2',
        age: 31
        }
        ]
};

let book2 = {
    title: 'book2',
    pageCount: 200,
    genre: 'roman',
    authors: [
        {
            name: 'author3',
            age: 30
        },
        {
            name: 'author4',
            age: 36
        }
    ]
};

let book3 = {
    title: 'book3',
    pageCount: 999,
    genre: 'fantasy',
    authors: [
        {
            name: 'author5',
            age: 56
        },
        {
            name: 'author6',
            age: 65
        }
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//

let users = [
    {name: 'kokos',
     username: 'kokosik99',
     password: 'qwerty123'
    },
    {name: 'abrikos',
     username: 'abrikos15',
     password: 'passwrd'
    },
    {name: 'tomato',
     username: 'tomato5799',
     password: 'tomatik123'
    },
    {name: 'potato',
     username: 'kartopelka',
     password: 'abcdef123'
    },
    {name: 'kapusta',
     username: 'kapustochka',
     password: 'qwerty123567'
    },
    {name: 'carrot',
     username: 'makrovka89',
     password: 'ytrewq321'
    },
    {name: 'cucumber',
     username: 'kukumber777',
     password: '123456'
    },
    {name: 'mandarin',
     username: 'mandarinka2020',
     password: 'mdrnk2020'
    },
    {name: 'orange',
     username: 'apelsinka25',
     password: 'abcdefgh123'
    },
    {name: 'banana',
     username: 'bananchik',
     password: 'qwerty12356789'
    },
]

console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//

let temp = [
    {id: 1, morning_temp: 10, day_temp:15, evening_temp: 25},
    {id: 2, morning_temp: 8, day_temp:17, evening_temp: 29},
    {id: 3, morning_temp: 9, day_temp:30, evening_temp: 27},
    {id: 4, morning_temp: 2, day_temp:27, evening_temp: 22},
    {id: 5, morning_temp: 15, day_temp:25, evening_temp: 21},
    {id: 6, morning_temp: 10, day_temp:18, evening_temp: 19},
    {id: 7, morning_temp: 11, day_temp:20, evening_temp: 23},
]

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if(x) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 10;

if (time<15){
    console.log('first quarter of an hour')
} else if (time>=15 && time<30) {
    console.log('second quarter of an hour')
} else if (time>=30 && time<45) {
    console.log('third quarter of an hour')
} else if (time>=45 && time<60) {
    console.log('fourth quarter of an hour')
} else {
    console.log('incorrect time format')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 5;

if (day<10){
    console.log('first decade of the month')
} else if (day>=10 && day<20) {
    console.log('second decade of the month')
} else if (day>=20 && day<=31) {
    console.log('third decade of the month')
} else {
    console.log('incorrect format')
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let numberOfTheWeek = prompt('Enter a weekday');
// switch (numberOfTheWeek) {
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('?????');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let num1 = 60;
let num2 = 40

if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`)
} else if (num2 > num1) {
    console.log(`${num2} is bigger than ${num1}`)
} else if (num1 === num2) {
    console.log(`numbers are equal`)
} else {
    console.log('something went wrong...')
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//    Напишіть код який, буде присвоювати змінній х значення "default"
//    якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false,
//    а це 0 null undefined і тд).
//

let y = 0;

if (!y) {
    y = "default";
}
console.log(y)


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title} - Super!`);
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title} - Super!`);
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title} - Super!`);
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title} - Super!`);
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title} - Super!`);
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title} - Super!`);
}

if (coursesAndDurationArray[6].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[6].title} - Super!`);
}