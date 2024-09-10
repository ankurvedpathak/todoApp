import './App.css';
import TextBox from './components/TextBox';
import React, { useState } from 'react'

function App() {

  //------------------------------------------------------------------
  // Dark Mode color configurations
  // -----------------------------------------------------------------
  const darkModeBackgroundColor = '#012154';
  const darkModeTextColor = '#ffffff';
  const lightModeBackgroundColor = '#ffffff';
  const lighModeTextColor = '#000000';
  const darkModeButtonText = 'Disable dark mode';
  const lightModeButtonText = 'Enable dark mode';
  //------------------------------------------------------------------
  // Text message configurations
  // -----------------------------------------------------------------
  const title = 'To Do list';
  const taskCreated = 'Great, a new task has been created for you.';
  const taskWarning = 'Uh Oh! The task you are creating is empty. Please try to enter some text :)';
  const taskCompleted = 'Yayyy, your task has been completed!';
  const noNewTasks = 'No tasks available. Add some tasks to get started!';
  const noCompletedTasks = 'No tasks have been completed yet. Start by adding new tasks and mark them as you complete them.';
  const success = 'success';
  const warning = 'warning';
  //------------------------------------------------------------------

  // Initial state for dark/light mode
  const [darkMode, setDarkMode] = useState({
    color: lighModeTextColor,
    backgroundColor: lightModeBackgroundColor
  });

  // Toggle dark/light mode button text
  const [darkModeText, setDarkModeText] = useState(lightModeButtonText);

  // To toggle darkmode
  const toggleDarkMode = () => {
    if (darkMode.color === darkModeTextColor) {
      setDarkMode({
        color: lighModeTextColor,
        backgroundColor: lightModeBackgroundColor
      })
      setDarkModeText(lightModeButtonText);
    } else {
      setDarkMode({
        color: darkModeTextColor,
        backgroundColor: darkModeBackgroundColor
      })
      setDarkModeText(darkModeButtonText);
    }
  }


  return (
    <div className="App" style={darkMode}>
      <h1>{title}</h1>
      <div class="form-check form-switch" style={{ position: 'relative', textAlign: 'left' }}>
        <input className="form-check-input" onClick={toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label>{darkModeText}</label>
      </div>

      <TextBox
        taskCreated={taskCreated}
        taskWarning={taskWarning}
        taskCompleted={taskCompleted}
        success={success}
        warning={warning}
        noNewTasks={noNewTasks}
        noCompletedTasks={noCompletedTasks}
        style={darkMode}
      />
    </div>
  );
}

export default App;
