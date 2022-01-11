import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewListIcon from "@mui/icons-material/ViewList";
import BallotIcon from "@mui/icons-material/Ballot";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import ActionCard from "./actionCard";

export default function contentHeader() {
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <div className="flex justify-between">
          <div className="flex flex-wrap font-bold  text-3xl mb-20">
            <span>Dashboard</span>
          </div>
          <div className="">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search here"
              className="p-3 rounded-3xl border focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-16">
          <ActionCard
            icon={<DashboardIcon />}
            clName="flex bg-violet-400 py-3 px-3 shadow-2xl rounded-xl text-white"
            name="Paid"
            value="64"
          />
          <ActionCard
            icon={<ViewListIcon />}
            clName="flex bg-sky-300 py-3 px-3 shadow-2xl rounded-xl text-white"
            name="Unpaid"
            value="49"
          />
          <ActionCard
            icon={<BallotIcon />}
            clName="flex bg-orange-400 py-3 px-3 shadow-2xl rounded-xl text-white"
            name="Overdue"
            value="32"
          />
          <ActionCard
            icon={<FileDownloadIcon />}
            clName="flex bg-stone-200 py-3 px-3 shadow-2xl rounded-xl text-white"
            name="Draft"
            value="16"
          />
        </div>
      </div>
    </>
  );
}
