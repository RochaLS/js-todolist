function createCard() {
    const card = createElementWithClassName('div', 'item');
    const topArea = createElementWithClassName('div', 'topArea');
    const button = document.createElement('button');
    button.textContent = 'X'
    const date = createElementWithClassName('p', 'date');
    date.textContent = '5 Jan';
    const priority = document.createElement('p');
    priority.textContent = '!!!';
    const mainContent = createElementWithClassName('div', 'mainContent');
    const description = document.createElement('p');
    description.textContent = 'Clean living room';

    card.appendChild(topArea);
    card.appendChild(mainContent);
    topArea.appendChild(button);
    topArea.appendChild(date);
    topArea.appendChild(priority);
    mainContent.appendChild(description);

    return card;

}


function createElementWithClassName(element, className) {
    const e = document.createElement(element);
    e.className = className;
    return e;
}

function loadCards() {
    const list = document.querySelector('.list');

    for (let i = 0; i < 3; i++) {
        list.appendChild(createCard());
    }
}

export { loadCards };

