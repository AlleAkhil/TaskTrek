import React from 'react'
import Add from './components/Add.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Task from './components/Task.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const task = {
  id: '1',
  name: "Update Code",
  completed: false,
};

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Add />
      <Task task={task} />
    </ThemeProvider>
  )
}

export default App