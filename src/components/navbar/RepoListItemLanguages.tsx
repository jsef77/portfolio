import { BarChart } from "@mui/x-charts";

const RepoListItemLanguages = () => {
  const valueFormatter = (value: number | null) => `${value}%`;

  const dataset = [
    {
      JavaScript: 70,
      "C#": 30,
    },
  ];

  return (
    <>
      <BarChart
        dataset={dataset}
        series={[
          {
            dataKey: "JavaScript",
            label: "JavaScript",
            valueFormatter,
            stack: "A",
          },
          { dataKey: "C#", label: "C#", valueFormatter, stack: "A" },
        ]}
        width={600}
        height={350}
        layout="horizontal"
        axisHighlight={{ x: "none", y: "none" }}
        tooltip={{ trigger: "item" }}
        bottomAxis={null}
        leftAxis={null}
      />
    </>
  );
};

export default RepoListItemLanguages;
