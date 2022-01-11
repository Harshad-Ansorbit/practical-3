import TableHeader from "./tableHeader";
import TableData from "./tableData";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
                source="https://cdn3.vectorstock.com/i/thumb-large/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
              />

              <TableData
                name="Homura Yunosuke"
                userId="#2416"
                date="08/21/2019"
                amount="$11.67"
                status="Overdue"
                source="https://cdn2.vectorstock.com/i/thumb-large/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg"
              />

              <TableData
                name="Kita Chihoko"
                userId="#6921"
                date="08/21/2019"
                amount="$273.88"
                status="paid"
                source="https://cdn5.vectorstock.com/i/thumb-large/50/89/user-profile-or-my-account-avatar-login-icon-vector-31775089.jpg"
              />

              <TableData
                name="Mbe Tshinguta"
                userId="#4093"
                date="08/21/2019"
                amount="$244.55"
                status="Draft"
                source="https://cdn1.vectorstock.com/i/thumb-large/22/10/businessman-glyph-icon-vector-24722210.jpg"
              />
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  <div className="text-slate-400 mt-10">
                    <span>Showing 5 out of 120</span>
                  </div>
                </td>
                <td align="right" colSpan="2">
                  <div className="flex mt-10">
                    <div className="text-violet-700 font-semibold ">
                      See all
                    </div>
                    <div>
                      <ArrowForwardIcon />
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
