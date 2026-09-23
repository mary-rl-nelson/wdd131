const title = document.querySelector('h1');
// targeting an element

console.log(title);
// printing it in console

title.textContent = 'Web Page Components';
//using property to change element

//below is two different ways of changing topics. One puts it into a variable the other does not. both are okay
document.querySelector('#topics').style.color = 'red';
//1. changes text red (no variable)

let topics = document.querySelector('#topics');
topics.style.color = 'green';
//2. changes text green and puts it into a variable

//the below example does not need # because it already states it is an id
document.getElementById('topics').style.color = 'purple';
// style can go with a lot of different properties like background color, font size, etc..

let list = document.querySelector('.list');
list.style.border = '3px solid green'
//border needs a thickness, what type of border, and what color

let para = document.querySelector('p');
//para.style.backgroundColor = 'lightblue';

para.classList.add('background');
//this adds the style of the background that is in the css sheet

//document.querySelector('body').classList.add('background');
//this makes the whole body have the background style apply to it

const image = document.querySelector('img');
image.setAttribute('src', 'images/html.jpg');
//set attribute takes two parameters, what attribute do you want to change, what are you replacing the value with

//why would you change this later, usually none of the above would happen 
//without the user doing something


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})
                