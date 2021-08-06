import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./postsSlice";

const Posts = () => {
  const dispatch = useDispatch();

  //example usage: limit is taken from the local state. Each time I scroll to the bottom of the page limit = limit + 5
  //limit from local state is added as dependency to useEffect. Every time I scroll to the bottom new posts are fetched.
  //something like this:
  // `https://jsonplaceholder.typicode.com/photos?_start=${prevState.limit}&_limit=${limit}`

  useEffect(() => {
    dispatch(getPosts({ limit: 5 }));
  }, [dispatch]);

  return <div></div>;
};

export default Posts;
