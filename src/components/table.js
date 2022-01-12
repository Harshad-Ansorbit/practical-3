import TableHeader from "./tableHeader";
import TableData from "./tableData";
import SideArrow from "../icons/SideArrow";

export default function table() {
  return (
    <>
      <div className="flex flex-col py-5 p-14 shadow-2xl rounded-3xl">
        <TableHeader />
        <div>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-slate-400 uppercase">
                <th>Client</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <TableData
                name="Henny Rechardson"
                userId="#4093"
                date="08/21/2019"
                amount="$244.55"
                status="Unpaid"
                source="https://picsum.photos/200/300"
              />

              <TableData
                name="Homura Yunosuke"
                userId="#2416"
                date="08/21/2019"
                amount="$11.67"
                status="Overdue"
                source="https://picsum.photos/200"
              />

              <TableData
                name="Kita Chihoko"
                userId="#6921"
                date="08/21/2019"
                amount="$273.88"
                status="paid"
                source="https://picsum.photos/seed/picsum/200/300"
              />

              <TableData
                name="Mbe Tshinguta"
                userId="#4093"
                date="08/21/2019"
                amount="$244.55"
                status="Draft"
                source="https://picsum.photos/200/300?grayscale"
              />
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  <div className="text-slate-400 mt-5">
                    <span>Showing 5 out of 120</span>
                  </div>
                </td>
                <td align="right" colSpan="2">
                  <div className="flex mt-5 text-violet-700">
                    <div className=" font-semibold ">See all</div>
                    <div>
                      <SideArrow className="h-6 w-10 ml-2 fill-current" />
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div></div>
      </div>
    </>
  );
}
