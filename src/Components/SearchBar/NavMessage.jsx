import React from 'react'
import image from '../../Assets/img/1.png';
import image2 from '../../Assets/img/2.png';

function NavMessage() {
  return (
   <li className="nav-item dropdown">
    <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success nadge-number">3</span>
    </a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-emnu-arrow messages">
        <li className="dropdown-header">
            <a href="#">
                <span className="badge rounded-pill bg-prmary p-2 ms-2">
                    View all
                </span>
            </a>


        </li>
        <li>
            <hr className="dropdown-divider"/>
        </li>

        <li className="message-item">
            <a href="#">
                <img
              src={image}
                alt=""
                className="rounded-circle" />
         
            <div>
                <h4>Maria Hudson</h4>
                <p>velit asperii ssss s s s s s s s s s  s s </p>
                <p>4 hrs. ago</p>
            </div>

            </a>

        </li>

        <li>
            <hr className="dropdown-divider"/>
        </li>

        <li className="message-item">
            <a href="#">
                <img
              src={image2}
                alt=""
                className="rounded-circle" />
         
            <div>
                <h4>Maria Hudson</h4>
                <p>velit asperii ssss s s s s s s s s s  s s </p>
                <p>4 hrs. ago</p>
            </div>

            </a>

        </li>

        <li>
            <hr className="dropdown-divider"/>
        </li>

    </ul>
   </li>
  )
}

export default NavMessage;