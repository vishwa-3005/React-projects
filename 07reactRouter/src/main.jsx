import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import Layout from "./Layout.jsx";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/AboutUs.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Github, {
  githubInfoLoader,
} from "./component/Github/GithhubInfoLoader.jsx";
import User from "./component/User/User.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="user/:userid" element={<User />}></Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
