import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SettingsIcon from "@mui/icons-material/Settings";

export default function navbar() {
  return (
    <>
      <div className="flex flex-row justify-between flex-wrap">
        <div className="flex justify-between flex-wrap">
          <span className="text-violet-700 font-semibold">
            <i className="mr-4">
              <ListAltIcon />
            </i>
            I-Flow
          </span>
        </div>
        <div className="flex flex-row justify-between ">
          <span className="mr-14 text-violet-700">
            <i className="mr-4">
              <AssessmentIcon />
            </i>
            Dashboard
          </span>
          <span className="mr-14 text-stone-400">
            <i className="mr-4">
              <ListAltIcon />
            </i>
            Invoice
          </span>
          <span className="mr-14 text-stone-400">
            <i className="mr-4">
              <SupervisorAccountIcon />
            </i>
            Client
          </span>
          <span className="mr-14 text-stone-400">
            <i className="mr-4">
              <SettingsIcon />
            </i>
            Setting
          </span>
        </div>
        <div className="flex">
          <span className="mr-8 text-stone-400">
            <NotificationsNoneIcon />
          </span>
          <span className="">
            <div class="shrink-0">
              <img
                class="h-10 w-10 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="Avtar"
              />
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
