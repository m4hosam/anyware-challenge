import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import ProtectedDashboard from "./components/ProtectedDashboard";
import ProtectedAnnouncements from "./components/Announcements/ProtectedAnnouncements";
import ProtectedQuizzes from "./components/Quizzes/ProtectedQuizzes";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<ProtectedDashboard />} />
            <Route path="announcements" element={<ProtectedAnnouncements />} />
            <Route path="quizzes" element={<ProtectedQuizzes />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
