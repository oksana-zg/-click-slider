let counter = 0;

$('.slider').click(function() {
    let slides = $('.slider .slider-item');
    slides.eq( counter ).hide();
    if ( counter == slides.length - 1 ) {
        counter = 0;
    } else {
        counter++;
    }
   
    slides.eq( counter ).css('display', 'flex'); 
});



// Создать массив чисел от 1 до 10000

let number = [];

for (let index = 1; index <=10000; index++) {
    number.push(index);
}
console.log(number);

// 2. Найти сумму чисел массива, которые стоят на четных местах

let numbers = [];

for (let index = 1; index <=10000; index++) {
    if (index % 2 == 0) {
        numbers.push (index);
    }
}
console.log(numbers);

function arraySum(numbers) {
    let sum = 0;
    for(let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    console.log(sum);
}
arraySum(numbers);
 
// 3. Найти наиболее часто встречающийся элемент в массиве

// let array = [2, 3, 2, 2, 4, 3, 8, 8, 2];
// let frequency = 1;
// let counterArr = 0;
// let item;

// for (var index = 0; index < array.length; index++) {
//     for (var a = index; a < array.length; a++) {
//         if (array[index] == array[a]) {
//             counterArr++;
//         }
//         if (frequency < counterArr) {
//             frequency = counterArr; 
//             item = array[index];
//         }
//     }
//     counterArr=0;
// }
// console.log( `Цифры: ${item} = ${frequency} шт.` );
