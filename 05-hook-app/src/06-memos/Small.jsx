import React from 'react'
// import { memo } from 'react';

export const Small = React.memo(({ value }) => {

  console.log('Me volvi a dibujar :c')

  return (
    <small>{value}</small>
  )
})
