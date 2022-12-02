import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostsLimit } from "../../store/actions";

const DetailPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    postId &&
      dispatch(
        getPostsLimit({
          id: postId,
        })
      );
  }, [postId]);
  return <div>DetailPost</div>;
};

export default DetailPost;
