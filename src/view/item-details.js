function generateDetailsBox(title, description, priority, date) {
    const detailsHTML = `<div class="item-details center">
        <div class="details-content">
            <div class="details-top-area">
                <button class="details-dismiss-btn">X</button>
                <h2>${title}</h2>
                <h3 class="priority">${priority}</h3>
            </div>
            <p class="details-description">${description}</p>
            <p class="details-date">Due Date:  ${date}</p>
            <button class="edit-btn">Edit</button>
        </div>
    </div>`

    return detailsHTML
}

export { generateDetailsBox }