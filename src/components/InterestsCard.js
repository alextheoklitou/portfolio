import React from 'react'

function InterestsCard({ name, info, imageUrl, alt }) {
  return (
    <div class="bg-white max-w-sm rounded-lg shadow-md dark:bg-gray-800 justify-center h-full">
        <img class="rounded-t-lg" src={imageUrl} alt={alt} />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-alice">{name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-arimo">{info}</p>
    </div>
</div>
  )
}

export default InterestsCard