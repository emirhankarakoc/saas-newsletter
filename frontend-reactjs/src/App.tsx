import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Page from "./pages/landingpage/Page";
import { Features } from "./pages/features/Features";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/features" element={<Features />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
