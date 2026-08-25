import { useState } from "react";

export default function Form(){
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(name)

        if (name === "") {
            alert("Name is required")
            return
        } else {
            alert("Form Submitted!")
            return
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Fullname..." />
                <button type="submit">Submit</button>
            </form>
            <h1>{name}</h1>
        </>
    )
}