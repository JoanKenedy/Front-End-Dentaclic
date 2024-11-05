import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Check, Star } from "../icons/Icons";
import "@splidejs/react-splide/css";
import { useFetch } from "@/hooks/useFetch";
import { LoadingReviewCard } from "./LoadingReviewCard";
import Link from "next/link";

export const Reviews = () => {
  const optionsSliderReviews = {
    type: "loop",
    arrows: false,
    perPage: 5,
    perMove: 1,
    pagination: false,
    gap: "15px",
    padding: 0,
    breakpoints: {
      1280: {
        width: 1280,
        perPage: 3,
        focus: "center",
        autoWidth: true,
      },
      1023: {
        perPage: 2,
        autoWidth: true,
      },
      767: {
        perPage: 1,
        padding: "3rem",
        focus: "center",
        autoWidth: true,
      },
      375: {
        perPage: 1,
        padding: 0,
        gap: 0,
        focus: "center",
        autoWidth: true,
      },
    },
  };

  const urlReviews = process.env.NEXT_PUBLIC_API + "buscar/getAllEspecialistas";
  const { data, loading } = useFetch(urlReviews);

  const getSlug = (name) => {
    const nameString = name.split(" ");
    const slug = nameString.join("-");

    return slug.toLocaleLowerCase();
  };

  return (
    <>
      <section className="w-full flex justify-center bg-image bg-center shadow-lg relative z-[1]">
        <div className="w-full flex justify-center items-center bg-[#002345c0] pt-10 pb-2">
          <div className="w-full h-[400px] max-w-[1400px]">
            <h2 className="flex justify-center items-center gap-2 px-4 text-white text-center text-nowrap text-base font-semibold md:text-xl lg:text-4xl lg:gap-4">
              <Check className="w-9 h-9 p-1 bg-primaryBlue rounded-full text-white shadow-[0px_5px_8px_0px_rgb(0_0_0_/_0.4)] lg:w-12 lg:h-12" />
              Opiniones reales de pacientes
            </h2>
            <p className="text-white text-xs text-center mt-3 md:text-base">
              En Dentarios sólo hay comentarios de pacientes reales que acuden a
              su cita
            </p>
            <div className="">
              <Splide
                aria-labelledby="Slider Reviews"
                options={optionsSliderReviews}
              >
                {loading ? (
                  <>
                    <LoadingReviewCard className="" />{" "}
                    <LoadingReviewCard className="hidden md:block" />{" "}
                    <LoadingReviewCard className="hidden lg:block" />{" "}
                    <LoadingReviewCard className="hidden xl:block" />{" "}
                    <LoadingReviewCard className="hidden xl:block" />
                  </>
                ) : (
                  ""
                )}
                {data.especialistas?.map(
                  (review) =>
                    review.usuario.nombre && (
                      <SplideSlide
                        key={review.usuario.uid}
                        className="flex justify-center items-center review"
                      >
                        <article className="w-64 rounded-xl bg-white shadow-xl mt-10 mx-2 mb-7 max-w-96 cursor-grab">
                          <img
                            className="bg-white w-full h-auto aspect-square object-cover rounded-t-xl"
                            src={review.usuario.img}
                            alt={`Fotografía de perfil del Dr(a). ${review.usuario.nombre}`}
                          />
                          <Link
                            href={`/profile/${getSlug(review.usuario.nombre)}/${
                              review._id
                            }`}
                            className="w-full p-4 text-white bg-blue-900 rounded-b-xl grid place-items-center gap-1"
                          >
                            <span className="w-full font-semibold text-xl text-center truncate">
                              {review.usuario.nombre}
                            </span>
                            <p className="truncate text-center w-full">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Quibusdam, incidunt facilis
                              molestiae adipisci impedit quis atque
                            </p>
                            <div className="flex justify-center items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i}>
                                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                </span>
                              ))}
                            </div>
                          </Link>
                        </article>
                      </SplideSlide>
                    )
                )}
              </Splide>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-36 bg-white shadow-lg relative z-0 lg:h-40 dark:bg-darkColor" />
    </>
  );
};
