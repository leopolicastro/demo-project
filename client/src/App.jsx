import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import UseParamsDemo from "./pages/UseParamsDemo";
import UseRefDemo from "./pages/UseRefDemo";
import ContextDemo from "./pages/ContextDemo";
import FormDataDemo from "./pages/FormDataDemo";
import PostRequestsDemo from "./pages/PostRequestsDemo";
import Login from "./pages/Login";
import Alert from "./components/Alert";
import Private from "./pages/Private";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthContext } from "./context/AuthContext";
import { AppContext } from "./context/AppContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { alert } = useContext(AppContext);
  return (
    <div className="bg-gray-50 min-h-screen w-screen">
      <Router>
        <Navbar />
        {alert && <Alert message={alert} />}
        <main className="flex flex-col h-full w-full p-5 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-params/:id" element={<UseParamsDemo />} />
            <Route path="/useRef-demo" element={<UseRefDemo />} />
            <Route path="/context-demo" element={<ContextDemo />} />
            <Route path="/form-data" element={<FormDataDemo />} />
            <Route path="/posts" element={<PostRequestsDemo />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/private"
              element={
                <ProtectedRoute user={currentUser}>
                  <Private />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
