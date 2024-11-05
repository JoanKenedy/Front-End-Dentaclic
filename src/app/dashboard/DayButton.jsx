export const DayButton = ({ dayFirstLetter, dayNumber, active, existSchedule, id }) => {
  return (
    <span className='grid place-items-center'>
      <span className='text-xs'>{dayFirstLetter}</span>
      <span className={`rounded-full flex justify-center items-center w-7 h-7 text-sm ${active === id && 'text-white bg-primaryBlue'}`}>
        {dayNumber}
      </span>
      <span className={`w-2 h-2 rounded-full mt-1 ${existSchedule && 'bg-gray-400'}`} />
    </span>
  )
}
