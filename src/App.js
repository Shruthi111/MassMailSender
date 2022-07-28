import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Textarea
                  showAlert={showAlert}
                  heading={"Type your mail here!"}
                />
              }
            />
            <Route path="About/*" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
