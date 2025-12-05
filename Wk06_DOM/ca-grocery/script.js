//1a
let hotItems = document.querySelectorAll('li.hot');
for (let i = 0; i < hotItems.length; i++){
    hotItems[i].className = 'cool';
}

//1b
let hotElements = document.getElementsByClassName('hot');
if (hotElements.length >= 3) {
    hotElements[2].className = 'cool';
}

//1c
let allItems = document.getElementsByTagName('li');
for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].className.includes('hot')) {
        allItems[i].className = 'cool';
        break;
    }
}
