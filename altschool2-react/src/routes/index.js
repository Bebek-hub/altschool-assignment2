import { Routes } from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./Path/Home";
import About from "./Path/About";
import Users from "./Path/Users";


const ErrorPage = () => {
    return (
        <div>
            <h1>404 Page</h1>
        </div>
    )
}

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/users" element={<Users />} />
  <Route path="*" element={<ErrorPage />} />
</Routes>;
