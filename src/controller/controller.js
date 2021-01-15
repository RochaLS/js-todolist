import { Item } from "../model/item.js";
import { loadCards, loadNewCard } from "../view/cards.js";

let items = [];

function createNewTask(data) {
    const newItem = new Item(data.title, data.description, data.date, data.category);
    items.push(newItem);
    loadNewCard(newItem); // Updating UI with new data
}

export { createNewTask };