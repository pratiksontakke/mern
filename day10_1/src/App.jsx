import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
/*
  - Install react-router-dom@6

  - In index.js
    - import BrowserRouter and wrap your application inside it.
  
  - In App.jsx
    - Navbar; (Link form "react-router-dom")
    - AllRoutes; (Routes, Route from "react-router-dom").
*/