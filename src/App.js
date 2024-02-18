import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    // called by BookShow
    // App.js <- BookList.js <- BookShow.js <- BookEdit.js
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book;
        })
        setBooks(updatedBooks);
    }

    useEffect(() => { // similar to ngOnInit() as it's coded right now;
        fetchBooks();
    }, []); // this argument controls whether this will be called on follow-up renders
    // to re-render everytime, don't add anything
    // Add state variable to make it run whenever state variable is changed

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList
                books={books}
                onDelete={deleteBookById}
                onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;