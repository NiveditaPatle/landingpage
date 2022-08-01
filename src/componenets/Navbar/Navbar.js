import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div id='nav'>
    <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand a_1"  href="#">Omega</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 " id="nav_li">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id='a_2' href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link a_1 " aria-current="page" href="#">Pages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link a_1" href="#">Support</a>
                        </li>
                    </ul>
                    <button class="btn_x" type="submit">Get Started</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
