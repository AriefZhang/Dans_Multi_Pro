import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import { ProtectToLogin, ProtectToHome } from "./components/ProtectorGuard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectToHome>
              <Home />
            </ProtectToHome>
          }></Route>
          <Route
            path="/login"
            element={
              <ProtectToLogin>
                <Login />
              </ProtectToLogin>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
