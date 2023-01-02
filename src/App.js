import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Main } from './pages/Main'
import { Chat } from './pages/Chat'
import { Profile } from './pages/Profile'

export function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<Main />}></Route>
                    <Route path='Chats' element={<Chat />}></Route>
                    <Route path='Profile' element={<Profile />}></Route>
                </Route>
            </Routes>
            {/* <Header /> */}
        </>
    )
}