import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./trending.module.css";
import shaper from "../../assets/shaper.jpg";
type Props = {
  poster_path: string;
  overview?: string;
  title: string | undefined;
  id: number;
  release_date:string | undefined;
};

function Card(props: Props) {
  const { poster_path, overview,release_date, title, id } = props;
  return (
    <div className="card w-[9.375rem] h-[18.188rem]">
      <div className={styles.image}>
        <div className="w-[100%] h-[100%]">
          <Link href={`movie/${id}`} className="w-[100%]">
            <Image
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              className="w-[100%]"
              width={200}
              height={200}
              alt="title"
            />
          </Link>
        </div>
      </div>
      <Link href="" className="font-bold">
        {title}
      </Link>
      <p className="font-regular">{release_date}</p>
    </div>
  );
}

export default Card;
