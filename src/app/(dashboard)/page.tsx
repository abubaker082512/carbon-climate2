import DashboardCard from "@/components/DashboardCard";
import EvulationChart from "@/components/Charts/Evulation";
import PiChart from "@/components/Charts/PiChart";
import MainDashboardTable from "@/components/MainDashboardTable";
import PiChartChartJs from "@/components/Charts/PiChartChartJs";
import EvulationChartHome from "@/components/Charts/EvulationHome";

const list = [
  {
    title: "Today Emissions",
    value: "27 tCO2e",
    percent: +12,
    day: "vc yesterday",
    width: "1/4",
    data: [30, 40, 35, 44, 49, 43],
  },
  {
    title: "Emissions Avoided",
    value: "04 tCO2e",
    percent: +23,
    day: "vc yesterday",
    width: "1/4",
    data: [40, 35, 30, 45, 39, 50],
  },
  {
    title: "Emissions Per Emp",
    value: "1.1 tCO2e",
    percent: -12,
    day: "vc yesterday",
    width: "1/4",
    data: [20, 25, 17, 6, 33, 29],
  },
  {
    title: "Total Emissions",
    value: "521 tCO2e",
    percent: +5,
    day: "vc last year",
    width: "1/4",
    data: [55, 150, 43, 97, 47, 92],
  },
];

export default function Home() {
  return (
    <div className=" mx-5 my-5">
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols gap-4">
        {list.map((item, index) => {
          return <DashboardCard {...item} key={"index" + index} />;
        })}
      </div>

      <div className=" grid lg:grid-cols-2  grid-cols">
        <div className=" py-5 px-2 w-full">
          <EvulationChartHome
            data={{ category: [], series: [] }}
            scope={"all"}
            time={"all"}
          />
        </div>
        <div className=" py-5 px-2 w-full">
          <PiChartChartJs />
        </div>
      </div>
      <div className="">
        <div className=" flex justify-between">
          <div>Decarbonize Now</div>
          <div className="underline">My Score</div>
        </div>
        <MainDashboardTable />
      </div>
    </div>
  );
}
