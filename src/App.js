// import logo from './logo.svg';
import './App.css';
import SignUp from "./SignUp";
import Login from './Login';
import {Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <>
    <div className="App">
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
