import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchPost from "../../Store/actions/postDetailsCreator";


const PostsDetails = () => {
  const navigate = useNavigate();

  const { loading2, post, error2 } = useSelector((state) => state.postReducer);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchPost(params.id));
  }, []);

  console.log(post);

  if (error2) {
    return <div>Error: {error2}</div>;
  }

  return (
    <div>
      {loading2 || !post ? (
        "loading..."
      ) : (
        <div>
          <button onClick={() => navigate("/posts")}>Back</button>
          <h1>
            {" "}
            {post.id} <br /> {post.title} <br />
          </h1>
          <div> {post.body}</div>
        </div>
      )}
    </div>
  );
};

export default PostsDetails;