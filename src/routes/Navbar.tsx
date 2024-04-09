import * as React from "react";
import { Outlet, Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PsychologyIcon from "@mui/icons-material/Psychology";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Navbar() {
  const iconPadding = { mr: 0.5 };

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/portfolio/">
          <HomeIcon sx={iconPadding} fontSize="inherit" />
          Home
        </Link>
        <Link to="/portfolio/about/">
          <DirectionsRunIcon sx={iconPadding} fontSize="inherit" />
          About
        </Link>
        <Link to="/portfolio/projects/">
          <PsychologyIcon sx={iconPadding} fontSize="inherit" />
          Projects
        </Link>
      </Breadcrumbs>
      <Outlet />
    </div>
  );
}
