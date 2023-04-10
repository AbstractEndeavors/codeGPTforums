import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import ChattyApp from '../../../chatAndTrade/chatty.jsx';

export function NewPostForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [query, setQuery] = useState("");
  const { categoryId } = useParams();

const handleChattyResponse = (response) => {
  setTitle(response.title);
  setQuery(response.query); // Update this line to set the correct state value
  setDescription(response.description);
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      query,
      description,
      categoryId,
      author: "YourUsername", // Replace with the actual username
      $id: Date.now().toString(), // Generate a unique ID based on the current timestamp
    };

    onSubmit(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          
          <ChattyApp onResponse={handleChattyResponse} />
        </Grid>
        <h2>{handleChattyResponse}</h2>
        
          
       <Grid item xs={12}>
          
        </Grid>
        <Grid item xs={12}>
        <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Update this line to set the correct state value
              fullWidth
              required
            />
            
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            required
            
          />
        </Grid>
        
      </Grid>
      <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
    </form>
  );
}
export default NewPostForm;
