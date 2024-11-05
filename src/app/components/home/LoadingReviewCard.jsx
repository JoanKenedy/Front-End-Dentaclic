import { SplideSlide } from '@splidejs/react-splide'

// eslint-disable-next-line react/prop-types
export const LoadingReviewCard = ({ className }) => {
  return (
    <SplideSlide>
      <div className={`flex justify-center items-center review ${className}`}>
        <article className='w-64 rounded-xl bg-slate-500 shadow-xl mt-10 mx-2 mb-7 max-w-96 cursor-grab'>
          <div className='bg-slate-600 w-full h-auto aspect-square object-cover rounded-t-xl animate-pulse' />
          <div className='w-full h-[124px] p-4 text-white bg-slate-700 rounded-b-xl grid place-items-center gap-1'>
            <span className='w-full rounded-full h-3 bg-slate-500 animate-pulse' />
            <div className='w-full h-3 rounded-full bg-slate-500 animate-pulse' />
            <div className='w-full flex justify-center items-center gap-1'>
              {
                Array.from({ length: 5 }).map((_, i) => (
                  <span className='w-4 h-4 rounded-full bg-slate-500 animate-pulse' key={i} />
                ))
              }
            </div>
          </div>
        </article>
      </div>
    </SplideSlide>
  )
}
