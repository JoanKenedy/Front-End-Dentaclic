/* eslint-disable react/prop-types */
export const Publications = ({ activeMenu }) => {
  return (
    <section className={`w-full flex-col gap-5 rounded-xl bg-white dark:bg-darkColor dark:text-white shadow-xl p-4 mt-4 ${activeMenu === '2' ? 'flex' : 'hidden'}`}>
      publicaciones
    </section>
  )
}
