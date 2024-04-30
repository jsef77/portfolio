import { BarChart, BarSeriesType } from "@mui/x-charts";
import { fetchRepoLangs } from "../../utils/GithubFetch";
import { useEffect } from "react";

interface Props {
  repoName: string;
}

const RepoListItemLanguages = ({ repoName }: Props) => {
  useEffect(() => {
    const languageArray: LanguageSeriesType[] = [];

    function mapSeries(data: Array<Language>) {
      // DATA IS AN OBJECT. OBJECT CANNOT BE MAPPED
      console.log(data);
      if (data != undefined) {
        data.map((language: Language) => {
          for (const [name, value] of Object.entries(language)) {
            const l: LanguageSeriesType = {
              dataKey: `${name}`,
              label: `${name}`,
              type: "bar",
              stack: "A",
            };
            console.log(value);
            languageArray.push(l);
          }
        });
        return languageArray;
      } else {
        throw new Error("apiData is undefined!");
      }
    }

    async function awaitAPI() {
      await fetchRepoLangs(repoName, true).then((apiRes) => {
        return (
          <div>
            <BarChart
              dataset={apiRes}
              series={mapSeries(apiRes)}
              width={600}
              height={500}
              layout="horizontal"
              axisHighlight={{ x: "none", y: "none" }}
              tooltip={{ trigger: "item" }}
              bottomAxis={null}
              leftAxis={null}
            />
            <h1>ERROR</h1>
          </div>
        );
        // setApiData(apiRes);
      });
      // .then((onSuccess) => {
      //   return (
      //     <div>
      //       <BarChart
      //         dataset={apiData}
      //         series={mapSeries(apiData)}
      //         width={600}
      //         height={500}
      //         layout="horizontal"
      //         axisHighlight={{ x: "none", y: "none" }}
      //         tooltip={{ trigger: "item" }}
      //         bottomAxis={null}
      //         leftAxis={null}
      //       />
      //     </div>
      //   );
      // });
    }
    awaitAPI();
  }, [repoName]);

  type Language = {
    [name: string]: number;
  };

  interface LanguageSeriesType extends BarSeriesType {
    valueFormatter?: (value: number | null) => `${typeof value}%`;
  }

  // return (
  //   <div>
  //     <BarChart
  //       dataset={apiData}
  //       series={mapSeries(apiData)}
  //       width={600}
  //       height={500}
  //       layout="horizontal"
  //       axisHighlight={{ x: "none", y: "none" }}
  //       tooltip={{ trigger: "item" }}
  //       bottomAxis={null}
  //       leftAxis={null}
  //     />
  //   </div>
  // );
};

export default RepoListItemLanguages;
