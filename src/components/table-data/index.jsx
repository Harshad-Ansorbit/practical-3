export default function tableData(prop) {
  let bgClass = "";
  if (prop.status === "Unpaid") {
    bgClass =
      "flex justify-around bg-sky-100 rounded-full text-sky-400 font-extrabold w-24  ";
  } else if (prop.status === "Overdue") {
    bgClass =
      "flex justify-around bg-orange-100 rounded-full text-orange-400 font-extrabold w-24  ";
  } else if (prop.status === "paid") {
    bgClass =
      "flex justify-around bg-violet-100 rounded-full text-violet-400 font-extrabold w-24  ";
  } else if (prop.status === "Draft") {
    bgClass =
      "flex justify-around bg-stone-200 rounded-full text-stone-500  font-extrabold w-24  ";
  }

  return (
    <>
      <tr className="text-left border-b-2">
        <td>
          <div className="flex my-5">
            <div className="shrink-0">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src={prop.source}
                alt="Avtar"
              />
            </div>
            <div className="ml-3">
              <div className="font-bold">
                <span>{prop.name}</span>
              </div>
              <div className="text-stone-400 text-sm">{prop.userId}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{prop.date}</div>
        </td>
        <td>
          <div className="font-bold">{prop.amount}</div>
        </td>
        <td>
          <div className={bgClass}>{prop.status}</div>
        </td>
        <td>...</td>
      </tr>
    </>
  );
}
