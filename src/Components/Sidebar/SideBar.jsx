import React from 'react';
import './sidebar.css';
import navList from '../../Data/navItem';
import NavItem from './NavItem/NavItem';

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide"></i>
                <span>Documents</span>
                <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                   id="components-nav" className='nav-content collapse' data-bs-parent="#sidebar-bav">

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'>
                                <span>Customers</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'>
                                <span>Suppliers</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'>
                                <span>Logistic</span>
                            </i>
                        </a>
                    </li>
                    </ul>

                    </li>

                    <li className="nav-item">
                        <a className='nav-link collapsed'
                            data-bs-target='#forms-nav'
                            data-bs-toggle='collapse'
                            href="#">
                                <i className='bi bi-journal-text'></i>
                                <span>Forms</span>
                                <i className='bi bi-chevron-down ms-auto'></i>


                            </a>

                            <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="#">
                                        <i className='bi bi-circle'></i>
                                        <span>Application Form</span>

                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i className='bi bi-circle'></i>
                                        <span>ReleaseForm</span>

                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i className='bi bi-circle'></i>
                                        <span>Cancel Form</span>

                                    </a>
                                </li>


                            </ul>

                        </li>

                    <li className='nav-item'>
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className='bi bi-layout-text-window-reverse'>

                            </i>
                            <span>Tables</span>
                            <i className='bi bi-chevron-down ms-auto'></i>
                        </a>
                        <ul id="tables-nav" className='nav-content collapse' data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="#">
                                    <i className="bi bi-circle"></i>
                                    <span>General Tables</span>
                                </a>

                            </li>

                            <li>
                                <a href="#">
                                    <i className="bi bi-circle"></i>
                                    <span>Data Tables</span>
                                </a>

                            </li>

                        </ul>
                    </li>
         

        </ul>

        <li className="nav-heading">Pages</li>
        {navList.map(nav=>(
            
<NavItem key={nav.id} nav={nav}/>
    ))}

    </aside>
  )
}

export default SideBar;