import React from 'react';
import { Link } from 'react-router-dom';

export default function Header()
{

  return (
    <div className='container'>
      <ul class="nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/add-category">Add Category</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/add-product">Add Product </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/show-product">Show Product </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/show-category">Show Category </Link>
        </li>

      </ul>
    </div>
  )
}

