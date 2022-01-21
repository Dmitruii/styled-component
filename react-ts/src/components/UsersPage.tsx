import React, {useEffect, useState} from 'react'
import {IUser} from "../types/types"
import axios from "axios"
import List from "./List"
import UserItem from "./UserItem"

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<Array<IUser>>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<Array<IUser>>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)

        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}/>
        </div>
    )
}

export default UsersPage