import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/component/Header/Header";
import HeroSection from "@/component/Hero/HeroSection";
import Trending from "@/component/Trending/Trending";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Trending/>
    </main>
  );
}
