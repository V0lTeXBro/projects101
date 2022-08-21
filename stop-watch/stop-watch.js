console.log('stop watch');



const stopWatchView = document.querySelector('#stop-watch-view');
console.log('id', stopWatchView);

const pTag = document.querySelector('p');
console.log('pTag', pTag);


const myClass = document.querySelector('.my-class');
console.log('myclass', myClass);

const allListItems = document.querySelectorAll('.list-item');
console.log(allListItems);
let counter = 1;
allListItems.forEach(function (listItem) {
    console.log('list item', listItem);
    listItem.innerHTML = counter;
    counter++;
});

const arr = [1, 2, 3, 4, 5];
arr.forEach(function (value) {
    console.log(value);
});