import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState("Devika");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Form submitted by: ' + name);
    };

    return (
        <>
            <h1>Form Belongs To {name}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;