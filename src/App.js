import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home";
import AddEdit from "./component/Pages/AddEdit";
import Userinfo from "./component/Pages/Userinfo";
import About from "./component/Pages/About";
import Header from "./component/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addUser" element={<AddEdit />} />
          <Route path="/editUser/:id" element={<AddEdit />} />
          <Route path="/userInfo/:id" element={<Userinfo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
