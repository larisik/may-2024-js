// #I2XsG6f
// - 1) створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareArea (a,b) {
    return a*b
}

console.log(squareArea(4,8))

// #ETGAxbEn8l
// - 2) створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea (r) {
    const p = 3.14
    return p*(r**2)
}

console.log(circleArea(4))


// #Mbiz5K4yFe7
// - 3) створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea (r,h) {
    const p = 3.14
    return 2*p*r*h
}

console.log(cylinderArea(10,5))

// #SIdMd0hQ
// - 4) створити функцію яка приймає масив та виводить кожен його елемент

let arr = ['one', 'two', 'three', 'four', 'five']

function printArr (array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

printArr(arr);

// #59g0IsA
// - 5) створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

function createParagraph (text) {
    document.write(`<p>${text}</p>`)
}
createParagraph('some text in paragraph')

// #hOL6126
// - 6) створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function createList (text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createList('some text in li')

// #0Kxco1edSN
// - 7) створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createList2 (text, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text} - ${i+1}</li>`)
    }
    document.write(`</ul>`)
}
createList2('some text in li2', 5)
// #gEFoxMMO
// - 8) створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

let arr2 = ['six', 'seven', 'eight', 'nine', 'ten']
function createList3 (array) {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}
createList3(arr2)

// #bovDJDTIjt
// - 9) створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
];

function printUsers(array){
    for (const arrayElement of array) {
        document.write(`<div style="border: 1px solid; margin-bottom: 5px">`)
        for (const arrayElementKey in arrayElement) {
            document.write(`<p>${arrayElementKey} - ${arrayElement[arrayElementKey]}</p>`)
        }
        document.write(`</div>`)
    }
}
printUsers(users)
//     #pghbnSB
// - 10) створити функцію яка повертає найменьше число з масиву

let arr3 = [2, 60, 300, -500, 1, 0, 100500, 5]



function returnMinNum(array) {
    let minNum = array[0];
    for (let i = 0; i < array.length; i++) {

        if (minNum > array[i]) {
            minNum = array[i];
        }

    }
    console.log(minNum)
}

returnMinNum(arr3)

// #EKRNVPM
// - 11) створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arr) {
    let total = 0;
    for (const arrElement of arr) {
        total = total+arrElement;
    }
    console.log(total)
}

sum([1,2,10])


// #kpsbSQCt2Lf
// - 12) створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2) {
    let template = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = template

    return arr
}

console.log(swap([11,22,33,44],0,1))

// #mkGDenYnNjn
// - 13) Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let total = 0;
    let exchangeRate = 0;
    for (const currencyValuesElem of currencyValues) {
        if (currencyValuesElem.currency === exchangeCurrency) {
            exchangeRate = currencyValuesElem.value
        }
    }
    if (!exchangeRate) {
        return `Currency ${exchangeCurrency} not found`
    }

    total = sumUAH/exchangeRate
    return total
}


let exchangeResult = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(exchangeResult);