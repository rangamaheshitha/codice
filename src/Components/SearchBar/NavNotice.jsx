import React from 'react'
import './NavNotice.css';
function NavNotice() {
  return (
    <li className="nav-item-dropdown">
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown" >
            <i className="bi bi-bell">
                <span className="badge bg-primary badge-number">4</span>
            </i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
                You have 4 new notifications
                <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                    </span>
                </a>
            </li>
            <li>
                <hr className="dropdown-devider">
                </hr>
            </li>
            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning">
                    <div>
                        <h4>Loren Ipsum</h4>
                        <p>added item displaying</p>
                        <p>30 min  ago</p>
                    </div>
                </i>


            </li>

            <li>
                <hr className="dropdown-devider">
                </hr>
            </li>

            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning">
                    <div>
                        <h4>Loren Ipsum</h4>
                        <p>added item displaying</p>
                        <p>30 min  ago</p>
                    </div>
                </i>


            </li>

            <li>
                <hr className="dropdown-devider">
                </hr>
            </li>
            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning">
                    <div>
                        <h4>Loren Ipsum</h4>
                        <p>added item displaying</p>
                        <p>30 min  ago</p>
                    </div>
                </i>


            </li>

            <li>
                <hr className="dropdown-devider">
                </hr>
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
            </li>

        </ul>
    </li>
   
  )
}

export default NavNotice;