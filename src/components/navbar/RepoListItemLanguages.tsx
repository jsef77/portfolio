import { BarChart, BarSeriesType } from "@mui/x-charts";
import { fetchRepoLangs } from "../../utils/GithubFetch";
import { useEffect, useState } from "react";

interface Props {
  repoName: string;
}

const RepoListItemLanguages = ({ repoName }: Props) => {
  const [barChart, setBarChart] = useState(<>Error</>);
  useEffect(() => {
    const languageSeries: LanguageSeriesType[] = [];

    function mapSeries(data: Array<Language>) {
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
            languageSeries.push(l);
          }
        });
        console.log(languageSeries);
        console.log(data);

        return languageSeries;
      } else {
        throw new Error("apiData is undefined!");
      }
    }

    function mapDataSet(data: Array<Language>) {
      const dataSet: Array<Object> = [];
      const dataSubSet = {};

      data.map((l) => {
        let x = Object.keys(l)[0];
        dataSubSet[x] = l[x];
      });

      return data;
    }

    async function awaitAPI() {
      await fetchRepoLangs(repoName, true)
        .then((apiRes) => {
          return (
            <div>
              <BarChart
                dataset={mapDataSet(apiRes)}
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
        })
        .then((chart) => setBarChart(chart));
    }
    awaitAPI();
  }, [repoName]);

  type Language = {
    [name: string]: number;
  };

  interface LanguageSeriesType extends BarSeriesType {
    valueFormatter?: (value: number | null) => `${typeof value}%`;
  }

  return <div>{barChart}</div>;
};

export default RepoListItemLanguages;
