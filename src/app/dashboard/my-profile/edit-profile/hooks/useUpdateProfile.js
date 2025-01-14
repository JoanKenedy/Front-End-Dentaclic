"use client";

import { usePlaces } from "@/app/components/maps/hooks/usePlaces";
import { LoginContext } from "@/context/login";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const degree = [
  "Selecciona tu título",
  "Prof.",
  "Dr.",
  "Dra.",
  "Lic.",
  "Mtro.",
  "Mtra.",
];

export function useUpdateProfile() {
  const handleSelectLocation = () => {};
  const endpointEditSpecialist = useRef();

  const user = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      user.current = JSON.parse(window.localStorage.getItem("user"));
    }
  }, []);

  const { personalData, userData, loading } = useContext(LoginContext);
  const { address, setAddress, handleFormSubmit, updateCoordinates } =
    usePlaces({ handleSelectLocation });

  const method = useRef();
  const body = useRef();
  const flag = useRef();

  const [image, setImage] = useState(
    "https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp"
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDegree, setSelectedDegree] = useState(degree[0]);
  const [cedulas, setCedulas] = useState([""]);
  const [specialties, setSpecialties] = useState(["Selecciona"]);
  const [about, setAbout] = useState("");
  const [educations, setEducations] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [experiences, setExperiences] = useState([""]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const newAddress = useRef();

  useEffect(() => {
    setName(personalData.nombre);
    setImage(personalData.img);
  }, [personalData]);

  useEffect(() => {
    if (userData) {
      newAddress.current = { ...address };
      endpointEditSpecialist.current =
        process.env.NEXT_PUBLIC_API + "especialista/" + userData._id;
      method.current = "PUT";
      setSpecialties(userData.especialidades);
      setPhone(userData.numCelular);
      setEducations(userData.formacionAcademica);
      setExperiences(userData.experiencias);
      setCedulas(userData.cedulaProfesional);
      setImages(userData.fotos);

      if (userData.idioma) {
        setLanguages(userData.idioma);
      }
      if (userData.fotos && Array.isArray(userData.fotos)) {
        setImages(userData.fotos); // Carga las imágenes desde la base de datos
      }
      if (userData.sobreMi) {
        setAbout(userData.sobreMi);
      }
      if (userData.calle) {
        newAddress.current.streetAndNumber = userData.calle;
      }
      if (userData.colonia) {
        newAddress.current.place = userData.colonia;
      }
      if (userData.ciudad) {
        newAddress.current.region = userData.ciudad;
      }
      if (userData.codigoPostal) {
        newAddress.current.postcode = userData.codigoPostal;
      }
      if (userData.latitud) {
        newAddress.current.latitude = userData.latitud;
      }
      if (userData.longitud) {
        newAddress.current.longitude = userData.longitud;
      }
      newAddress.current.country = "México";
      setAddress(newAddress.current);
      setIsRegister(true);
    } else {
      endpointEditSpecialist.current =
        process.env.NEXT_PUBLIC_API + "especialista";
      method.current = "POST";
    }
  }, [userData]);

  // Errors
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [degreeError, setDegreeError] = useState(false);
  const [cedulaError, setCedulaError] = useState(false);
  const [specialtyError, setSpecialtyError] = useState(false);
  const [experiencesError, setExperiencesError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [educationsError, setEducationsError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [imagesError, setImagesError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos enviados:", body.current);

    flag.current = true;
    setNameError(null);
    setPhoneError(null);
    setDegreeError(null);
    setCedulaError(null);
    setSpecialtyError(null);
    setExperiencesError(null);
    setAddressError(null);
    setLanguageError(null);
    setEducationsError(null);
    setImagesError(null);

    if (!name || name.length < 4) {
      flag.current = false;
      setNameError("El nombre es requerido");
    }
    if (!phone) {
      flag.current = false;
      setPhoneError("El teléfono debe de tener 10 números");
    }
    if (selectedDegree === degree[0]) {
      flag.current = false;
      setDegreeError("Selecciona tu título");
    }
    if (!cedulas[0]) {
      flag.current = false;
      setCedulaError("Agrega mínimo una especialidad");
    }
    cedulas.map((ced) => verifyField("cedula", ced));

    if (!experiences[0]) {
      flag.current = false;
      setExperiencesError("Agrega mínimo una especialidad");
    }
    experiences.map((experience) => verifyField("experiences", experience));

    if (!specialties[0]) {
      flag.current = false;
      setSpecialtyError("Agrega mínimo una especialidad");
    }
    specialties.map((specialty) => verifyField("specialty", specialty));

    if (
      !address.streetAndNumber ||
      !address.country ||
      !address.latitude ||
      !address.place ||
      !address.postcode ||
      !address.region
    ) {
      flag.current = false;
      setAddressError("Todos los campos son necesarios");
    }

    if (languages.length !== 0) {
      languages.map((lang) => verifyField("language", lang));
    }

    if (educations.length !== 0) {
      educations.map((education) => verifyField("educations", education));
    }
    if (!images) {
      setImages([]);
    }

    if (flag.current) {
      body.current = {
        codigoPostal: address.postcode,
        latitud: address.latitude,
        longitud: address.longitude,
        ciudad: address.region,
        colonia: address.place,
        calle: address.streetAndNumber,
        numCelular: phone,
        cedulaProfesional: cedulas,
        especialidades: specialties,
        experiencias: experiences,
        fotos: images,
      };

      if (!userData) {
        body.current.usuario = personalData.uid;
      }
      if (about) {
        body.current.sobreMi = about;
      }
      if (educations.length !== 0) {
        body.current.formacionAcademica = educations;
      }
      if (languages.length !== 0) {
        body.current.idioma = languages;
      }
      if (image) {
        changeImage();
      }

      createSpecialist();
    }
  };

  const createSpecialist = () => {
    setIsLoading(true);
    const formData = new FormData();
    if (!userData) {
      formData.append("usuario", personalData.uid);
    }
    formData.append("codigoPostal", address.postcode);
    formData.append("latitud", address.latitude);
    formData.append("longitud", address.longitude);
    formData.append("ciudad", address.region);
    formData.append("colonia", address.place);
    formData.append("calle", address.streetAndNumber);
    formData.append("numCelular", phone);
    cedulas.forEach((cedula) => {
      formData.append("cedulaProfesional", cedula);
    });
    specialties.forEach((especialidad) => {
      formData.append("especialidades", especialidad);
    });
    experiences.forEach((experiencia) => {
      formData.append("experiencias", experiencia);
    });

    educations.forEach((educacion) => {
      formData.append("formacionAcademica", educacion);
    });
    languages.forEach((lenguaje) => {
      formData.append("idioma", lenguaje);
    });

    if (about) {
      formData.append("sobreMi", about);
    }
    if (image) {
      formData.append("img", image);
    }

    if (images.length > 0) {
      images.forEach((image) => {
        formData.append("fotos", image);
      });
    }
    fetch(endpointEditSpecialist.current, {
      method: method.current,
      headers: {
        "x-token": user.current?.token || "",
      },
      body: formData,
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error en la respuesta:", errorText);
          throw new Error(errorText);
        }
        return response.json();
      })
      .then((response) => {
        console.log("Respuesta exitosa:", response);
        toast.success("Datos actualizados correctamente");
        window.location.assign("/dashboard");
      })
      .catch((error) => {
        console.error("Error en el fetch:", error.message);
        toast.error("Ocurrió un error al actualizar. Verifica tu conexión.");
      })
      .finally(() => setIsLoading(false));
  };

  const changeImage = () => {
    const endpoint =
      process.env.NEXT_PUBLIC_API + "usuarios/" + personalData.uid;
    const formData = new FormData();
    formData.append("img", image);
    fetch(endpoint, {
      method: "PUT",
      headers: {
        "x-token": user.token,
      },
      body: formData,
    });
  };
  const verifyField = (collection, field) => {
    switch (collection) {
      case "cedula":
        if (!field) {
          flag.current = false;
          setCedulaError("La cédula es requerida");
        }
        break;
      case "specialty":
        if (field === "Selecciona") {
          flag.current = false;
          setSpecialtyError("La especialidad es requerida");
        }
        break;
      case "educations":
        if (!field) {
          flag.current = false;
          setEducationsError("Llena todos los campos de formación");
        }
        break;
      case "language":
        if (field === "Selecciona") {
          flag.current = false;
          setLanguageError("Llena todos los campos de lenguaje");
        }
        break;
      case "experiences":
        if (!field) {
          flag.current = false;
          setExperiencesError("Escribe al menos una experiencia");
        }
        break;
      default:
        break;
    }
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

  const handleImagesChange = (e) => {
    const files = e.target.files;
    const maxFiles = 10;
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (files.length > maxFiles) {
      setImagesError(`Máximo ${maxFiles} archivos permitidos`);
      return;
    }

    const validFiles = [];
    for (const file of files) {
      if (file.size > maxSize) {
        setImagesError(
          `El archivo ${file.name} supera el tamaño máximo permitido de ${
            maxSize / 1024 / 1024
          }MB`
        );
        return;
      }
      validFiles.push(file);
    }

    setImages(validFiles);
    setImagesError(null);
  };

  const handleAddNewField = (collection) => {
    switch (collection) {
      case "cedula":
        setCedulas((prevCedulas) => [...prevCedulas, ""]);
        break;
      case "specialty":
        setSpecialties((prevSpecialties) => [...prevSpecialties, "Selecciona"]);
        break;
      case "experiences":
        setExperiences((prevExperiences) => [...prevExperiences, ""]);
        break;
      case "educations":
        setEducations((prevEducations) => [...prevEducations, ""]);
        break;
      case "language":
        setLanguages((prevLanguages) => [...prevLanguages, "Selecciona"]);
        break;
      default:
        break;
    }
  };

  const handleRemoveField = (collection, index) => {
    switch (collection) {
      case "cedula":
        {
          const newCedulas = cedulas.filter((_, i) => i !== index);
          setCedulas(newCedulas);
        }
        break;
      case "specialty":
        {
          const newSpecialties = specialties.filter((_, i) => i !== index);
          setSpecialties(newSpecialties);
        }
        break;
      case "educations":
        {
          const newEducations = educations.filter((_, i) => i !== index);
          setEducations(newEducations);
        }
        break;
      case "language":
        {
          const newLanguages = languages.filter((_, i) => i !== index);
          setLanguages(newLanguages);
        }
        break;
      case "experiences":
        {
          const newExperiences = experiences.filter((_, i) => i !== index);
          setExperiences(newExperiences);
        }
        break;
      default:
        break;
    }
  };

  const handleFieldChange = (collection, index, event) => {
    switch (collection) {
      case "cedula":
        setCedulas((prevCedulas) => {
          const newCedulas = [...prevCedulas];
          newCedulas[index] = event.target.value;
          return newCedulas;
        });
        break;
      case "specialty":
        setSpecialties((prevSpecialties) => {
          const newSpecialties = [...prevSpecialties];
          newSpecialties[index] = event.target.innerText;
          return newSpecialties;
        });
        break;
      case "experiences":
        setExperiences((prevExperiences) => {
          const newExperiences = [...prevExperiences];
          newExperiences[index] = event.target.value;
          return newExperiences;
        });
        break;
      case "educations":
        setEducations((prevEducations) => {
          const newEducations = [...prevEducations];
          newEducations[index] = event.target.value;
          return newEducations;
        });
        break;
      case "language":
        setLanguages((prevLanguages) => {
          const newLanguages = [...prevLanguages];
          newLanguages[index] = event.target.innerText;
          return newLanguages;
        });
        break;
      default:
        break;
    }
  };

  return {
    isRegister,
    handleSubmit,
    isLoading,
    loading,
    nameError,
    phoneError,
    imageError,
    degreeError,
    cedulaError,
    specialtyError,
    experiencesError,
    addressError,
    educationsError,
    languageError,
    imagesError,
    setImageError,
    selectedDegree,
    setSelectedDegree,
    name,
    setName,
    phone,
    setPhone,
    image,
    setImage,
    cedulas,
    degree,
    specialties,
    experiences,
    about,
    setAbout,
    address,
    setAddress,
    handleFormSubmit,
    updateCoordinates,
    educations,
    languages,
    handleNewImage,
    handleAddNewField,
    handleRemoveField,
    handleFieldChange,
    handleImagesChange,
  };
}
