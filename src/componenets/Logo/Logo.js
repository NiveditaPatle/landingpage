import React from 'react'
import './Logo.css';
import logo_1 from "../img/logo-1.jpg"
import logo_2 from "../img/logo-2.jpg"
import logo_3 from "../img/logo-3.png"
import logo_4 from "../img/logo-4.png"
import logo_5 from "../img/logo-5.png"


function Logo() {
  return (
    <div>
      <hr/>
      <div className="logo">
            <img className="img_logo" src={logo_1} alt=""/>
            <img className="img_logo" src={logo_2} alt=""/>
            <img className="img_logo" src={logo_3} alt=""/>
            <img className="img_logo" src={logo_4} alt=""/>
            <img className="img_logo" src={logo_5} alt=""/>
        </div>
    </div>
  )
}

export default Logo
