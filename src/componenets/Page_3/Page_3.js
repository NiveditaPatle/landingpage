import React from 'react'
import bg from "../img/bg.png"
import './Page_3.css';

function Page_3() {
  return (
    <div id='page'>
       <div class="div_5">
            <div class="div_6">
                <h3 class="make">Make beautiful landing pages easily.</h3>
                <p class="Create-custom-landin" id="create">Create custom landing pages with Omega that converts<br/>more visitors than any website. With lots of unique blocks,<br/> you can easily build a page without coding.</p>
                <div>
                    <span><i id='icon_s' class="fa-regular fa-circle-check"></i> 50+ HTML Elements</span>
                    <span><i id='icon_s' class="fa-regular fa-circle-check"></i> Bootstrap 4 Framework</span>
                </div>
                <div>
                    <span><i id='icon_s' class="fa-regular fa-circle-check"></i> 6 Month Support</span>
                    <span><i id='icon_s' class="fa-regular fa-circle-check"></i> Lifetime Updates</span>
                </div>
            </div>
            <div>
                <img class="img_bg" src={bg} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Page_3
