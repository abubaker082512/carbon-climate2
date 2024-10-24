import data from "@/data/data.json";
const monthlyData = data.reduce((acc: any, current: any) => {
  if (!acc[current.Month]) {
    acc[current.Month] = { label: current.Month, value: current.EmissionValue };
  } else {
    acc[current.Month].value += current.EmissionValue;
  }
  return acc;
}, {});

const yearlyData = data.reduce((acc: any, current: any) => {
  if (!acc[current.year]) {
    acc[current.year] = { label: current.year, value: current.EmissionValue };
  } else {
    acc[current.year].value += current.EmissionValue;
  }
  return acc;
}, {});

const quarterlyData = data.reduce((acc: any, current: any) => {
  if (!acc[current.Quarter]) {
    acc[current.Quarter] = {
      label: current.Quarter,
      value: current.EmissionValue,
    };
  } else {
    acc[current.Quarter].value += current.EmissionValue;
  }
  return acc;
}, {});

const monthlySeriesData = Object.values(monthlyData).map(
  (item: any) => item.value
);

const monthlyLabels = Object.values(monthlyData).map((item: any) => item.label);

export const yearlySeriesData = Object.values(yearlyData).map(
  (item: any) => item.value
);
export const yearlyLabels = Object.values(yearlyData).map(
  (item: any) => item.label
);

const quarterlySeriesData = Object.values(quarterlyData).map(
  (item: any) => item.value
);
const quarterlyLabels = Object.values(quarterlyData).map(
  (item: any) => item.label
);

// Monthly data
export const monthlyChartData = {
  series: monthlySeriesData,
  options: {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: monthlyLabels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      show: true,
      offsetY: 0,
      height: 230,
    },
  },
};

// Quaterly data
const quaterlyChartData = {
  series: quarterlySeriesData,
  options: {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: quarterlyLabels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      show: true,
      offsetY: 0,
      height: 230,
    },
  },
};

// Yearly Data
export const yearlyChartData = {
  series: yearlySeriesData,
  options: {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: yearlyLabels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      show: true,
      offsetY: 0,
      height: 230,
    },
  },
};

export const chartData: any = {
  //   series: [44, 55, 13, 33],
  series: yearlySeriesData,
  options: {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: yearlyLabels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      show: false,
      offsetY: 0,
      height: 230,
    },
  },
};

export const getPiChartData = (filter: "month" | "quarter" | "year") => {
  if (filter === "month") {
    chartData.series = monthlySeriesData;
    chartData.options = monthlyLabels;
  }
  if (filter === "quarter") {
    chartData.series = quarterlySeriesData;
    chartData.options = quarterlyLabels;
  }

  chartData.series = yearlySeriesData;
  chartData.options.labels = yearlyLabels;
  return chartData;
};
