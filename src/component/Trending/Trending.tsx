import Link from 'next/link';
import React from 'react'

type Props = {}

function Trending({}: Props) {
  return (
    <div className="xl:w-100 2xl:mx-auto  2xl:max-w-7xl py-9">
      <div className="flex">
        <h4 className="font-bold text-lg mr-4">Trending</h4>
        <div className="flex w-52 h-[2.5rem] border-2 border-black rounded-full justify-between">
          <button className="border-1 rounded-full w-[5rem] bg-[#032541] text-[#21a68e]">
            Daily
          </button>
          <button className="border-1 rounded-full w-[5rem]">Weekly</button>
        </div>
      </div>
      <section className="grid grid-cols-5 mt-5">
        <div className="card w-[9.375rem] h-[18.188rem] border-2 border-blue-700">
          <div className="image">
            <div className="wraper">
              <Link href=''>
                image will be here
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trending