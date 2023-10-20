import './App.css';
import LoginForm from './components/login';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<LoginForm/>}/>

      </Routes>
    </div>
    </>
  );
}

export default App;
