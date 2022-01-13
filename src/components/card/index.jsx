import SideArrow from "../../icons/SideArrow";

export default function card() {
  return (
    <>
      <div className="hidden  2xl:flex flex-3 justify-around flex-wrap pt-12 h-full">
        <div className="flex flex-col flex-wrap bg-violet-700 max-h-full p-8 w-full shadow-2xl rounded-3xl">
          <div className="flex justify-between flex-wrap px-5 py-3">
            <div>
              <span className=" text-stone-50 font-bold text-2xl">
                Create new <br />
                Invoice
              </span>
            </div>
            <div>
              <button class="rounded-full bg-white py-4 px-4 text-violet-700 font-extrabold">
                Get Started
              </button>
            </div>
          </div>
          <div className="border-b pb-10"></div>

          <div className=" flex flex-col text-white mt-6">
            <div className="flex flex-col ">
              <div className="text-sm text-stone-300">jan-'20</div>
              <div className="font-bold text-lg">Client of the month</div>
            </div>
            <div className="flex mt-4 justify-between bg-violet-500 rounded-full py-5 px-5  items-center">
              <div className="flex flex-1">
                <img
                  className="h-14 w-14 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                  alt="Avtar"
                />
              </div>
              <div className="flex flex-col flex-6 ">
                <div className="font-bold text-xl mb-2">
                  <span>Margje Jutten ⭐</span>
                </div>
                <div className="flex text-sm text-stone-300">
                  <div>
                    <span>$1464.00</span>
                  </div>
                  <div className="ml-4">63%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b pb-10"></div>

          <div className="flex flex-col mt-5 text-white">
            <div className="flex justify-between">
              <div className="flex flex-col ">
                <div className="text-sm text-stone-300">
                  <span>dec '19 - jan '20</span>
                </div>
                <div className="font-bold text-lg">
                  <span>Earning graph</span>
                </div>
              </div>
              <div>
                <SideArrow className="h-10 w-10 border p-1 fill-current  rounded-full" />
              </div>
            </div>
            <div className="h-60 mt-10">
              <h1>graph</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
