import { useState } from "react";

function BookCreate({ onCreate }) { // onCreate from App.js
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);  // value from input
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents browser from automatically submitting form by reloading page
        onCreate(title);
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