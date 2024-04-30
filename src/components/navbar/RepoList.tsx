import { useState, useEffect } from "react";
import RepoListItem from "./RepoListItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";

export interface RepoResponse {
  id: string;
  key: string;
  name: string;
  html_url: string;
  description: string;
  language?: string;
}

const RepoList = () => {
  const [arrayItems, setArrayItems] = useState([]);
  useEffect(() => {
    async function awaitRepos() {
      await fetch(`https://api.github.com/users/jsef77/repos`)
        .then((response) => response.json())
        .then((data) => {
          const items = data.map((arraySingleItem: RepoResponse) => {
            return (
              <RepoListItem
                id={arraySingleItem.id}
                key={arraySingleItem.id}
                name={arraySingleItem.name}
                html_url={arraySingleItem.html_url}
                description={arraySingleItem.description}
                language={arraySingleItem.language}
              />
            );
          });
          setArrayItems(items);
        });
    }
    awaitRepos();
  }, []);

  return (
    <>
      <a href={"https://github.com/jsef77"} className="embed-responsive-item">
        <GitHubIcon />
      </a>
      <br />
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {arrayItems}
      </Grid>
    </>
  );
};

export default RepoList;
