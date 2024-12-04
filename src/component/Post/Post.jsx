import { Link, useNavigate,} from "react-router-dom";

const Post = ({post}) => {
    const {title,body, id } = post;
    
    const navigate = useNavigate();

    const postStyle ={
        border:'2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
        margin: '15px'
    }

    const handleShowDetail = ()=>{
        navigate(`/post/${id}`)

    }
 
    return (
        <div style={postStyle}>
            <h2>Name : {title}</h2>
            <p><small>{body}</small></p>
            <p>{id}</p>
            <Link to ={`/post/${id}`}><button>Post Details</button></Link> <br />
        <button onClick={handleShowDetail}>Click see details</button>
        </div>
    );
};

export default Post;