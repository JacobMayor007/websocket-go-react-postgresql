import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

import Chat from "./pages/Chat";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

export default function App() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true); // Handle the "checking auth" state

  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser?.uid || "");
      setTimeout(() => {
        setLoading(false);
      }, 300);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (loading)
    return <div className="flex items-center justify-center">Loading...</div>; // Prevent flickering during auth check

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Route: If no user, send to login. If user, show Chat */}
        <Route
          path="/"
          element={user ? <Chat /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
