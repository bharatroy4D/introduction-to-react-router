import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name, email, phone} = user;
    const userStyle ={
        border:'2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
        margin: '15px'
    }
    return (
        <div style={userStyle}>
            <h2>Name : {name}</h2>
            <p>phone : {phone}</p>
            <p>email : {email}</p>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default User;