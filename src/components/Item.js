import React from 'react'
import { Link } from 'react-router-dom'

const Item = () => {
  return (
    <>
      <div className='main'>Item</div>
      <ul>
        <Link to='/item/item-1'>
          <li>item 1</li>
        </Link>
        <Link to='/item/item-2'>
          <li>item 2</li>
        </Link>
        <Link to='/item/item-3'>
          <li>item 3</li>
        </Link>
        <Link to='/item/item-4'>
          <li>item 4</li>
        </Link>
      </ul>
    </>
  )
}

export default Item