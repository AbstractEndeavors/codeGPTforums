import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export function BackButton(props) {
    const navigate = useNavigate();

    return <Button style={{marginTop: '1rem'}} variant="outlined" color="primary" onClick={() => {
        navigate('/');
    }} disableElevation>List Categories</Button>;
}
