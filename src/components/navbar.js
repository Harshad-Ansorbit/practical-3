import Dashboard from "../icons/Dashboard";
import Billing from "../icons/billing";
import ListView from "../icons/listview";
import Clients from "../icons/clients";
import Settings from "../icons/settings";
import Bell from "../icons/bell";
import Nav from "./nav";

export default function navbar() {
  return (
    <>
      <div className="flex flex-row justify-between flex-wrap">
        <div className="flex justify-between flex-wrap font-semibold">
          <Nav
            clname="flex mr-14 text-violet-700 items-center cursor-pointer"
            icon={<Billing className="fill-current m-6 h-6 mr-2" />}
            text="I-Flow"
          />
        </div>
        <div className="flex flex-row justify-between ">
          <Nav
            clname="flex mr-14 text-violet-700 items-center cursor-pointer"
            icon={<Dashboard className="fill-current mr-4" />}
            text="Dashboard"
          />

          <Nav
            clname="flex mr-14 text-stone-400 items-center cursor-pointer hover:text-stone-700"
            icon={<ListView className="fill-current mr-4 m-6 h-6 " />}
            text="Invoice"
          />

          <Nav
            clname="flex mr-14 text-stone-400 items-center cursor-pointer hover:text-stone-700"
            icon={<Clients className="fill-current mr-4 m-6 h-6" />}
            text="Client"
          />

          <Nav
            clname="flex mr-14 text-stone-400 items-center cursor-pointer hover:text-stone-700"
            icon={<Settings className="fill-current mr-4 m-6 h-6" />}
            text="Setting"
          />
        </div>
        <div className="flex items-center ">
          <Nav
            clname="flex mr-14 text-stone-400 cursor-pointer hover:text-stone-700"
            icon={<Bell className="fill-current z-0 mr-4 m-7 h-7" />}
          />
          <div>
            <img
              className="h-10 w-10 object-cover rounded-full cursor-pointer"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Avtar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
