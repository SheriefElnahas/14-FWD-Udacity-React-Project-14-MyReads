import React, { useEffect, useState } from "react";

export default function ShelfChanger(props) {

  const [selectOptions, setSelectOptions] = useState({option : ''});

  
  function handleChange(e) {

    
    // Change the element to controled element

    setSelectOptions({option: e.target.value});

    // Extract the options array & the selected option index
    const options = e.target.options;
    const index = options.selectedIndex;

    // Loop through the options and remove the check mark - then add the check mark only on the selected option
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = options[i].textContent.replace("✔️", "");
    }
    options[index].textContent += "✔️";

  }

  props.changeShelf(props.book, selectOptions.option)




  const optionsArr = [
    {value: 'currentlyReading', text: 'Currently Reading'},
    {value: 'wantToRead', text: 'Want To Read'},
    {value: 'read', text: 'Read'},
    {value: 'none', text: 'none'},
   ];


  return (
    <div>

      <div className="book-shelf-changer">
        <select value={selectOptions.option} onChange={handleChange} name={selectOptions.option}  >
          {/* <option value="none" disabled>
            Move to...
          </option> */}
          {optionsArr.map((option ) => {

            if(option.value === props.shelf) {
              option.text += '✔️';
            }
            return <option key={option.value} value={option.value}>{option.text} </option>
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


