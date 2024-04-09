import { styled } from "@mui/material/styles";
import { RepoResponse } from "./RepoList";
import { Card, Grow } from "@mui/material";

interface Props extends RepoResponse {
  /* Inherited from RepoResponse Interface (determined by Git API JSON response):
    id
    key
    full_name
    html_url
    description
    */
}

const RepoListItem = (props: Props) => {
  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(0.6),
    textAlign: "center",
    boxSizing: "border-box",
    color: theme.palette.text.secondary,
    flexDirection: "column",
    "&:hover, &:focus": {
      margin: theme.spacing(1.2),
    },
  }));

  return (
    <Grow in={true}>
      <Item elevation={2} square={false}>
        <a rel="noopener noreferrer" href={props.html_url} target="_blank">
          <h3>{props.full_name}</h3>
        </a>
        <div style={{ maxWidth: "inherit" }}>{props.description}</div>
      </Item>
    </Grow>
  );
};

export default RepoListItem;
