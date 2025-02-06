import { Hero } from "./Hero";

import { Schedules } from "./Schedules";

export const UserProfile = () => {
  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center  py-5">
        <Hero />
        <section className="w-full grid px-4 my-5 gap-4 md:grid-cols-2 md:max-w-7xl m-auto">
          <Schedules />
        </section>
      </div>
    </div>
  );
};
