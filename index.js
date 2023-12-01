import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";
import Indexcss from"./index.css";
import Home from"./Home.js";
import routes from "./routes";
import Login from "./Login";
import UserCard from"./UserCard";
import Navbar from"./Navbar";
import UserProfile from"./UserProfile";
import App from"./App.js";
import About from"./About.js";
import ErrorPage from"./ErrorPage";



const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);