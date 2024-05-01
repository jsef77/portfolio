import { styled } from "@mui/material/styles";
import { RepoResponse } from "./RepoList";
import { Grow, Card, CardContent, Typography } from "@mui/material";
import RepoListItemLanguages from "./RepoListItemLanguages";

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
    color: theme.palette.text.secondary,
    "&:hover, &:focus": {
      padding: theme.spacing(1.2),
    },
  }));

  return (
    <Grow in={true}>
      <Item elevation={4} square={false}>
        <CardContent>
          <a rel="noopener noreferrer" href={props.html_url} target="_blank">
            <Typography variant="h5" gutterBottom>
              {props.name}
            </Typography>
          </a>
          <RepoListItemLanguages
            repoName={props.name}
            chartHeight="10rem"
            chartWidth="inherit"
          />
          <Typography sx={{ textWrap: "wrap" }} variant="body1">
            {props.description}
          </Typography>
        </CardContent>
      </Item>
    </Grow>
  );
};

export default RepoListItem;
