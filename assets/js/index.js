'use strict';
let btn = document.querySelector('.Create button');
let shape = document.querySelectorAll('.Shape-sel select');
let color = document.querySelectorAll('.Color-sel select');
let items = document.querySelectorAll('.item');

let info = [];
let box = [];

    for(let i = 0; i < items.length; i++) {
        info.push(items[i]);
    };

btn.addEventListener('click',function getInfo() {
    let item = 24;
    let shapeVar = shape.values;
    let colorVar = color.values;
    info.push(`${shapeVar} ${colorVar}`);

    box[item].style.width = '110px';
    box[item].style.height = '110px';

    if(shapeVar == 'Circle') { 
        box[item].style.borderRadius = '50%'; 

          
    } else {
        box[item].style.borderRadius = '5%';
    };

    switch (colorVar) {
        case 'Blue':
            box[item].style.backgroundColor = '#0f90f9';
            break;
        case 'Green':
            box[item].style.backgroundColor = '#9f0';
            break;
        case 'Orange':
            box[item].style.backgroundColor = '#f90';
            break;
        case 'Pink':
            box[item].style.backgroundColor = '#f09';
            break;
        case 'Purple':
            box[item].style.backgroundColor = '#90f';
            break;
    };
    item = item - 1; 
});


for (let i = 0; i < box.length; i++) {
    items[24 - i].addEventListener('click', function createShape() {
        tip.innerHTML = `Unit ${i + 1}: ${info[i]}`;
    })
};