import { removeTaskFromStorage } from "../controller/controller.js";

const list = document.querySelector('.list');

function createCard(title, dueDate, index) {
    const card = createElementWithClassName('div', 'item');
    card.setAttribute('data-index', index)
    const topArea = createElementWithClassName('div', 'topArea');
    const button = createElementWithClassName('button', 'deleteButton');
    button.textContent = 'X'
    button.addEventListener('click', (e) => {
        // Remove card...
        const cardToRemove = e.target.parentNode.parentNode;
        removeCard(cardToRemove);
    });
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
        list.appendChild(createCard(item.title, item.dueDate, item.index));
    });
}

// Append new created card to the body of the page.
function loadNewCard(item) {
     list.appendChild(createCard(item.title, item.dueDate, item.index));
}

function removeCard(cardToRemove) {
    list.removeChild(cardToRemove); // Update UI
    removeTaskFromStorage(cardToRemove.dataset.index); // Update model
}

export { loadCards, loadNewCard };

