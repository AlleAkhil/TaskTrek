import React, { useState } from "react";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
// import { API_URL } from "../utils";


const Update = ({ isDialogOpen, setIsDialogOpen, task }) => {
    const { id, completed } = task;
    const [taskName, setTaskName] = useState(" ");
    return (
        <Dialog open={isDialogOpen}>
            <DialogTitle>Edit Task</DialogTitle>
            <div className="dialog">
                <TextField
                    size="small"
                    label="Task"
                    variant="outlined"
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsDialogOpen(false);
                    }}
                >
                    <CheckIcon />
                </Button>
            </div>
        </Dialog>
    )
}

export default Update