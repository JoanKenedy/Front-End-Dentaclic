import { useFetch } from "@/hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ProfileCard } from "./ProfileCard";
import { LoadingProfileCard } from "./LoadingProfileCard";

export const Profiles = () => {
  const optionsSplide = {
    type: "loop",
    arrows: false,
    autoplay: true,
    pagination: false,
    pauseOnHover: true,
    perPage: 3,
    interval: 3000,
    perMove: 1,
    breakpoints: {
      1023: {
        perPage: 2,
      },
      767: {
        perPage: 1,
        gap: "15px",
      },
    },
  };

  const getSlug = (name) => {
    const nameString = name.split(" ");
    const slug = nameString.join("-");

    return slug.toLocaleLowerCase();
  };

  const endpointUsers =
    process.env.NEXT_PUBLIC_API + "buscar/getBuscarAllEspecialistas";

  const { data, error, loading } = useFetch(endpointUsers);
  const elMap = data.especialistas?.map((especialista) =>
    console.log(especialista.usuario?.nombre)
  );

  return (
    <section className="w-full flex justify-center items-center relative z-[1] py-10 dark:bg-darkLightColor">
      <div className="w-full max-w-6xl px-4">
        <h3 className="font-bold text-primaryBlue text-xl dark:text-white md:mb-6 md:text-3xl">
          Los mejores perfiles de Dentaclic
        </h3>
        <div className="">
          <Splide aria-labelledby="Slider Reviews" options={optionsSplide}>
            {error ? `error ${error}` : ""}
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <SplideSlide
                    key={i}
                    className="flex justify-center items-center"
                  >
                    <LoadingProfileCard />
                  </SplideSlide>
                ))
              : ""}
            {data.especialistas?.map((profile) => (
              <SplideSlide
                key={profile.usuario.uid}
                className="flex justify-center items-center"
              >
                <ProfileCard
                  imgSrc={profile.usuario.img}
                  name={profile.usuario.nombre}
                  specialty={profile.rol}
                  href={`/profile/${getSlug(profile.usuario.nombre)}/${
                    profile._id
                  }`}
                />
              </SplideSlide>
            ))}
            <button className="splide__toggle hidden">
              <span className="splide__toggle__play">Play</span>
              <span className="splide__toggle__pause">Pause</span>
            </button>
          </Splide>
        </div>
      </div>
    </section>
  );
};
