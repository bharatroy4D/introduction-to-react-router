import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title,body,id} = post;
    const navigate = useNavigate();   
    const handleGoBack = ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Title : {title}</h2>
            <p><small>{body}</small></p>
            <p>{id}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;