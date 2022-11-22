import React from "react";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import CLayout from "./layout/CLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CookiesProvider>
          <BrowserRouter>
            <CLayout>
              <Routes>
                <Route path="/" element={<Home />} />

                {/* <Route path="users/*" element={<Login />} /> */}

                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path={"*"} element={<NotFound />} />
              </Routes>
            </CLayout>
          </BrowserRouter>
        </CookiesProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
