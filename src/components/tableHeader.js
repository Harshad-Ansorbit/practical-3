import Printer from "../icons/printer";
import Download2 from "../icons/download/download2";

export default function tableHeader() {
  return (
    <>
      <div className="flex justify-between flex-wrap p-2 pb-8 ">
        <div className="flex flex-6 text-lg font-semibold">
          <span>Recent Invoice</span>
        </div>
        <div className="flex justify-around text-stone-400">
          <div className="p-1 mr-5 border border-inherit rounded-full hover:text-stone-600">
            <Printer className="w-6 h-6 fill-current" />
          </div>
          <div className="p-1 border border-inherit rounded-full hover:text-stone-600">
            <Download2 className="w-6 h-6 p-1  fill-current" />
          </div>
        </div>
      </div>
    </>
  );
}
