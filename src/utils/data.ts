import data from "@/data/data.json";
export const monthlyData = data.reduce((acc: any, current: any) => {
  if (!acc[current.Month]) {
    acc[current.Month] = { x: current.Month, y: current.EmissionValue };
  } else {
    acc[current.Month].y += current.EmissionValue;
  }
  return acc;
}, {});

export const quarterlyData = data.reduce((acc: any, current: any) => {
  if (!acc[current.Quarter]) {
    acc[current.Quarter] = { x: current.Quarter, y: current.EmissionValue };
  } else {
    acc[current.Quarter].y += current.EmissionValue;
  }
  return acc;
}, {});

export const yearlyData = data.reduce((acc: any, current: any) => {
  if (!acc[current.year]) {
    acc[current.year] = { x: current.year, y: current.EmissionValue };
  } else {
    acc[current.year].y += current.EmissionValue;
  }
  return acc;
}, {});
