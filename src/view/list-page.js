import { generateFormInHTML } from './form.js';
import { createNewTask } from '../controller/controller.js'

// Doing some basic UI Setup... Important: Form is being appended to the body of the page as hidden, display: none
function doUISetup() {

    const addButton = document.querySelector('.addItemButton');

    addButton.addEventListener('click', () => {
        showForm();
    });

    const formContainer = document.createElement('div');
    formContainer.className = 'form';
    formContainer.innerHTML += generateFormInHTML();

    document.body.appendChild(formContainer);

    const addFormButton = document.querySelector('.addTaskButton');
    addFormButton.addEventListener('click', () => {
        createNewTask(getFormData()); // Sent data for the create of a new task
        toggleForm();
    });

    const dismissButton = document.querySelector('.dismissButton');
    dismissButton.addEventListener('click', () => {
        toggleForm();
    });
}

function showForm() {
    toggleForm();
}

function toggleForm() {
    const form = document.querySelector('.form');
    const formElement = document.getElementById('form');
    // If display is 'block' toggle to 'none' else toggle to 'block' 
    form.style.display = form.style.display == 'block' ? 'none' : 'block'; 
    formElement.reset();
}

function getFormData() {
    const titleTextField = document.getElementById('title');
    const descriptionTextField = document.getElementById('desc');
    const dueDateTextField = document.getElementById('date');

    const data = { 'title': titleTextField.value, 'description': descriptionTextField.value, 'date': dueDateTextField.value, 'category': '-' };

    return data
}


export { doUISetup }