const list = document.querySelector('.list');

function createCard(title, dueDate) {
    const card = createElementWithClassName('div', 'item');
    const topArea = createElementWithClassName('div', 'topArea');
    const button = document.createElement('button');
    button.textContent = 'X'
    const date = createElementWithClassName('p', 'date');
    date.textContent = dueDate;
    const priority = document.createElement('p');
    priority.textContent = '!!!';
    const mainContent = createElementWithClassName('div', 'mainContent');
    const titleText = document.createElement('p');
    titleText.textContent = title;

    card.appendChild(topArea);
    card.appendChild(mainContent);
    topArea.appendChild(button);
    topArea.appendChild(date);
    topArea.appendChild(priority);
    mainContent.appendChild(titleText);

    return card;

}


function createElementWithClassName(element, className) {
    const e = document.createElement(element);
    e.className = className;
    return e;
}

// Load all cards at the initial load of the application...
function loadCards(items) {
    items.forEach(item => {
        list.appendChild(createCard(item.title, item.dueDate));
    });
}

// Append new created card to the body of the page.
function loadNewCard(item) {
     list.appendChild(createCard(item.title, item.dueDate));
}

export { loadCards, loadNewCard };

