import React from 'react'

import { Card } from '../cards/Card'

export const CarListLayout = () => {
  return (
    <div className="m-2 md:m- md:mt-3 grid grid-flow-row-dense grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
      {[...Array(48)].map((x,i) => 
      <Card key={i} className=""/>
      )}
    </div>
  )
}
