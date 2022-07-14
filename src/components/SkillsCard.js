import React from 'react'

function SkillsCard({ skill, svg }) {
  console.log(skill)
  return (
    <>
      <div className="flex justify-center p-2">
        <div className="w-full flex flex-col items-center">
          {svg}
          <h5 className="text-white text-7 font-medium m-2 font-arimo">{skill}</h5>
        </div>
      </div>
    </>
  )
}

export default SkillsCard