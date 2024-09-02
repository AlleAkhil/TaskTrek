import { Button, Checkbox, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import Update from "./Update.jsx";
import classnames from "classnames";
import axios from "axios";
// import { API_URL } from "../utils";

const Task = ({ task }) => {
    const { id, name, completed } = task;
    const [isComplete, setIsComplete] = useState(completed);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleUpdateTaskCompletion = () => {
        setIsComplete((prev) => !prev);
    }

    const handleDeleteTask = () => {
        console.log("Task Deleted")
    }
    return (
        <div className="task">
            <div
                className={classnames("flex", {
                    done: isComplete,
                })}
            >
                <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
                <Typography variant="h4">{name}</Typography>
            </div>
            <div className="taskButtons">
                <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
                    <EditIcon />
                </Button>
                <Button color="error" variant="contained" onClick={handleDeleteTask}>
                    <DeleteIcon />
                </Button>
            </div>
            <Update
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                task={task}
            />
        </div>
    )
}

export default Task