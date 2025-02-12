
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Components/signup/Signup';
import Login from './Components/login/Login';
import Main from './Components/main/Main';
import Todo from './Components/todo/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="App1">
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo/>}></Route>
        </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;