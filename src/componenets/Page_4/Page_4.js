import React from 'react'
import './Page_4.css';
import bg_2 from "../img/bg@2x.png"
import model from "../img/3-d-model.png"
import layout_25 from "../img/layout-25.png"



function Page_4() {
    return (
        <div id='bg_2'>
            <div>
                <img className="img_bg2" src={bg_2} alt="" />
            </div>
            <div className="div_8">
                <h2 className="make">Fits everything on all your devices.</h2>
                <p className="Create-custom-landin" id="create">Create custom landing pages with Omega that converts<br /> more
                    visitors than any website. With lots of unique blocks,<br /> you can easily build a page without coding.
                </p>
                <div>
                    <div className="div_7">
                        <img src={model} alt="" />
                        <h6 className="f_h6">Faster Development UI Kits</h6>
                    </div>
                    <p className='With-lots-of-unique'>With lots of unique blocks, you can easily build <br/> a page without
                        coding. Build your next landing <br/> page quickly.</p>
                </div>
                <div>
                    <div className="div_7">
                        <img src={layout_25} alt="" />
                        <h6 className="f_h6">Pre-made Pages for Easy Setup</h6>
                    </div>
                    <p className="With-lots-of-unique">With lots of unique blocks, you can easily build <br/> a page without
                        coding. Build your next landing <br/> page quickly.</p>
                </div>
            </div>
        </div>
    )
}

export default Page_4
