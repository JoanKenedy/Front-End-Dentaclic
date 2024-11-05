export const Appointments = ({ name, schedule }) => {
  return (
    <div className='flex gap-3 w-full'>
      <span className='flex w-1 h-8 rounded-lg bg-primaryBlue' />
      <p className='text-nowrap'>{name}</p>
      <span className='w-full justify-end flex'>{schedule}</span>
    </div>
  )
}
