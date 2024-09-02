import React, { useState, useEffect } from 'react'
import Add from './components/Add.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Task from './components/Task.jsx';
import axios from 'axios';
import { API_URL } from './components/utils.js';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const { task, setTask } = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setTask(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Add fetchTasks={fetchTasks} />
      {task.map((task) => (
        <Task task={task} key={fetchTasks.id} fetchTasks={fetchTasks} />
      ))}
    </ThemeProvider>
  )
}

export default App