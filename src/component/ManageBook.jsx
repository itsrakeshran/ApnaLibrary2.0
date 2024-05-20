import React from 'react';
import HorizontalButton from './HorizontalButton'

const ManageBook = () => {
  return (
    <div className='display'>        
          <HorizontalButton name="AddBook"/>
          <HorizontalButton name="Update Book"/>
          <HorizontalButton name="Remove Book"/>
    </div>
  )
}

export default ManageBook