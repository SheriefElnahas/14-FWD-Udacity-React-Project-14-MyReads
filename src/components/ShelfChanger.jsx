import React, { useEffect, useState } from "react";

// Context
import useBooksContext from "../hooks/useBooksContext";

export default function ShelfChanger({ book }) {
  const [selecedShelf, setSelectedShelf] = useState("");
  const { changeShelf } = useBooksContext();

  useEffect(() => {
    changeShelf(book, selecedShelf);
  }, [selecedShelf]);

  function handleChange(e) {
    // Change the element to controled element
    setSelectedShelf(e.target.value);

    // Extract the options array & the selected option index
    const options = e.target.options;
    const index = options.selectedIndex;

    // Loop through the options and remove the check mark - then add the check mark only on the selected option
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = options[i].textContent.replace("✔️", "");
    }
    options[index].textContent += "✔️";
  }

  const optionsArr = [
    { value: "", text: "Move To...", disabled: true },
    { value: "currentlyReading", text: "Currently Reading" },
    { value: "wantToRead", text: "Want To Read" },
    { value: "read", text: "Read" },
    { value: "none", text: "None" },
  ];

  return (
    <div>
      <div className="book-shelf-changer">
        <select value={selecedShelf} onChange={handleChange}>
          {optionsArr.map((option) => {
            if (option.value === book.shelf) {
              option.text += "✔️";
            }
            return (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
