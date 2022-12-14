import { useState } from "react"
import Button from '@mui/material/Button'

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
                    autoFocus={true}
                    onChange={(event) => setText(event.target.value)}
                />
                <Button type="submit" variant="contained">Add message</Button>

                {/* <Button type="submit">Add Messages</Button> */}

            </form>

        </>
    )
}