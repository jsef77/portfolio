import { styled } from "@mui/material/styles";
import { RepoResponse } from "./RepoList";
import { Box, Container, Grow, Paper } from "@mui/material";

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
  const Item = styled(Paper)(({ theme }) => ({
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
        <Container
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              maxWidth: "min-content",
              textWrap: "nowrap",
            }}
          >
            <a rel="noopener noreferrer" href={props.html_url} target="_blank">
              <h3>{props.name}</h3>
            </a>

            <Box sx={{ textWrap: "wrap" }}>{props.description}</Box>
          </Box>
        </Container>
      </Item>
    </Grow>
  );
};

export default RepoListItem;
