import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import CLayout from "./layout/CLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CookiesProvider>
          <BrowserRouter>
            <CLayout>
              <Routes>
                <Route path="/" element={<Home />} />

                {/* <Route path="users/*" element={<Users />} />

                <Route path={"*"} element={<NotFound/>}> */}
              </Routes>
            </CLayout>
          </BrowserRouter>
        </CookiesProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
