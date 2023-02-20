import Card from "./Card";
import {localData} from "../../data/data"

type Props = {
  poster_path: string;
  overview?: string;
  title?: string;
  id: number;
  release_date?: string;
};

function Trending(props: Props) {
  return (
    <div className=" xl:w-100 2xl:mx-auto  2xl:max-w-7xl py-9">
      <div className="container mx-auto">
        <div className="flex">
          <h4 className="font-bold text-lg mr-4">Trending</h4>
          <div className="flex w-52 h-[2.5rem] border-2 border-black rounded-full justify-between">
            <button className="border-1 rounded-full w-[5rem] bg-[#032541] text-[#21a68e]">
              Daily
            </button>
            <button className="border-1 rounded-full w-[5rem]">Weekly</button>
          </div>
        </div>
        <section className="grid grid-cols-8 mt-5">
          {localData.map((movie) =>{
            const { poster_path, overview, release_date, title, id } = movie;
            return (
              <Card
                key={id}
                id={id}
                poster_path={poster_path}
                overview={overview}
                title={title}
                release_date={release_date}
              />
            );
          })}
         
        </section>
      </div>
    </div>
  );
}

export default Trending;
