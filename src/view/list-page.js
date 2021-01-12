import { generateFormInHTML } from './form.js';

function doButtonSetup() {

const addButton = document.querySelector('.addItemButton');

    addButton.addEventListener('click', () => {
        console.log('here');
        showForm();
    });
}

function showForm() {
    const formContainer = document.createElement('div');
    formContainer.className = 'form';
    formContainer.innerHTML += generateFormInHTML();

    document.body.appendChild(formContainer);
}

export { doButtonSetup }