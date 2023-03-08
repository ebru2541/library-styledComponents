import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { GlobalStyles } from "../styles/Global.styles";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import About from "../pages/about/About";

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user")
  );
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login setCurrentUser={setCurrentUser} currentUser={currentUser} />
          }
        />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route> */}

        {/* her ikiside user a baglı oldugu için bu şekilde yazılabilir */}
        <Route element={<PrivateRouter />}>
          <Route path="/detail" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
