import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => { // similar to ngOnInit() as it's coded right now;
        fetchBooks();
    }, []); // this argument controls whether this will be called on follow-up renders
    // to re-render everytime, don't add anything
    // Add state variable to make it run whenever state variable is changed

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div> 
    );
}

export default App;