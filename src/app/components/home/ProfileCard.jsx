import Link from "next/link";


// eslint-disable-next-line react/prop-types
export const ProfileCard = ({ imgSrc, name, specialty }) => {
  return (
    <article className=" w-[270px] flex items-center rounded-xl border border-gray-500 py-1 px-4 gap-3 my-5 relative cursor-grab ml-4 dark:text-white md:w-72">
      <img
        src={imgSrc}
        alt={`Fotografía de perfil del Dr. ${name}`}
        className="w-24 h-24 object-cover rounded-full shadow-[0px_0px_4px_3px_rgb(0_0_0_/_0.3)] bg-white absolute -left-4"
      />
      <div className="ml-20">
        <span className="font-bold text-nowrap">{name}</span>
        <p className="text-sm">{specialty}</p>
        <Link
          href=""
          className="text-blue-500 transition duration-200 text-xs hover:text-blue-900 md:text-sm"
        >
          Ver perfil
        </Link>
      </div>
    </article>
  );
};
