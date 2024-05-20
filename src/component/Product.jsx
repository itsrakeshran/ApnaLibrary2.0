import React from 'react';


const Product = ({name}) => {
  return (
    <div>
        <div id="card">
            <img src="https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src={name.img} />
            <i className="ri-heart-fill" />
            <h5>{name.title}</h5>            
            <button id="addfrn">add to cart</button>
        </div>
    </div>
  )
}

export default Product;