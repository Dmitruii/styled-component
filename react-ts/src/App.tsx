import React from 'react'
import UsersPage from "./components/UsersPage"
import TodosPage from "./components/TodosPage"
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import UserItemPage from './components/UserItemPage'
import TodoItemPage from "./components/TodoItemPage"
/*import Card, {CardVariable} from "./components/Card"
import EventsExample from "./components/EventsExample"*/

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link style={{margin: '0 10px', fontSize: 24}} to="/">Home</Link>
                    <Link style={{margin: '0 10px', fontSize: 24}} to="/todos">todos</Link>
                    <Link style={{margin: '0 10px', fontSize: 24}} to="/users">users</Link>
                </nav>
                <Routes>
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/todos" element={<TodosPage />} />
                    <Route path="/todo/:id" element={<TodoItemPage />} />
                    <Route path="/user/:id" element={<UserItemPage />} />
                </Routes>
            </BrowserRouter>
            {/*<EventsExample />
            <Card onClick={(number) => console.log('number', number)} width={'200px'} height={'200px'}
                  variant={CardVariable.primary}>
                <button>Кнопка</button>
            </Card>*/}
        </div>
    )
}

export default App