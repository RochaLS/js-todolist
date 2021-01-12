function generateFormInHTML() {
    const formHTML = `<button>X</button>
    <form action="#">
  <label for="fname">Title:</label><br>
  <input type="text" id="title" name="title" value=""><br><br>
  <label for="lname">Description:</label><br>
  <textarea id="desc" name="description"></textarea><br><br>
  <label for="lname">Due Date:</label><br>
  <input type="date" id="date" name="date" value=""><br><br>
  <input type="submit" value="Add New Task">
</form>`;
    return formHTML;
}

export { generateFormInHTML };