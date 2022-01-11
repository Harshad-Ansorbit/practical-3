export default function card() {
  return (
    <>
      <div className="flex flex-3 justify-around flex-wrap pt-12 h-full">
        <div className="flex flex-col flex-wrap bg-violet-700 max-h-full hover:max-h-screen p-8 w-full shadow-2xl rounded-3xl h-96">
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

          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
