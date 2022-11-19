import React, {  useEffect, useState } from "react";
export default function ShelfChanger(props) {
  const [bookShelf, setBookShelf] = useState("");

  // Use useEffect hook to make sure this function call will be executed after the state is updated
  useEffect(() => {
    props.changeShelf(props.book, bookShelf)
  }, [bookShelf])
  function handleChange(e) {


    // Change the element to controled element
    setBookShelf(e.target.value);
    console.log(bookShelf)


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
    { value: "none", text: "none" },
  ];

  return (
    <div>
      <div className="book-shelf-changer">
        <select value={bookShelf} onChange={handleChange}  >

          {optionsArr.map((option) => {
            if (option.value === props.shelf) {
              option.text += "✔️";
            }
            return (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.text}{" "}
              </option>
            );
          })}
          {/* <option value="currentlyReading" >Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option> */}
        </select>
      </div>
    </div>
  );
}
