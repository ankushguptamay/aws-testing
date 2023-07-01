import './App.css';
import QrCode from './Components/QrCode';
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
          <Route exact path="/" element={<QrCode/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
