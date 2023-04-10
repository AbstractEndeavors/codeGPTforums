// src/Components/Forum/Posts/NewPostButton/NewPostButton.js

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { NewPostForm } from "./../NewPostForm/NewPostForm";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export function NewPostButton(props) {
  const { onNewPost } = props;
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
const handleSubmit = (newPost) => {
    onNewPost(newPost);
    handleClose();
  };

  return (
    <>
      <Button
        style={{ marginTop: "1rem" }}
        variant="contained"
        color="primary"
        disableElevation
        onClick={handleClickOpen}
      >
        New Post
      </Button>
      
       <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create a New Post</DialogTitle>
      <DialogContent>
        <NewPostForm onSubmit={handleSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
   </>
)
}

