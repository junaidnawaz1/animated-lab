import Image from "next/image";
import { BentoShowcase } from "@/components/Bento/BentoShowcase";
import BeamGridDemo from "@/components/BeamGrid/BeamGridDemo";
import { AnimeNavBarDemo } from "@/components/AnimeNavBar/Demo";
export default function Home() {
  return (
    <>
      <BentoShowcase />
      <BeamGridDemo />
      <AnimeNavBarDemo/>
    </>
  );
}