import React from 'react';

function CardFilter({filterchange}) {
  return (
    <div className="filter"> <a className='icon =' href="#" data-bs-toggle="dropdown">
         <i className="bi bi-three-dots"></i>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
                <h6>Filter</h6>
            </li>
            <li>
                <a className="dropdown-item" onClick={()=>filterchange('Today')}>
                    Today
                </a>
            </li>
            <li>
                <a className="dropdown-item" onClick={()=>filterchange('This Month')}>
                    This Month
                </a>
            </li>

            <li>
                <a className="dropdown-item" onClick={()=>filterchange('This Year')}>
                    This Year
                </a>
            </li>
        </ul>
    </div>
  )
}

export default CardFilter