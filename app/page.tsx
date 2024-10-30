import CarouselDates from "@/components/containers/CarouselDates";
import Filter from "@/components/containers/Filter";
import FlightCard from "@/components/containers/FlightCard";
import List from "@/components/containers/List";
import SearchBar from "@/components/containers/SearchBar";
import Sort from "@/components/containers/Sort";

export default function Home() {
  return (
    <div className="flex flex-col h-auto w-full  bg-gray">
      <SearchBar />
      <div className="w-full h-full bg-gray-100 ">
        <div className="container flex flex-col xl:flex-row mx-auto gap-4 w-full h-full py-4 px-2 xl:px-0">
          <aside className="flex flex-col gap-4 w-full xl:max-w-[300px]">
            <FlightCard/>
            <Sort />
            <Filter />
          </aside>
          <main className="w-full flex flex-col gap-4">
            <CarouselDates />
            <List />
          </main>
        </div>
      </div>
    </div>
  );
}
