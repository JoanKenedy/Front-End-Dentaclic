/* eslint-disable react/prop-types */
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";
import { FollowCard } from "./FollowCard";
import { LoadingFollowCard } from "./LoadingFollowCard";

export const Recommendations = ({ loggedIn }) => {
  const endpointUsers =
    process.env.NEXT_PUBLIC_API + "buscar/getBuscarAllEspecialistas";
  const { data, loading } = useFetch(endpointUsers);
  const [pageNumber, setPageNumber] = useState(0);

  const paginate = (array, size) => {
    const especialistas = array.especialistas || [];
    return especialistas.reduce((acc, val, i) => {
      const idx = Math.floor(i / size);
      const page = acc[idx] || (acc[idx] = []);
      page.push(val);
      return acc;
    }, []);
  };

  const pages = paginate(data, 4);

  const handleNextPage = () => {
    if (pageNumber > pages.length - 2) {
      setPageNumber(0);
    } else {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  };

  return (
    <aside className="w-full max-w-[612px] h-full flex flex-col bg-white dark:bg-darkLightColor shadow-xl rounded-xl px-4 py-4 xsm:py-6 xsm:px-6 sm:py-8 sm:px-10 lg:py-6 lg:px-6 xl:py-8 xl:px-10">
      <span className="dark:text-white">Recomendaciones</span>
      <div className="w-full grid grid-cols-1 gap-4 mt-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <LoadingFollowCard key={i} />
            ))
          : ""}
        {pages[pageNumber]?.map((recommendation) => (
          <FollowCard
            loggedIn={loggedIn}
            key={recommendation._id}
            id={recommendation._id}
            isFollowing
            imgSrc={recommendation.usuario.img}
            name={recommendation.usuario.nombre}
            specialty={recommendation.especialidades[0]}
          />
        ))}
      </div>
      <button
        onClick={() => handleNextPage()}
        className="mt-3 transition duration-300 hover:scale-105 dark:text-white hover:transition md:mt-5"
      >
        Mostrar más...
      </button>
    </aside>
  );
};
