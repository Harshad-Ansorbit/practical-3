import Homestyle from "./style.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
export default function () {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between  h-14">
          <div className="align-middle">
            <span>
              <i></i>I-flow
            </span>
          </div>
          <div className="">
            <span>Dashboard</span>
            <span>Invoice</span>
            <span>Client</span>
            <span>Setting</span>
          </div>
          <div className="">
            <span>
              <NotificationsIcon />
            </span>
            <span>
              <PersonIcon />
            </span>
          </div>
        </div>
        <div className={Homestyle.container}>
          <h1>content</h1>
        </div>
      </div>
    </>
  );
}
