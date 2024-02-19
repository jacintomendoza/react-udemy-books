import { useState } from "react";
import useBooksContext from "../hooks/use-hooks-context";

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);  // value from input
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents browser from automatically submitting form by reloading page
        createBook(title);
        setTitle(''); // once user clicks enter, empty the input field
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}
export default BookCreate;