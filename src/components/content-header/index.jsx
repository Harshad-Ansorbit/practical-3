import Square from "../../icons/square";
import List from "../../icons/list";
import ActionCard from "../action-card";
import List2 from "../../icons/list/list2";
import Download from "../../icons/download";
import Search from "../../icons/search";

export default function contentHeader() {
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <div className="flex justify-between mb-16">
          <div className="flex flex-wrap font-bold  text-3xl items-center">
            <span>Dashboard</span>
          </div>
          <div className="flex items-center text-gray-400 pl-4 h-12 relative">
            <Search className="h-5 w-5 fill-current mr-3 absolute left-7 top-3.5 bottom-0 " />

            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search anything here"
              className="focus:outline-none border-gray-300 pl-10 focus:ring focus:ring-violet-200 p-3 border rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-16">
          <ActionCard
            icon={<Square className="flex w-7 h-7 fill-current" />}
            clName="flex bg-violet-400 py-3 px-3 shadow-2xl rounded-xl text-white"
            name="Paid"
            value="64"
          />
          <ActionCard
            icon={<List className="flex w-7 h-7 fill-current" />}
            clName="flex bg-sky-300 py-3 px-3 shadow-2xl rounded-xl text-white"
            name="Unpaid"
            value="49"
          />
          <ActionCard
            icon={<List2 className="flex w-7 h-7 fill-current" />}
            clName="flex bg-orange-400 py-3 px-3 shadow-2xl rounded-xl text-white"
            name="Overdue"
            value="32"
          />
          <ActionCard
            icon={<Download className="flex w-7 h-6 fill-current" />}
            clName="flex bg-stone-200 py-3 px-3 shadow-2xl rounded-xl text-white"
            name="Draft"
            value="16"
          />
        </div>
      </div>
    </>
  );
}
