import {
  BinIcon,
  CycleIcon,
  Eye2Icon,
  InboxIcon,
  PaperClipIcon,
} from "@/assets/svg";

export default function PurchaseGoodsAndServicesPage() {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="px-8 py-6 flex gap-[80px] flex-col">
      <div className="text-black font-medium text-xl">
        Find all previous uploaded files below. You can download each file to
        view the data entered into the platform. Additionally, you can replace a
        file and delete a file currently being used for emissions. Make sure not
        to add the same file multiple times.
      </div>

      <div className="">
        <div className="font-bold text-[32px] text-black">History</div>
        <table className="w-full text-secondary">
          <tr className="text-lg border-b-2 border-b-primary text-start">
            <th className="py-[18px]  ">
              <input type="checkbox" className="w-4 h-4 accent-primary" />
            </th>
            <th className=" text-start pl-10">File Name</th>
            <th className="text-start">User Name</th>
            <th className="text-start">Calculation Method</th>
            <th className="text-start">Start Date</th>
            <th className="text-start">End Date</th>
            <th className="text-start">Actions</th>
          </tr>
          {data.map((_, index) => {
            return (
              <tr
                key={"row-" + index}
                className={`text-lg border-b border-[#C4C4C4] hover:bg-[#C4C4C4] cursor-pointer ${
                  index % 2 === 0 && "bg-[#F7F7F7] border-b border-[#C4C4C4]"
                }`}
              >
                <th className="py-[34px]">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                </th>
                <td className="pl-10">
                  Purchase And <br /> Goods <br /> Service (Laptop)
                </td>
                <td>Michel Jhony</td>
                <td>Spend- Based Method</td>
                <td>22/05/2024</td>
                <td>22/05/2025</td>
                <td>
                  <div className="w-full h-full flex items-center justify-center gap-4">
                    <PaperClipIcon />
                    <InboxIcon />
                    <BinIcon />
                    <Eye2Icon />
                    <CycleIcon />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
