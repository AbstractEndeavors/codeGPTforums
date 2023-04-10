import React, {useEffect, useState} from "react";
import {PostItem} from "./PostItem/PostItem";
import Grid from "@mui/material/Grid";
import {BackButton} from "./BackButton/BackButton";
import {useNavigate, useSearchParams} from "react-router-dom";
import { NewPostButton } from "./NewPostButton/NewPostButton";
import {Query} from "appwrite";


export function Posts(props){
    const {REACT_APP_POSTS_COLLECTION} = process.env;
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    

    let [posts, setPosts] = useState([]);
  const handleNewPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <NewPostButton onNewPost={handleNewPost} />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <BackButton />
        </Grid>
      </Grid>

      {posts.map((post) => (
        <PostItem
          title={post.title}
          query={post.query}
          description={post.description}
          author={post.author}
          key={post.$id}
        />
      ))}
    </>
  );
}
