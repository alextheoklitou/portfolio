import React from "react"
import { InterestsData } from "../assets/interests/interestsData"
import InterestsCard from "./InterestsCard"

function Interests() {
  return (
    <>
    <div className='bg-brand-teal flex flex-col items-center text-center' id='interests'>
    <h2 className='lg:pt-10 p-4 text-5xl font-alice text-brand-yellow'>Interests</h2>

      <div className='lg:w-2/3 w-11/12'>

<div className='grid xl:grid-cols-4 lg:grid-cols-2 gap-4 font-arimo place-items-center lg:p-10 pb-4'>
  {InterestsData.map(interest => 
    <InterestsCard key={interest.name} {...interest}/>)}
</div>
      </div>

    </div>

    </>
  )
}

export default Interests