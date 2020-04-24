import React from 'react';
import './UserList.css';
import UserItem from './UserItem'
const UserList = (props, a, b) => {
    if(props.items === 0){
        return(
            <div className="center">
                <h2>No se ha encontrado usuarios!!</h2>
            </div>
        );
    }else{
        return(
            <ul className="users-list">
                {
                    props.items.map(user => {
                        return(
                            <UserItem
                                key={user.id}
                                id={user.id}
                                image={user.image}
                                name={user.name}
                                placeCount={user.places}
                            />
                        );
                    })
                }
            </ul>
        )
    }
}
export default UserList;