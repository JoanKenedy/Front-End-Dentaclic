"use client";

import { LoginContext } from "@/context/login";
import Link from "next/link";
import { useContext, useEffect, useId, useRef, useState } from "react";
import { toast } from "sonner";

export const EditProfile = () => {
  const user = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      user.current = JSON.parse(window.localStorage.getItem("user"));
    }
  }, []);
  const endpointUpdatePatient = useRef();
  const { personalData, loading, userData } = useContext(LoginContext);
  const [image, setImage] = useState(
    "https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp"
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nameInputId = useId();
  const phoneId = useId();
  const imageId = useId();
  const mailId = useId();

  useEffect(() => {
    if (userData) {
      setName(userData.namePaciente);
      setPhone(userData.numTelefono);
    }
    setImage(personalData.img);
    endpointUpdatePatient.current = process.env.NEXT_PUBLIC_API + "paciente";
  }, [userData]);

  // Errors
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const flag = useRef();
  const body = useRef();

  const changeImage = () => {
    const endpoint =
      process.env.NEXT_PUBLIC_API + "usuarios/" + personalData.uid;
    const formData = new FormData();
    if (image) {
      formData.append("img", image);
    } else {
      console.log("No image selected.");
      return;
    }

    if (!user.current || !user.current.token) {
      console.error("No hay token de autenticación");
      return;
    }

    fetch(endpoint, {
      method: "PUT",
      headers: {
        "x-token": user.current.token,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Imagen de perfil actualizada", data);
      })
      .catch((error) => {
        console.error("Error al actualizar la imagen:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    flag.current = true;
    setNameError(null);
    setPhoneError(null);
    setImageError(null);

    if (!name || name.length < 4) {
      flag.current = false;
      setNameError("El nombre es requerido");
    }
    if (!phone) {
      flag.current = false;
      setPhoneError("El teléfono debe de tener 10 números");
    }

    if (flag.current) {
      body.current = { nombre: name, numCelular: phone };

      if (image) {
        changeImage();
      }
      updateInfoPatient();
    }
  };

  const updateInfoPatient = () => {
    setIsLoading(true);
    fetch(endpointUpdatePatient.current, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": user.current.token,
      },
      body: JSON.stringify({ numTelefono: phone, namePaciente: name }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        } else {
          return response.json();
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const handleNewImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImageError("");
      const fileType = selectedFile.type;
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
      ];
      if (validImageTypes.includes(fileType)) {
        setImage(selectedFile); // Guarda el archivo de imagen en el estado
      } else {
        setImage(null);
        setImageError(
          "Por favor, sube una imagen válida (.jpg, .webp, .png, .gif)"
        );
        toast.error(
          "Por favor, sube una imagen válida (.jpg, .webp, .png, .gif)"
        );
      }
    }
  };
  return (
    <>
      <section className="w-full flex justify-center items-center py-20 lg:py-0 lg:pt-28 lg:pb-20">
        <div className="w-full flex justify-center items-center px-4 max-w-6xl">
          {loading ? (
            <LoadingData />
          ) : (
            <form
              className="w-full grid gap-4 max-w-xl"
              onSubmit={handleSubmit}
            >
              <div className="w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max lg:row-span-3">
                <div
                  className={`w-1/2 mb-4 rounded-md ${
                    imageError && "border border-red-500"
                  }`}
                >
                  <label className="w-full relative" htmlFor={imageId}>
                    <img
                      className="w-full h-full aspect-square rounded-md object-cover"
                      src={
                        typeof image === "string"
                          ? image
                          : image
                          ? URL.createObjectURL(image)
                          : ""
                      }
                      alt="Foto de perfil"
                    />

                    <span className="text-xs bg-slate-700/80 text-white w-full flex justify-center items-center py-[2px] rounded-es-md rounded-ee-md absolute bottom-0 right-0">
                      Sube tu imagen
                    </span>
                  </label>
                  <input
                    disabled={isLoading}
                    type="file"
                    name={imageId}
                    id={imageId}
                    className="hidden"
                    onChange={(e) => handleNewImage(e)}
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[#151717] font-semibold">
                    Nombre Completo <span className="text-red-500">*</span>{" "}
                  </span>
                </div>
                <div
                  className={`rounded-lg h-[38px] flex items-center w-full transition relative ${
                    nameError ? "border-red-600" : "border-slate-200"
                  } border focus-within:border focus-within:border-blue-400`}
                >
                  <input
                    disabled={isLoading}
                    id={nameInputId}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none"
                    placeholder="Escribe tu nombre completo"
                  />
                  {nameError && (
                    <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                      {nameError}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-[#151717] font-semibold">
                    Número de celular <span className="text-red-500">*</span>{" "}
                  </span>
                </div>
                <div
                  className={`rounded-lg h-[38px] flex items-center w-full transition relative ${
                    phoneError ? "border-red-600" : "border-slate-200"
                  } border focus-within:border focus-within:border-blue-400`}
                >
                  <input
                    disabled={isLoading}
                    id={phoneId}
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none"
                    placeholder="Escribe tu número de celular"
                  />
                  {phoneError && (
                    <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                      {phoneError}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-[#151717] font-semibold">Correo</span>
                </div>
                <div className="rounded-lg h-[38px] flex items-center w-full transition relative border-slate-200 border focus-within:border focus-within:border-blue-400">
                  <input
                    disabled
                    id={mailId}
                    type="text"
                    value={personalData?.correo}
                    className="bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[#151717] font-semibold">
                    Contraseña
                  </span>
                </div>
                <Link
                  href=""
                  className="w-max px-2 py-[2px] mt-2 rounded-lg bg-primaryBlue text-sm text-white text-center transition hover:bg-blue-950"
                >
                  Cambiar contraseña
                </Link>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-max px-4 mt-10 py-2 rounded-lg bg-primaryBlue text-white text-center transition hover:bg-blue-950"
                >
                  {isLoading ? (
                    <div
                      aria-label="Cargando información"
                      className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    />
                  ) : (
                    "Guardar"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export const LoadingData = () => {
  return (
    <div className="w-full grid gap-4 max-w-xl lg:max-w-full lg:grid-cols-2">
      <div className="w-full p-4 grid mt-3 border gap-2 border-slate-100 rounded-xl shadow-xl lg:h-max lg:row-span-3">
        <div className="w-1/2 mb-4 rounded-md">
          <div className="w-full h-full aspect-square rounded-md bg-slate-400 animate-pulse" />
        </div>
        <div className="w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse" />
        <div className="mt-4">
          <div className="w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse" />
        </div>
        <div className="w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse" />
        <div className="mt-4">
          <div className="w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse" />
        </div>
        <div className="w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse" />
        <div className="mt-4">
          <div className="w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse" />
        </div>
      </div>

      <div className="w-full p-4 grid mt-3 gap-2 border border-slate-100 rounded-xl shadow-xl lg:h-max">
        <div className="w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse" />
        <div>
          <div className="w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse" />
          <div className="w-24 mt-2 h-8 rounded-md bg-slate-400 animate-pulse" />
        </div>
      </div>

      <div className="w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max">
        <div className="grid gap-2">
          <div className="w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse" />
          <div className="w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse" />
          <div className="w-24 h-8 rounded-md bg-slate-400 animate-pulse" />
        </div>
      </div>

      <div className="w-full p-4 flex flex-col justify-between items-center mt-3 border border-slate-100 rounded-xl shadow-xl md:flex-row lg:col-span-2">
        <div className="w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse" />
        <div className="w-24 h-8 rounded-md bg-slate-400 animate-pulse" />
      </div>
    </div>
  );
};
