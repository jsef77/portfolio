import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

export default function Root() {
  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/portfolio">Go to the home page</Link>
      </p>
    </div>
  );
}
