/* eslint-disable react/prop-types */
export const Reviews = ({ activeMenu }) => {
  return (
    <section className={`w-full flex-col gap-5 rounded-xl bg-white dark:bg-darkColor dark:text-white shadow-xl p-4 mt-4 ${activeMenu === '4' ? 'flex' : 'hidden'}`}>
      Reseñas
    </section>
  )
}
