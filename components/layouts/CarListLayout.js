import React from 'react'

import { Card } from '../cards/Card'

export const CarListLayout = () => {
  return (
    <div className="mt-1 md:mt-3 grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
      {[...Array(48)].map((x,i) => 
      <Card key={i}/>
      )}
    </div>
  )
}
