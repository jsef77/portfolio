import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { RepoResponse } from "./RepoList";

interface Props extends RepoResponse {
  /* Inherited from RepoResponse Interface (determined by API response):
    id
    key
    full_name
    html_url
    description
    */
}

const RepoListItem = (props: Props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(0.6),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover, &:focus": {
      margin: theme.spacing(1.2),
    },
  }));

  return (
    <div>
      <Item elevation={2} square={false}>
        <a rel="noopener noreferrer" href={props.html_url} target="_blank">
          <h3>{props.full_name}</h3>{" "}
        </a>
        <p>{props.description}</p>
      </Item>{" "}
    </div>
  );
};

export default RepoListItem;
