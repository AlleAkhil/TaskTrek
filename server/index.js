import express from 'express';
import { fetchTasks, createTasks, updateTasks, deleteTasks } from './task.js';
import serverless from "serverless-http";
import cors from 'cors';

const app = express();
const port = 3001;

app.use(express.json());

if (process.env.DEVELOPMENT) {
    app.use(cors());
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/task', async (req, res) => {
    try {
        const tasks = await fetchTasks();
        res.send(tasks.Items);
    } catch (err) {
        console.error("Error fetching tasks:", err);
        res.status(400).send(`Error fetching tasks: ${err.message}`);
    }
});

app.post('/task', async (req, res) => {
    try {
        const tasks = req.body;
        const response = await createTasks(tasks);
        res.send(response);
    } catch (err) {
        console.error("Error creating tasks:", err);
        res.status(400).send(`Error creating tasks: ${err.message}`);
    }
});

app.put('/task', async (req, res) => {
    try {
        const tasks = req.body;
        const response = await updateTasks(tasks);
        res.send(response);
    } catch (err) {
        console.error("Error updating tasks:", err);
        res.status(400).send(`Error updating tasks: ${err.message}`);
    }
});

app.delete('/task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deleteTasks(id);
        res.send(response);
    } catch (err) {
        console.error("Error deleting tasks:", err);
        res.status(400).send(`Error deleting tasks: ${err.message}`);
    }
});

if (process.env.DEVELOPMENT) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

export const handler = serverless(app);
