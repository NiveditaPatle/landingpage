import React from 'react'
import Mobile from "../img/bitmap.png"
import './Page_1.css'

function Page_1() {
    return (
        <div id='bg'>
            <div className="div_1">
                <div className="div_2">
                    <h1 className="get">Get your next landing page.</h1>
                    <p className="Create-custom-landin">Create custom landing pages with Omega that convert<br /> more
                        visitors
                        than any website. With lots of unique blocks,<br /> you can easily build a page without coding.
                    </p>
                    <button className="btn_x" type="submit">Start 14 Days Free Trial </button>
                    <p className="No-credit-card-requi">No credit card required</p>
                </div>
                <div>
                    <img className="img_bitmap" src={Mobile} alt="mobile"/>
                </div>
            </div>
    </div>   
            )
}

            export default Page_1
