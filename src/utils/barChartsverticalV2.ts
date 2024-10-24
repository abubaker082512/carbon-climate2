import Alldata from "@/data/data.json";
import { seriesData } from "@/utils/BarChart";
import { categoriesLabels } from "@/utils/barChartsvertical";
// const categories: any = {};
// data.forEach((data) => {
//   if (!categories[data.Category]) {
//     categories[data.Category] = { sum: 0, count: 0 };
//   }
//   categories[data.Category].sum += data.EmissionValue;
//   categories[data.Category].count++;
// });

// const uniqueCategories = Object.keys(categories);

// const emissionValuesByCategory = uniqueCategories.map((category) => {
//   const averageEmissionValue =
//     categories[category].sum / categories[category].count;

//   return {
//     Category: category,
//     AverageEmissionValue: averageEmissionValue,
//   };
// });

// export const categoriesLabels = emissionValuesByCategory.map(
//   (item) => item.Category
// );
// export const seriesData = emissionValuesByCategory.map(
//   (item) => item.AverageEmissionValue
// );

export const getCategoriesAndSeriesByScope = (
  scope: "all" | "scope 1" | "scope 2" | "scope 3"
) => {
  const data = Alldata.filter((item) => {
    if (scope === "all") {
      return item;
    }
    if (item.scope === scope) {
      return item;
    }
  });

  const categories: any = {};
  data.forEach((data) => {
    if (!categories[data.Category]) {
      categories[data.Category] = { sum: 0, count: 0 };
    }
    categories[data.Category].sum += data.EmissionValue;
    categories[data.Category].count++;
  });

  const uniqueCategories = Object.keys(categories);

  const emissionValuesByCategory = uniqueCategories.map((category) => {
    const averageEmissionValue =
      categories[category].sum / categories[category].count;

    return {
      Category: category,
      AverageEmissionValue: averageEmissionValue,
    };
  });

  const categoriesLabels = emissionValuesByCategory.map(
    (item) => item.Category
  );
  const seriesData = emissionValuesByCategory.map(
    (item) => item.AverageEmissionValue
  );

  return { categories: categoriesLabels, seriesData: seriesData };
};

export const getCategoriesAndSeriesByYear = () => {
  function getEmissionSumByYear(jsonData: any) {
    const emissionSumByYear: any = {};

    jsonData.forEach((data: any) => {
      const year: any = data.year;
      const emissionValue: any = data.EmissionValue;

      if (emissionSumByYear[year]) {
        emissionSumByYear[year] += emissionValue;
      } else {
        emissionSumByYear[year] = emissionValue;
      }
    });

    return Object.keys(emissionSumByYear).map((year) => ({
      year: parseInt(year),
      sum: emissionSumByYear[year],
    }));
  }

  const filteredData = getEmissionSumByYear(Alldata);
  const categories = filteredData.map((item) => {
    return item.year.toString();
  });
  const series = filteredData.map((item) => {
    return Number(item.sum);
  });

  return { categories, series };
};

export const getCategoriesAndSeriesByMonth = () => {
  function getEmissionSumByMonth(jsonData: any) {
    const emissionSumByMonth: any = {};

    jsonData.forEach((data: any) => {
      const month: any = data.Month;
      const emissionValue: any = data.EmissionValue;

      if (emissionSumByMonth[month]) {
        emissionSumByMonth[month] += emissionValue;
      } else {
        emissionSumByMonth[month] = emissionValue;
      }
    });

    return Object.keys(emissionSumByMonth).map((month) => ({
      month: parseInt(month),
      sum: emissionSumByMonth[month],
    }));
  }

  const filteredData = getEmissionSumByMonth(Alldata);
  const categories = filteredData.map((item) => {
    return item.month.toString();
  });
  const series = filteredData.map((item) => {
    return Number(item.sum);
  });

  return { categories, series };
};

export const getCategoriesAndSeriesByQuater = () => {
  function getEmissionSumByQuater(jsonData: any) {
    const emissionSumByQuater: any = {};

    jsonData.forEach((data: any) => {
      const quarter: any = data.Quarter;
      const emissionValue: any = data.EmissionValue;

      if (emissionSumByQuater[quarter]) {
        emissionSumByQuater[quarter] += emissionValue;
      } else {
        emissionSumByQuater[quarter] = emissionValue;
      }
    });

    return Object.keys(emissionSumByQuater).map((quarter) => ({
      quarter: quarter,
      sum: emissionSumByQuater[quarter],
    }));
  }

  const filteredData = getEmissionSumByQuater(Alldata);
  const categories = filteredData.map((item) => {
    return item.quarter.toString();
  });
  const series = filteredData.map((item) => {
    return Number(item.sum);
  });

  return { categories, series };
};

export const filteredByInterval = (
  filter: "all" | "year" | "month" | "quarter"
) => {
  if (filter === "year") {
    return getCategoriesAndSeriesByYear();
  }
  if (filter === "month") {
    return getCategoriesAndSeriesByMonth();
  }
  if (filter === "quarter") {
    return getCategoriesAndSeriesByQuater();
  }

  return {
    categories: categoriesLabels,
    series: seriesData,
  };
};
