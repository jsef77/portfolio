// interface RepoResponse {
//   id: string;
//   key: string;
//   name: string;
//   html_url: string;
//   description: string;
//   language?: string;
// }

// type Language<T = number> = {
//     [key: string]: T;
//   };

export async function fetchRepoLangs(repoName: string) {
  const res = await fetch(
    `https://api.github.com/repos/jsef77/${repoName}/languages`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  return res;
}
