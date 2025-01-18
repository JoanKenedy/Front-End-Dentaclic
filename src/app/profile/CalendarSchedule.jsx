import { useRef, useState } from "react";
import { CalendarMonth, MapPin } from "@/app/components/icons/Icons";
import { SelectLocation } from "./SelectLocation";
import { SelectSpecialty } from "./SelectSpecialty";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export const CalendarSchedule = ({
  showSchedule,
  setShowSchedule,
  loading,
  profileData,
  isProfile,
}) => {
  return !loading || profileData ? (
    <InfoCalendar
      profileData={profileData}
      showSchedule={showSchedule}
      setShowSchedule={setShowSchedule}
      isProfile={isProfile}
    />
  ) : (
    ""
  );
};

export const InfoCalendar = ({
  showSchedule,
  setShowSchedule,
  profileData,
  isProfile,
}) => {
  // Estados para capturar selecciones
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  // Manejadores de eventos
  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleDaySelect = (day) => setSelectedDay(day);
  const handleTimeSelect = (time) => setSelectedTime(time);

  // Función para subir los datos a la base de datos
  const handleSubmit = async () => {
    if (!selectedMonth || !selectedDay || !selectedTime) {
      alert("Por favor, selecciona mes, día y hora.");
      return;
    }

    const appointmentData = {
      month: selectedMonth,
      day: selectedDay,
      time: selectedTime,
    };
    console.log(appointmentData);

    try {
      // Simulación de envío a la base de datos
      console.log("Subiendo datos:", appointmentData);
      // Aquí puedes usar un servicio como fetch o axios para enviar los datos
      // Ejemplo:
      // await fetch('/api/appointments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(appointmentData),
      // });

      alert("Cita agendada con éxito");
    } catch (error) {
      console.error("Error al agendar la cita:", error);
      alert("Hubo un problema al agendar la cita.");
    }
  };

  const handleClickOutsideFn = () => setShowSchedule(false);
  const selectElement = useRef(null);
  useOnClickOutside(selectElement, handleClickOutsideFn);

  const mesConTreinta = ["Abril", "Junio", "Septiembre", "Noviembre"];
  const mesConVeiteOcho = "Febrero";
  const mesConTreintaUno = [
    "Enero",
    "Marzo",
    "Mayo",
    "Julio",
    "Agosto",
    "Octubre",
    "Diciembre",
  ];

  const getDayInMonth = (month) => {
    if (mesConTreinta.includes(month)) return 30;
    if (mesConTreintaUno.includes(month)) return 31;
    if (month === mesConVeiteOcho) return 28;
    return 0;
  };

  const dayInMonth = getDayInMonth(selectedMonth);
  return (
    <aside
      ref={selectElement}
      className={`w-11/12 flex flex-col bg-white dark:bg-darkColor dark:text-white shadow-xl rounded-xl gap-3 pb-4 transition origin-bottom-right fixed z-10 right-1/2 translate-x-1/2 bottom-28 ${
        showSchedule ? "scale-100" : "scale-0"
      } lg:scale-100 lg:sticky lg:translate-x-0 lg:right-0 ${
        isProfile ? "lg:top-10 lg:mt-0" : "lg:top-20 lg:mt-32"
      }  lg:max-w-96 lg:h-max lg:bottom-0`}
    >
      <span className="flex gap-2 text-white bg-blue-500 px-4 py-2 rounded-t-xl">
        <CalendarMonth className="w-6 h-6" /> Agendar Cita
      </span>
      <article className="w-full px-4">
        <SelectLocation profileData={profileData} />
      </article>
      <article className="w-full px-4">
        <SelectSpecialty profileData={profileData} />
      </article>
      <article className="px-4">
        <div className="w-full grid grid-cols-7 gap-4">
          {/* Selección de Mes */}
          <section className="flex flex-col justify-center items-center col-span-7">
            <header className="flex flex-col justify-center items-center mb-2">
              <span className="text-center text-xs">Seleccionar Mes</span>
              <select
                className="text-xs px-2 py-1 border rounded-md"
                onChange={handleMonthChange}
                value={selectedMonth}
              >
                <option value="">Seleccione un mes</option>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>
            </header>
          </section>

          {/* Selección de Día */}
          <section className="flex flex-wrap justify-center col-span-7">
            <header className="flex flex-col justify-center items-center mb-2 w-full">
              <span className="text-center text-xs">Seleccionar Día</span>
            </header>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: dayInMonth }).map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex justify-center items-center border rounded-md text-xs ${
                    selectedDay === index + 1 ? "bg-blue-300 text-white" : ""
                  }`}
                  onClick={() => handleDaySelect(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </section>

          {/* Selección de Hora */}
          <section className="flex flex-col justify-center items-center col-span-7 mt-4">
            <header className="flex flex-col justify-center items-center mb-2">
              <span className="text-center text-xs">Seleccionar Hora</span>
            </header>
            <div className="flex flex-wrap justify-center gap-2">
              {["10:00", "12:00", "14:00", "16:00", "18:00"].map((time) => (
                <button
                  key={time}
                  className={`px-2 py-1 rounded-md text-xs ${
                    selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-blue-300 text-white"
                  }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* Botón para enviar datos */}
      <div className="px-4 mt-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Confirmar Cita
        </button>
      </div>
    </aside>
  );
};
