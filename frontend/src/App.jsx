import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PanelDetails from "./pages/PanelDetails";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
          <div className="app">
            <Navbar />

            <main className="content">
              <Routes>

                <Route path="/" element={<Home />} /> 
                <Route path="/search" element={<Search />} /> 
                <Route path="/panel/:id" element={<PanelDetails />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} /> 
                <Route path="/dashboard" element={<Dashboard />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<ProtectedRoute roles={["customer"]}><Dashboard /></ProtectedRoute>}/>

              </Routes>
            </main>

            <Footer />
          </div>

        </BrowserRouter>
    );
}

export default App;