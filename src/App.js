import './App.css';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar title="Home" information="Information" /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Login />
    </div>
  );
}

export default App;
