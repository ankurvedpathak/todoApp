import './App.css';
import TextBox from './components/TextBox';
import React, { useState } from 'react'

function App() {

  // Dark Mode color configurations
  // -----------------------------------------------------------------
  // Specify the background and text color for darkmode and light Mode
  // -----------------------------------------------------------------
    const darkModeBackgroundColor = '#012154';
    const darkModeTextColor = '#ffffff';
    const lightModeBackgroundColor = '#ffffff';
    const lighModeTextColor = '#000000';
    const darkModeButtonText = 'Enable light mode';
    const lightModeButtonText = 'Enable dark mode';
  //------------------------------------------------------------------

  // Initial state for dark/light mode
  const [darkMode, setDarkMode] = useState({
    color: lighModeTextColor,
    backgroundColor: lightModeBackgroundColor
  });

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
      <h1>To Do list</h1>
      <div class="form-check form-switch" style={{position: 'relative', textAlign: 'left'}}>
        <input className="form-check-input" onClick={toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label>{darkModeText}</label>
      </div>

      <TextBox
        taskCreated={"Great, a new task has been created for you."}
        taskWarning={"Uh Oh! The task you are creating is empty. Please try to enter some text :)"}
        taskCompleted={"Yayyy, your task has been completed!"}
        success={"success"}
        warning={"warning"}
        noNewTasks={"Looks like currently you don't have any news tasks. Start by entering a new task and click Submit"}
        noCompletedTasks={"You have not completed any tasks yet :("}
        style={darkMode}
      />
    </div>
  );
}

export default App;
