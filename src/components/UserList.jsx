import { useEffect } from "react";
export default function UserList({users, getUsers}){

    // console.log(users);

    useEffect(()=>{
        getUsers();
    }, [getUsers]);

    if(users.length === 0){
        return <p>현재 유저 정보 없음</p>;
    }

    return (
    <ul>
        {users.map((user) =>{
            return <li key={user.id}>{user.login}</li>;
        })}
    </ul>
    );
}