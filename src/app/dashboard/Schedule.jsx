"use client";

import { useState } from "react";
import { ChevronPrev } from "../components/icons/Icons";

export const Schedule = ({ citas }) => {
  const citasAceptadas = citas.filter((cita) => cita.status === "aceptada");

  // Estado para el mes y año actual
  const [currentDate, setCurrentDate] = useState(new Date());

  // Función para obtener el número de días en el mes
  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();

  // Obtener datos del mes actual
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  // Cambiar de mes
  const handlePrevPage = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Filtrar citas por día
  const citasPorDia = (day) =>
    citasAceptadas.filter(
      (cita) =>
        cita.dia == day &&
        cita.mes == currentMonth + 1 &&
        cita.year == currentYear
    );

  return (
    <article className="w-full h-full flex flex-col justify-center items-center p-4 bg-white rounded-xl shadow-button gap-2">
      <h3 className="text-xl font-semibold">Calendario</h3>

      {/* Navegación entre meses */}
      <div className="w-full flex justify-center gap-2">
        <button onClick={handlePrevPage}>
          <ChevronPrev className="w-6 text-primaryBlue" />
        </button>
        <span>
          {new Intl.DateTimeFormat("es-ES", {
            month: "long",
            year: "numeric",
          }).format(currentDate)}
        </span>
        <button onClick={handleNextPage}>
          <ChevronPrev className="rotate-180 w-6 text-primaryBlue" />
        </button>
      </div>

      {/* Calendario */}
      <div className="grid grid-cols-7 gap-2 p-2 text-center">
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const citasDia = citasPorDia(day);

          return (
            <div
              key={day}
              className={`p-2 border text-sm rounded-md ${
                citasDia.length
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-100"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="w-80">
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const citasDia = citasPorDia(day);

          return (
            <div key={day}>
              {citasDia.length > 0 && (
                <div className="w-full">
                  {citasDia.map((cita) => (
                    <div
                      key={cita._id}
                      className="flex justify-between items-center flex-row gap-4 text-sm"
                    >
                      <p>Citas:</p>
                      <p>{cita.paciente.usuario.nombre} </p>
                      <p> {cita.hora}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
};
