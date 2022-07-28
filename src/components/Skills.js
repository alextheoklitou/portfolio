import React from 'react'

import SkillsCard from './SkillsCard.js'

import { TechSkills } from '../assets/skills/tech.js'
import { LanguageSkills } from '../assets/skills/languages.js'
import { SoftSkills } from '../assets/skills/soft.js'


function Skills() {
  return (
    <>
      <div className='bg-brand-teal text-brand-yellow flex flex-col items-center' id='skills'>
        <div className='lg:w-1/2 w-11/12 text-center'>
          <h2 className='lg:pt-10 p-4 text-5xl font-alice text-brand-yellow'>Skills</h2>
          <h2 className='pt-2 text-3xl font-alice text-white'>Tech</h2>
          <div className="grid xl:grid-cols-8 grid-cols-4 pt-2">
            {TechSkills.map(techSkill => 
              <SkillsCard key={techSkill.skill} {...techSkill} />
            )}
          </div>
          <hr />
          <h2 className='pt-2 text-3xl font-alice text-white'>Languages</h2>
          <div className='flex flex-col items-center'>
          <div className="grid grid-cols-2 pt-2 xl:w-1/4 w-8/12">
            {LanguageSkills.map(languageSkill => 
              <SkillsCard key={languageSkill.skill} {...languageSkill} />
            )}
          </div>
          </div>
              <hr />
              <h2 className='pt-2 text-3xl font-alice text-white'>Soft Skills</h2>
              <div className='flex flex-col items-center'>

              <div className="grid xl:grid-cols-6 grid-cols-3 pt-2 lg:w-2/3 w-11/12">
            {SoftSkills.map(softSkill => 
              <SkillsCard key={softSkill.skill} {...softSkill} />
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills