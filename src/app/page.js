"use client";

import { LoginContext } from "@/context/login";
import { Hero } from "./components/home/Hero";
import { SliderSpecialties } from "./components/SliderSpecialties";
import { useContext } from "react";
import { Features } from "./components/home/Features";

import { Recommendations } from "./components/home/Recommendations";
import { Publications } from "./components/home/Publications";
import { Profiles } from "./components/home/Profiles";
import { EndBanner } from "./components/home/EndBanner";

export default function Home() {
  const { loggedIn } = useContext(LoginContext);

  return (
    <>
      <SliderSpecialties />
      <Hero loggedIn={loggedIn} />
      <Features />

      <section className="w-full flex justify-center items-center bg-bgBeige shadow-lg dark:bg-darkColor">
        <div className="w-full grid grid-cols-1 gap-6 max-w-7xl place-content-center place-items-center px-4 py-10 lg:grid-cols-2">
          <Recommendations loggedIn={loggedIn} />
          <Publications />
        </div>
      </section>
      <Profiles />
      <EndBanner />
    </>
  );
}
