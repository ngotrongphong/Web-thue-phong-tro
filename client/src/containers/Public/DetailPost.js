import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostsLimit } from "../../store/actions";
import { Slider } from "../../components";

const DetailPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    postId &&
      dispatch(
        getPostsLimit({
          id: postId,
        })
      );
  }, [postId]);
  return (
    <div className="flex w-full gap-4">
      <div className="w-[70%]">
        <Slider
          images={
            posts && posts.length > 0 && JSON.parse(posts[0]?.images?.image)
          }
        />
      </div>
      <div className="w-[30%]"></div>
    </div>
  );
};

export default DetailPost;
