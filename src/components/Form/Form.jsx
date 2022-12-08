import { useState } from "react"
import { Button } from "../ui/Button.jsx"

export function Form({ addMesage }) {

    const [text, setText] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        addMesage({
            author: 'user',
            text
        })
        setText('')
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <Button type="submit">Add Messages</Button>
            </form>
        </>
    )
}