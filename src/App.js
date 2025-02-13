import "./css/style.css";

import "./App.css";

import MyComponent from "./components/MyComponent";
import Header from "./components/header";
import Navbar from "./components/navbar"; // Import Navbar component
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyComponent /> {/* Using MyComponent inside App */}
          <Header /> {/* Using Header inside App */}
        </p>
      </header>
      <Router>
        <Navbar /> {/* Using Navbar inside App */}
      </Router>
    </div>
  );
}

export default App;
