import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Announcements from "./components/Announcements/Announcements";
import Quizzes from "./components/Quizzes/Quizzes";
import Dashboard from "./components/Dashboard";
import { requireAuth } from "./components/Auth/requireAuth";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const App = () => {
  const ProtectedDashboard = requireAuth(Dashboard);
  const ProtectedAnnouncements = requireAuth(Announcements);
  const ProtectedQuizzes = requireAuth(Quizzes);
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Layout />}>
                <Route path="dashboard" element={<ProtectedDashboard />} />
                <Route
                  path="announcements"
                  element={<ProtectedAnnouncements />}
                />
                <Route path="quizzes" element={<ProtectedQuizzes />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </I18nextProvider>
  );
};

export default App;
