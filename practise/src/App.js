import './App.css';
import { useState } from "react";
import LoginForm from './components/login';
import LoggedIn from './components/loggedin/loggedin';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <div className="App">
      <Routes>
        <>
        {isLoggedIn ? (
        <Route exact path="/" element={<LoggedIn setIsLoggedIn={setIsLoggedIn}/>}/>

        ) : (
        <Route exact path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn}/>}/>
        )}
        </>
      </Routes>
    </div>
    </>
  );
}

export default App;
