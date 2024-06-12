// ADD NEW ITEM TO END OF LIST
const list = document.querySelector('ul');
newItem = document.createElement('li');

newItem.textContent = 'cream';
list.appendChild(newItem);


// ADD NEW ITEM START OF LIST
newItemStart = document.createElement('li');
const firstItem = document.getElementById('one');

newItemStart.textContent = 'kale';
list.insertBefore(newItemStart, firstItem);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
listItems = list.querySelectorAll('li');
listItems.forEach(item => item.classList.add('cool'));

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
heading = document.querySelector('h2');
items = list.children.length; // gets amount of elements in list
span = document.createElement('span');

span.textContent = items;
heading.appendChild(span);