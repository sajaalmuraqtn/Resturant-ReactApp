import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
export default function Navbar() {
  return (
    <><nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">

        <a className="navbar-brand text-white m-2" href="#"><img width={150} src={logo} alt="logo" /></a>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        </div>
        <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link btn m-1 text-white active" to='about'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn m-1 text-white active" to='contact'>Contact</Link>
            </li>
          </ul>
      </div>
    </nav>
    </>
  )
}

