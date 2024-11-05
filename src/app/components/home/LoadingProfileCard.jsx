export const LoadingProfileCard = () => {
  return (
    <div className='relative flex w-full h-10 animate-pulse gap-2 p-4 lg:h-24'>
      <div className='h-8 w-8 rounded-full bg-slate-300 lg:w-24 lg:h-24' />
      <div className='flex-1'>
        <div className='mb-1 h-5 w-3/5 rounded-lg bg-slate-300 text-lg' />
        <div className='h-5 w-[70%] rounded-lg bg-slate-300 text-sm' />
      </div>
      <div className='absolute right-0 h-6 w-12 rounded-full bg-slate-300 md:w-24 md:h-10' />
    </div>
  )
}
