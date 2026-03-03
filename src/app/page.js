import Image from "next/image";
import { BentoShowcase } from "@/components/Bento/BentoShowcase";
import BeamGridDemo from "@/components/BeamGrid/BeamGridDemo";
import { AnimeNavBarDemo } from "@/components/AnimeNavBar/Demo";
import  ProfileCard  from "@/components/ProfileCard/ProfileCard";
import AuthSwitchDemo from "@/components/AnimatedForm/AuthSwitchDemo";
export default function Home() {
  return (
    <>
    
      <ProfileCard/>
      <AuthSwitchDemo/>
    </>
  );
}