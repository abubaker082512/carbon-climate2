const all = {
  yearly: { "2022": 1285766, "2023": 1345215, "2024": 1386690 },
  monthly: {
    January: 311118,
    February: 315333,
    March: 324435,
    April: 332139,
    May: 278999,
    June: 353056,
    July: 308454,
    August: 358827,
    September: 346575,
    October: 325978,
    November: 320712,
    December: 328707,
  },
  quarter: {
    "2024-Q1": 328410,
    "2024-Q2": 348817,
    "2024-Q3": 370569,
    "2024-Q4": 338894,
    "2023-Q1": 319975,
    "2023-Q2": 339344,
    "2023-Q3": 361254,
    "2023-Q4": 324642,
    "2022-Q1": 302501,
    "2022-Q2": 326432,
    "2022-Q3": 344972,
    "2022-Q4": 311861,
  },
};

const scope1 = {
  yearly: { "2022": 178100, "2023": 199890, "2024": 197246 },
  monthly: {
    January: 38943,
    February: 38413,
    March: 40538,
    April: 46594,
    May: 5620,
    June: 52006,
    July: 5980,
    August: 56809,
    September: 53278,
    October: 47077,
    November: 45709,
    December: 46861,
  },
  quarter: {
    "2024-Q1": 40254,
    "2024-Q2": 50039,
    "2024-Q3": 58656,
    "2024-Q4": 48297,
    "2023-Q1": 40950,
    "2023-Q2": 51170,
    "2023-Q3": 58810,
    "2023-Q4": 48960,
    "2022-Q1": 36690,
    "2022-Q2": 45310,
    "2022-Q3": 53710,
    "2022-Q4": 42390,
  },
};

const scope2 = {
  yearly: { "2022": 287400, "2023": 274100, "2024": 278100 },
  monthly: {
    January: 59700,
    February: 58500,
    March: 61200,
    April: 63800,
    May: 68800,
    June: 77200,
    July: 80100,
    August: 78600,
    September: 74400,
    October: 76400,
    November: 72100,
    December: 68800,
  },
  quarter: {
    "2022-Q4": 83200,
    "2024-Q1": 61000,
    "2024-Q2": 71000,
    "2024-Q3": 78600,
    "2024-Q4": 67500,
    "2023-Q1": 59800,
    "2023-Q2": 70000,
    "2023-Q3": 77700,
    "2023-Q4": 66600,
    "2022-Q1": 58600,
    "2022-Q2": 68800,
    "2022-Q3": 76800,
  },
};

const scope3 = {
  yearly: { "2022": 614466, "2023": 642625, "2024": 675044 },
  monthly: {
    January: 159475,
    February: 164320,
    March: 167397,
    April: 169545,
    May: 150679,
    June: 159250,
    July: 150674,
    August: 155718,
    September: 159697,
    October: 153601,
    November: 156603,
    December: 169246,
  },
  quarter: {
    "2024-Q1": 171456,
    "2024-Q2": 169078,
    "2024-Q3": 165313,
    "2024-Q4": 169197,
    "2023-Q1": 165125,
    "2023-Q2": 161174,
    "2023-Q3": 159144,
    "2023-Q4": 157182,
    "2022-Q1": 154611,
    "2022-Q2": 157322,
    "2022-Q3": 149462,
    "2022-Q4": 153071,
  },
};

export const getFormattedData = (
  scope: "all" | "scope 1" | "scope 2" | "scope 3",
  interval: "all" | "month" | "quarter" | "year"
) => {
  if (scope === "scope 1") {
    if (interval === "month") {
      return {
        series: Object.values(scope1.monthly),
        category: Object.keys(scope1.monthly),
      };
    }
    if (interval === "year") {
      return {
        series: Object.values(scope1.yearly),
        category: Object.keys(scope1.yearly),
      };
    }
    if (interval === "quarter") {
      return {
        series: Object.values(scope1.quarter),
        category: Object.keys(scope1.quarter),
      };
    }
  }

  if (scope === "scope 2") {
    if (interval === "month") {
      return {
        series: Object.values(scope2.monthly),
        category: Object.keys(scope2.monthly),
      };
    }
    if (interval === "year") {
      return {
        series: Object.values(scope2.yearly),
        category: Object.keys(scope2.yearly),
      };
    }
    if (interval === "quarter") {
      return {
        series: Object.values(scope2.quarter),
        category: Object.keys(scope2.quarter),
      };
    }
  }

  if (scope === "scope 3") {
    if (interval === "month") {
      return {
        series: Object.values(scope3.monthly),
        category: Object.keys(scope3.monthly),
      };
    }
    if (interval === "year") {
      return {
        series: Object.values(scope3.yearly),
        category: Object.keys(scope3.yearly),
      };
    }
    if (interval === "quarter") {
      return {
        series: Object.values(scope3.quarter),
        category: Object.keys(scope3.quarter),
      };
    }
  }

  if (scope === "all") {
    if (interval === "month") {
      return {
        series: Object.values(scope3.monthly),
        category: Object.keys(scope3.monthly),
      };
    }
    if (interval === "year") {
      return {
        series: Object.values(scope3.yearly),
        category: Object.keys(scope3.yearly),
      };
    }
    if (interval === "quarter") {
      return {
        series: Object.values(scope3.quarter),
        category: Object.keys(scope3.quarter),
      };
    }
  }

  return {
    series: Object.values(all.quarter),
    category: Object.keys(all.quarter),
  };
};
