import './App.css';
import TextBox from './components/TextBox';

function App() {
  return (
    <div className="App">
      <TextBox
      taskCreated={"Great, a new task has been created for you."}
      taskWarning={"Uh Oh! The task you are creating is empty. Please try to enter some text :)"}
      taskCompleted={"Yayyy, your task has been completed!"}
      success={"success"}
      warning={"warning"}
      noNewTasks={"Looks like currently you don't have any news tasks. Start by entering a new task and click Submit"}
      noCompletedTasks={"You have not completed any tasks yet :("}
      />
    </div>
  );
}

export default App;
