import React, {FC, useEffect} from 'react';
import {UseTypedSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creator/user";
import {useAction} from "../store/reducers/useAction";

const UserList: FC = () => {
    const {users, error, loading} = UseTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>Произошла ошибка: {error}</h1>
    }

    return (
        <div>
            {users.map(user => (
                <div key={user.id} style={{border: '2px solid #f0f', margin: '2rem', padding: '1rem', fontSize: '2rem'}}>
                    <div>{user.username}</div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.address.street} {user.address.city}</div>
                    <div>{user.phone}</div>
                    <div>{user.website}</div>
                </div>
            ))}
        </div>
    );
};

export default UserList;