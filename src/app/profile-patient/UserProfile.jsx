import { Hero } from './Hero'
import { Questions } from './Questions'
import { Schedules } from './Schedules'

export const UserProfile = () => {
  return (
    <div>
      <div className='flex flex-col w-full justify-center items-center py-5'>
        <Hero />
        <section className='w-full grid px-4 my-5 gap-4 lg:grid-cols-6'>
          <Schedules />
          <Questions />
        </section>
      </div>
    </div>
  )
}
