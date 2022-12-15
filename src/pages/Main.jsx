import { useEffect, useState } from "react"
import {MessageList} from '../components/MessageList/MessageList'
import { Form } from '../components/Form/Form'

export function Main() {
    const [messages, setMessages] = useState([])
    const addMesage = (newMessage) => {
        setMessages([...messages, newMessage])
    }
    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
            const timeOut = setTimeout(() => {
                addMesage({
                    author: 'BOT',
                    text: 'I AM BOT'
                })
            }, 1500)
            return () => {
                clearTimeout = { timeOut }
            }
        }

    }, [messages])
    return (
        <>
            <h1>Welcome to chat</h1>
            <Form addMesage={addMesage}></Form>
            <MessageList messages={messages}></MessageList>
        </>
    )
}