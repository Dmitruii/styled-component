import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

const User = ({followingInProgress, follow, unfollow, u, ...props}) => {
    return (
         <div key={u.id} className={s.userContainer}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt="logo" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => { unfollow(u.id) }} >unfollow</button> :
                                <button disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => { follow(u.id)  }} >follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>
    )
}

export default User;