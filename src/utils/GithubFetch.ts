// interface RepoResponse {
//   id: string;
//   key: string;
//   name: string;
//   html_url: string;
//   description: string;
//   language?: string;
// }

import { Language } from "@mui/icons-material";

export type Language = {
  [name: string]: number;
};

export async function fetchRepoLangs(
  repoName: string,
  asArray: boolean = false
) {
  const res = await fetch(
    `https://api.github.com/repos/jsef77/${repoName}/languages`
  )
    .then((response) => response.json())
    .then((data) => {
      if (!asArray) {
        return data;
      } else {
        const jsonArray = [];
        for (const lang in data) {
          const l: Language = {
            [lang]: data[lang],
          };
          jsonArray.push(l);
        }
        return jsonArray;
      }
    });
  return res;
}
