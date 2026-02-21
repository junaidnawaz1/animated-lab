import Image from "next/image";
import { BentoShowcase } from "@/components/Bento/BentoShowcase";
import BeamGridDemo from "@/components/BeamGrid/BeamGridDemo";
export default function Home() {
  return (
    <>
      <BentoShowcase />
      <BeamGridDemo />
    </>
  );
}