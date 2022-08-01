import React from 'react'
import './Page_5.css';
import image from "../img/image.png"


function Page_5() {
  return (
    <div id='main'>
      <div className="div_9">
            <h3 className="Customers-love-us">Customers love us</h3>
            <p className="p_1">Create custom landing pages with Omega that converts <br/> more visitors than any website.</p>
        </div>
        <div className="div_10">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="div_11">
                <h2 id="h_2">"</h2>
                <p className="OMG-I-cannot-believ">OMG! I cannot believe that I have got a brand <br/> new landing page after
                    getting Omega. It was<br/> super easy to edit and publish.</p>
                <p className="Jonathan-Taylor">Jonathan Taylor</p>
                <p className="CEO-at-Creativex">CEO at Creativex</p>
            </div>
        </div>
        <div className="div_12">
            <div>
                <h3 className="h_3">1M+</h3>
                <p className="Customers-visit-Omeg">Customers visit Omega every<br/> month to get their service done.</p>
            </div>
            <div>
                <h3 className="h_3">92%</h3>
                <p className="Customers-visit-Omeg">Satisfaction rate comes from our<br/> awesome customers.</p>
            </div>
            <div>
                <h3 className="h_3">4.9/5.0</h3>
                <p className="Customers-visit-Omeg">Average customer ratings we have<br/> got all over internet.</p>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default Page_5
