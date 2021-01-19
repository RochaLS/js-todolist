import { Item } from "../model/item.js";
import { loadCards, loadNewCard } from "../view/cards.js";

let items = [];

function createNewTask(data) {
    const newItem = new Item(data.title, data.description, data.date, data.category, 'none');
    items.push(newItem);
    newItem.index = items.indexOf(newItem); //Assigning a  index to manage each task
    console.log(newItem);
    console.log(items);
    loadNewCard(newItem); // Updating UI with new data
}

function removeTaskFromStorage(index) {
    items.splice(index, 1);
}

function getItem(index) {
    console.log(`index: ${index}`)
    return items[index];
}

export { createNewTask, removeTaskFromStorage , getItem };