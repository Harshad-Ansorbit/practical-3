import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";

export default function tableHeader() {
  return (
    <>
      <div className="flex justify-between flex-wrap p-2 pb-8 ">
        <div className="flex flex-6 text-lg font-semibold">
          <span>Recent Invoice</span>
        </div>
        <div className="flex justify-around text-stone-400">
          <div className="p-1 mr-5 border border-inherit rounded-full">
            <PrintIcon />
          </div>
          <div className="p-1 border border-inherit rounded-full">
            <DownloadIcon />
          </div>
        </div>
      </div>
    </>
  );
}
