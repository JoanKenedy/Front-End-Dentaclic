import GridDashboard from './GridDashboard'
import { Hero } from './Hero'

export default function Dashboard () {
  return (
    <div>
      <div className='flex flex-col w-full justify-center items-center py-5'>
        <Hero />
      </div>
      <GridDashboard />
    </div>
  )
}
