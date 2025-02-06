"use client";

import { LoginContext } from "@/context/login";
import { useContext, useEffect, useState, useRef } from "react";
import { Check, Close } from "../components/icons/Icons";

export const Schedules = () => {
  const [citas, setCitas] = useState([]);
  const { userData } = useContext(LoginContext);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    if (userData?._id) {
      const endpointCitas =
        process.env.NEXT_PUBLIC_API + "citas/" + userData?._id;
      console.log("Endpoint Citas:", endpointCitas);

      fetch(endpointCitas)
        .then((response) => response.json())
        .then((data) => {
          if (isMounted.current) {
            console.log("Datos de citas:", data);
            setCitas(data.citas || []);
          }
        })
        .catch((error) => {
          if (isMounted.current) {
            console.error("Error fetching citas:", error);
          }
        });
    }

    return () => {
      isMounted.current = false; // Limpiamos la referencia cuando el componente se desmonte
    };
  }, [userData?._id]);
  console.log(citas);
  return (
    <article className="w-full  p-4 bg-white md:max-w-7xl rounded-xl shadow-button gap-3">
      <h3 className="text-xl font-semibold">Próximas citas</h3>

      {/* Mapeo de citas */}
      <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-2  ">
        {citas.length > 0 ? (
          citas.map((cita, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center flex-col gap-4 border border-sky-500 p-5 rounded-lg"
            >
              <img
                className="rounded-lg object-cover w-20 aspect-square"
                src={cita.especialista?.usuario?.img}
                alt={`Foto de perfil`}
              />
              <div className="w-full flex justify-center items-center flex-col">
                <span className="text-sm text-gray-500">
                  Especialista: {cita.especialista?.usuario?.nombre}
                </span>{" "}
                <span className="text-sm text-gray-500">
                  Fecha de cita {`${cita.dia}-0${cita.mes}-${cita.year}`}
                </span>{" "}
                {/* Día, mes y año */}
                <span className="text-sm text-gray-500">
                  Horario: {cita.hora}
                </span>{" "}
                {/* Hora de la cita */}
                <span className="text-sm text-gray-500">
                  Especialidad: {cita.especialidad}
                </span>{" "}
                {/* Especialidad */}
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-green-500 rounded-full">
                  <Check className="w-5 text-white" />
                </button>
                <button className="p-2 bg-red-500 rounded-full">
                  <Close className="w-5 text-white" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <span>No tienes citas programadas.</span> // Mensaje si no hay citas
        )}
      </div>
    </article>
  );
};
