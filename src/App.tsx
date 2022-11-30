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
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./app/store";
import { persistor } from "./app/store";
import Restaurants from "./pages/Restaurants";
import CreateRestaurant from "./pages/CreateRestaurant";
import BecomeBusinessOwner from "./pages/BecomeBusinessOwner";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CookiesProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <CLayout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                      path="/create_restaurant"
                      element={<CreateRestaurant />}
                    />

                    <Route
                      path="/become_business_owner"
                      element={<BecomeBusinessOwner />}
                    />
                    <Route path="/restaurants" element={<Restaurants />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path={"*"} element={<NotFound />} />
                  </Routes>
                </CLayout>
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </CookiesProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
