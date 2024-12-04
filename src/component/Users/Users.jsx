import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css';
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Users list : {users.length}</h2>
           <div className="users">
           {
                users.map(user => <User 
                    key={user.id}
                    user ={user}
                    ></User>)
            }
           </div>
        </div >
    );
};

export default Users;