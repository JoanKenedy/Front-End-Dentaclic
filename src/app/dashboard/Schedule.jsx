'use client'

import { useState } from 'react'
import { ChevronPrev } from '../components/icons/Icons'
import { Appointments } from './Appoinments'
import { DayButton } from './DayButton'

export const Schedule = () => {
  const citas = [
    {
      id: 1,
      dayFirstLetter: 'V',
      dayNumber: 2,
      existSchedule: true,
      appointments: [
        {
          name: 'José Luis Torres',
          schedule: '7:00'
        },
        {
          name: 'Kenedi Mayo',
          schedule: '10:00'
        },
        {
          name: 'Guadalupe Pérez',
          schedule: '12:00'
        }
      ]
    },
    {
      id: 2,
      dayFirstLetter: 'S',
      dayNumber: 3,
      existSchedule: false,
      appointments: []
    },
    {
      id: 3,
      dayFirstLetter: 'D',
      dayNumber: 4,
      existSchedule: true,
      appointments: [
        {
          name: 'Uriel Zahuantitla',
          schedule: '7:00'
        },
        {
          name: 'Esbeydy Juárez',
          schedule: '9:00'
        },
        {
          name: 'Fernando Avilés',
          schedule: '11:00'
        }
      ]
    },
    {
      id: 4,
      dayFirstLetter: 'L',
      dayNumber: 5,
      existSchedule: false,
      appointments: []
    },
    {
      id: 5,
      dayFirstLetter: 'M',
      dayNumber: 6,
      existSchedule: false,
      appointments: []
    },
    {
      id: 6,
      dayFirstLetter: 'M',
      dayNumber: 7,
      existSchedule: false,
      appointments: []
    },
    {
      id: 7,
      dayFirstLetter: 'J',
      dayNumber: 8,
      existSchedule: false,
      appointments: []
    },
    {
      id: 8,
      dayFirstLetter: 'V',
      dayNumber: 9,
      existSchedule: true,
      appointments: [
        {
          name: 'Xavier López Chabelo',
          schedule: '7:00'
        },
        {
          name: 'Kenedi Mayo',
          schedule: '10:00'
        },
        {
          name: 'Guadalupe Pérez',
          schedule: '12:00'
        }
      ]
    },
    {
      id: 9,
      dayFirstLetter: 'S',
      dayNumber: 10,
      existSchedule: false,
      appointments: []
    },
    {
      id: 10,
      dayFirstLetter: 'D',
      dayNumber: 11,
      existSchedule: true,
      appointments: [
        {
          name: 'Uriel Zahuantitla',
          schedule: '7:00'
        },
        {
          name: 'Esbeydy Juárez',
          schedule: '9:00'
        },
        {
          name: 'Fernando Avilés',
          schedule: '11:00'
        }
      ]
    },
    {
      id: 11,
      dayFirstLetter: 'L',
      dayNumber: 12,
      existSchedule: false,
      appointments: []
    },
    {
      id: 12,
      dayFirstLetter: 'M',
      dayNumber: 13,
      existSchedule: false,
      appointments: []
    },
    {
      id: 13,
      dayFirstLetter: 'M',
      dayNumber: 14,
      existSchedule: false,
      appointments: []
    },
    {
      id: 14,
      dayFirstLetter: 'J',
      dayNumber: 15,
      existSchedule: false,
      appointments: []
    },
    {
      id: 15,
      dayFirstLetter: 'V',
      dayNumber: 16,
      existSchedule: false,
      appointments: []
    },
    {
      id: 16,
      dayFirstLetter: 'S',
      dayNumber: 17,
      existSchedule: false,
      appointments: []
    },
    {
      id: 17,
      dayFirstLetter: 'D',
      dayNumber: 18,
      existSchedule: false,
      appointments: []
    },
    {
      id: 18,
      dayFirstLetter: 'L',
      dayNumber: 19,
      existSchedule: false,
      appointments: []
    },
    {
      id: 19,
      dayFirstLetter: 'M',
      dayNumber: 20,
      existSchedule: false,
      appointments: []
    },
    {
      id: 20,
      dayFirstLetter: 'M',
      dayNumber: 21,
      existSchedule: true,
      appointments: [
        {
          name: 'Jorge Nitales',
          schedule: '7:00'
        }
      ]
    },
    {
      id: 21,
      dayFirstLetter: 'J',
      dayNumber: 22,
      existSchedule: false,
      appointments: []
    }
  ]
  const [active, setActive] = useState(1)
  const [pageNumber, setPageNumber] = useState(0)

  const paginate = (array, size) => {
    const especialistas = array
    return especialistas.reduce((acc, val, i) => {
      const idx = Math.floor(i / size)
      const page = acc[idx] || (acc[idx] = [])
      page.push(val)
      return acc
    }, [])
  }

  const pages = paginate(citas, 7)

  const handleNextPage = () => {
    if (pageNumber > pages.length - 2) {
      setPageNumber(0)
      setActive(pages[0][0].id)
    } else {
      setPageNumber((pageNumber) => pageNumber + 1)
      setActive(pages[pageNumber + 1][0].id)
    }
  }

  const handlePrevPage = () => {
    if (pageNumber < pages.length - 1) {
      setPageNumber(pages.length - 1)
      setActive(pages[pages.length - 1][0].id)
    } else {
      setPageNumber((pageNumber) => pageNumber - 1)
      setActive(pages[pageNumber - 1][0].id)
    }
  }

  const getAppointments = (active) => {
    const info = citas[active - 1]

    if (info.appointments.length === 0) {
      return (<p>No hay citas</p>)
    } else {
      return (
        info.appointments.map((appointment, i) => (
          <Appointments key={i} name={appointment.name} schedule={appointment.schedule} />
        ))
      )
    }
  }
  return (
    <article className='w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3'>
      <h3 className='text-xl font-semibold'>Calendario</h3>
      <div className='w-full justify-center flex gap-2'>
        <span>Agosto 2024</span>
        <div className='flex gap-2'>
          <button onClick={() => handlePrevPage()}>
            <ChevronPrev className=' w-6 text-primaryBlue' />
          </button>
          <button onClick={() => handleNextPage()}>
            <ChevronPrev className='rotate-180 w-6 text-primaryBlue' />
          </button>
        </div>
      </div>
      <div className='w-full flex gap-2 justify-center'>
        {
          pages[pageNumber]?.map((day, i) => (
            <button key={i} onClick={() => setActive(day.id)}>
              <DayButton existSchedule={day.existSchedule} dayFirstLetter={day.dayFirstLetter} dayNumber={day.dayNumber} active={active} id={day.id} />
            </button>
          ))
        }
      </div>
      <span className='w-full flex justify-center text-sm'>Viernes 2 de agosto de 2024</span>
      <div className='w-full flex flex-col gap-2'>
        {
          getAppointments(active)
        }
      </div>
    </article>
  )
}
