// see: https://mui.com/material-ui/react-breadcrumbs/

import { Outlet, Link } from "react-router-dom";

import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";

import HomeIcon from "@mui/icons-material/Home";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PsychologyIcon from "@mui/icons-material/Psychology";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.25),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

// function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function CustomizedBreadcrumbs() {
  return (
    <>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/portfolio/">
            <StyledBreadcrumb
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />{" "}
          </Link>
          <Link to="/portfolio/about/">
            <StyledBreadcrumb
              label="About"
              icon={<DirectionsRunIcon fontSize="small" />}
            />
          </Link>
          <Link to="/portfolio/projects/">
            <StyledBreadcrumb
              label="Projects"
              icon={<PsychologyIcon fontSize="small" />}
            />
          </Link>
        </Breadcrumbs>
      </div>
      <Outlet />
    </>
  );
}
