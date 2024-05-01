import { AllSeriesType, BarChart, ChartContainer } from "@mui/x-charts";
import { fetchRepoLangs } from "../../utils/GithubFetch";
import { useEffect, useState } from "react";

interface Props {
  repoName: string;
  chartHeight: string;
  chartWidth: string;
}

const RepoListItemLanguages = ({
  repoName,
  chartHeight,
  chartWidth,
}: Props) => {
  const [barChart, setBarChart] = useState(<>Error</>);
  useEffect(() => {
    function mapSeries(data: object) {
      const series = [];

      for (const [key, val] of Object.entries(data)) {
        series.push({
          type: "bar",
          data: [val],
          label: key as string,
          stack: "A",
        });
      }

      return series;
    }

    function plotBarGraph(data: object[]) {
      return (
        <ChartContainer
          height={200}
          width={200}
          series={data as AllSeriesType[]}
        >
          <BarChart
            series={data} // [{dataKey: "CSS", label: "CSS", stack: "A"}]
            layout="horizontal"
            tooltip={{ trigger: "item" }}
            bottomAxis={null}
            leftAxis={null}
            slotProps={{ legend: { hidden: true }, bar: {} }}
          />
        </ChartContainer>
      );
    }

    async function awaitAPI() {
      await fetchRepoLangs(repoName)
        .then((apiRes) => mapSeries(apiRes))
        .then((series) => plotBarGraph(series))
        .then((graph) => setBarChart(graph));
    }
    awaitAPI();
  }, [repoName, chartHeight, chartWidth]);

  return <div>{barChart}</div>;
};

export default RepoListItemLanguages;
