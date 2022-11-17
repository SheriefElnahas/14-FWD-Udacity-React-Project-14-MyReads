const API = "https://reactnd-books-api.udacity.com/books";

import axios from 'axios';
import React, {useState,useEffect} from 'react'

export default function TestingAPI() {
    const [books,setBooks] = useState('');

    useEffect(() => {
        axios.get(API, { headers: { 'Authorization': 'Eren Yeager' }}).then((response) => {
            console.log(response.data);
            setBooks(response.data);
        })
    }, [])
  return (
    <div>TestingAPI</div>
  )
}
