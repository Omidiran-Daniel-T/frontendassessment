import React from "react";
import { Chart } from "react-charts";

const OTGraph = () => {
  const data = React.useMemo(
    () => [
      {
        label: "Series 3",
        data: [
          [0, 0],
          [1, 2],
          [2, 2],
          [3, 3],
          [5, 2],
          [6, 3],
          [7, 2],
          [8, 3],
          [9, 4],
          [10, 0.5],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 0],
          [1, 2],
          [2, 3],
          [3, 4],
          [5, 5],
          [6, 4],
          [7, 5],
          [8, 6],
          [9, 5],
          [10, 5],
        ],
      },
      {
        label: "Series 1",
        data: [
          [0, 4],
          [1, 5],
          [2, 6],
          [3, 7],
          [5, 6],
          [6, 5],
          [7, 4],
          [8, 3],
          [9, 2],
          [10, 1],
        ],
      },
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "area",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom", show: false },
      { type: "linear", position: "left", stacked: false, show: false },
    ],
    []
  );

  //   const primaryCursor = React.useMemo(
  //     () => ({
  //       render: (props) => (
  //         <span style={{ fontSize: "1rem" }}>
  //           <span role="img" aria-label="icon">
  //             🕑
  //           </span>{" "}
  //           {(props.formattedValue || "").toString()}
  //         </span>
  //       ),
  //     }),
  //     []
  //   );
  //   const secondaryCursor = React.useMemo(
  //     () => ({
  //       render: (props) => (
  //         <span style={{ fontSize: "1rem" }}>
  //           <span role="img" aria-label="icon">
  //             👍
  //           </span>{" "}
  //           {(props.formattedValue || "").toString()}
  //         </span>
  //       ),
  //     }),
  //     []
  //   );
  const getColor = (series) => {
    if (series === "Series 1") return "blue";
    if (series === "Series 2") return "green";
    if (series === "Series 3") return "red";
  };
  const getSeriesStyle = React.useCallback(
    (series) => ({
      color: getColor(series.originalSeries.label),
    }),
    []
  );
  return (
    <div
      style={{
        width: "500px",
        height: "138px",
        borderBottomLeftRadius: 15,
      }}
    >
      <Chart
        data={data}
        axes={axes}
        series={series}
        className="otg"
        getSeriesStyle={getSeriesStyle}
        // primaryCursor={primaryCursor}
        // secondaryCursor={secondaryCursor}
      />
    </div>
  );
};

export default OTGraph;
