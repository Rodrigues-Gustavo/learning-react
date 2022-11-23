import { useState } from "react";

export const Form = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const handleInput = (e) => {
        setName(e.target.value);
    }

    const handleInputLastname = (e) => {
        setLastName(e.target.value);
    }

    const handleInputAge = (e) => {
        setAge(e.target.value);
    }

    return (
        <>
            Name:
            <input type="text" value={name} onChange={handleInput} />
            LastName:
            <input type="text" value={lastName} onChange={handleInputLastname} />
            Age:
            <input type="number" value={age} onChange={handleInputAge} />
            <hr />

            <p> hello {name} {lastName} !<br />
                do you ok? <br />
                you have {age} years!
            </p>
            <p>Do you Confirm?</p>
        </>
    )
}