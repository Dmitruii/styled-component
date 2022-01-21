import React from 'react';
import { Link } from 'react-router-dom';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
    return (
        <div>
            <div style={{padding: 15, border: '1px solid #ccc'}}>
                {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}<br/>
                <Link to={'/user/' + user.id} style={{fontSize: '18', color: '#f0f', textDecoration: 'none',
                    fontFamily: 'Arial', fontWeight: 700}}>Profile</Link>
            </div>
        </div>
    )
}

export default UserItem