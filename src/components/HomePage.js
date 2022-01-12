import Navbar from "./navbar";
import Card from "./card";
import ContentHeader from "./contentHeader";
import Table from "./table";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col flex-wrap justify-between font-sans px-14 pb-14 pt-8">
        <Navbar />
        <div className="flex">
          <Card />
          <div className="flex flex-9  flex-col p-24 pt-12">
            <ContentHeader />
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
