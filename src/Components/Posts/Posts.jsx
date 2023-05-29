import { useEffect } from "react";
import fetchPosts from "../../Store/actions/postsCreator";
import { useDispatch, useSelector } from "react-redux";
import style from "./posts.module.css";
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
  const { loading, posts, error } = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
console.log(posts);
  useEffect(() => {
    dispatch(fetchPosts());
    const interval = setInterval(() => {
      console.log("first");
    }, 3000)
    return () => clearInterval(interval)
  }, []);


  if (error) {
    <div>{error}</div>;
  }

  const textBody = (string, param) => {
    if (string.length > param) {
      const shortValue = string.substring(0, param);
      return <>{shortValue}...</>;
    }
    return string;
  };

  return (
    <div>
      <div className={style.container}>
        {loading
          ? "loading..."
          : posts.map((el) => {
              return (
                <div key={el.id} className={style.content}>
                  <h2>
                    {el.id} <br /> {el.title}
                  </h2>
                  <button
                    className={style.btn}
                    onClick={() => navigate(`/posts/${el.id}`)}
                  >
                    Details
                  </button>
                  <div>
                    {textBody(`${el.body}`, 23)}
                    <Link to={`/posts/${el.id}`}> More... </Link>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Posts;