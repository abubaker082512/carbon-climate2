import React from "react";

const MainDashboardTable = () => {
  const data = [
    {
      point: "3/5",
      name: "Kick-Off Meetings With Carbon Track Team	",
      stage: "Initiate",
      assignedTo: "Anna Samridhi",
    },
    {
      point: "2/17",
      name: "Input Company-Wide Emissions Data	",
      stage: "Data",
      assignedTo: "Sam Hampton",
    },
    {
      point: "10/21",
      name: "Initiate & Complete Employee Trainings",
      stage: "Learn",
      assignedTo: "Anna Samridhi",
    },
    {
      point: "5/5",
      name: "Validate Financial Data",
      stage: "Actions",
      assignedTo: "Alex Stockholm",
    },
    {
      point: "1/5",
      name: "Validate Spend-Based Activity",
      stage: "Actions",
      assignedTo: "Michael Myles",
    },
  ];
  return (
    <div className=" shadow-xl my-5 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="h-12">
            <th className="bg-[#BAE2D7] text-[#08120F]  rounded-tl-xl text-start pl-5">
              Points
            </th>
            <th className="bg-[#BAE2D7] text-[#08120F] text-start">Name</th>{" "}
            {/* Centered Name */}
            <th className="bg-[#BAE2D7] text-[#08120F] text-center">
              Assigned To
            </th>{" "}
            {/* Centered Stage */}
            <th className="bg-[#BAE2D7] text-[#08120F] text-center">
              Stage
            </th>{" "}
            {/* Centered Category */}
            <th className="bg-[#BAE2D7] text-[#08120F] text-center rounded-tr-xl">
              Detail
            </th>{" "}
            {/* Centered Detail */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                className={` hover:bg-[#BAE2D7] ${
                  index === 0 && "hover:border-t border-t-gray"
                } cursor-pointer ${
                  index % 2 !== 0 ? "bg-[#EEF8F5]" : "bg-white"
                }`}
                key={"row-" + index}
              >
                <td className="text-start py-4 pl-3">
                  <p className="bg-[rgba(236, 66, 77, 0.2)] text-[#FB3B3A] px-2 py-1 rounded-sm">
                    {item.point}
                  </p>
                </td>
                <td className="text-start py-4">{item.name}</td>
                <td className="text-center py-4">
                  <button className="bg-[#94B298]  py-1 text-[#08120F] rounded-full px-6">
                    {item.assignedTo}
                  </button>
                </td>
                <td className="text-center py-4">{item.stage}</td>
                <td className="text-center py-4">
                  <button className="border border-[#50B69A]  px-2 py-1 text-[#50B69A] rounded-md">
                    Learn More
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainDashboardTable;
