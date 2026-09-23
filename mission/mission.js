let logo = document.querySelector('img');
let background = document.querySelector('body');

let selectElem = document.querySelector('select')

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') 
        {
           background.style.backgroundColor = '#363737';
           background.style.color = 'white';
           logo.setAttribute('src', 'images/byui-logo-white.png');
           document.querySelector('#content').style.border = "3px solid white";
            // code for changes to colors and logo
        } 
    else {
        // code for changes to colors and logo
        background.style.backgroundColor = "white";
        background.style.color = "black";
        logo.setAttribute('src','images/byui-logo-blue.webp');
    }
}   
