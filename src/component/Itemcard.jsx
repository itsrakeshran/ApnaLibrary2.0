import React from 'react'

const Itemcard = ({icon,name,data}) => {
  return (
    <div className='itemcard'>
        <li>{icon}</li>
        <p>{name}</p>
        <p>{data}</p>
    </div>
  )
}

export default Itemcard