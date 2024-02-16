import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    // called by BookShow
    // App.js <- BookList.js <- BookShow.js
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title: title }
        ]
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;