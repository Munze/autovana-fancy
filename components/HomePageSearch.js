import React from 'react'
import Tabovi from './navigation/Tabovi'

export const HomePageSearch = (brendovi) => {
  console.log('Home Page Search Brendovi: ', brendovi);

  return (
    
    <div className="hidden md:max-w-[800px] md:rounded-lg shadow-md bg-blue-300/40 p-3 md:flex">
         <Tabovi props={brendovi} /> 
        </div>
  )
}
