import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const Add = () => {
    const [newTask, setNewTask] = useState("");

    const addNewTask = () => {
        console.log("Add new task is clicked");
    }
    return (
        <div>
            <Typography align="center" variant="h2" paddingTop={2} paddingBottom={2}>
                My Task List
            </Typography>
            <div className="addTaskForm">
                <TextField
                    size="small"
                    label="Task"
                    variant="outlined"
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button
                    disabled={!newTask.length}
                    variant="outlined"
                    onClick={addNewTask}
                >
                    <AddIcon />
                </Button>
            </div>
        </div>
    )
}

export default Add