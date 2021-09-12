import logo from './logo.svg';
import './App.css';

function Copyright() {
  return (<div>
    <h2>Copyright © </h2>
    <p>Woodstock</p>
    <p>{new Date().getFullYear()}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Copyright />
    </div>
  );
}

export default App;
