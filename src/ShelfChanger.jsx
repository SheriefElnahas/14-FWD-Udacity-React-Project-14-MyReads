import React, { useState } from "react";

export default function ShelfChanger() {
  const [option, setOption] = useState("");

  function handleChange(event) {
    // Change the element to controled element
    setOption(event.target.value);

    // Extract the options array & the selected option index
    const options = event.target.options;
    const index = options.selectedIndex;

    // Loop through the options and remove the check mark - then add the check mark only on the selected option
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = options[i].textContent.replace("✔️", "");
    }
    options[index].textContent += "✔️";
  }
  return (
    <div>
      <div className="book-shelf-changer">
        <select value={option} onChange={handleChange}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
}
