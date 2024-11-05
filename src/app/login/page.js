/* eslint-disable react/prop-types */

import { LoginForm } from './LoginForm'

export default function Login () {
  return (
    <>
      <section className='pt-32 pb-14 w-full flex justify-center items-center dark:bg-darkLightColor'>
        <div className='w-full flex justify-center items-center max-w-7xl flex-col px-4'>
          <LoginForm />
        </div>
      </section>
    </>
  )
}
