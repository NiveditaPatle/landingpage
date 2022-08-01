import React from 'react'
import './Page_2.css';
import layout_11 from "../img/layout-11.png"
import layers_3 from "../img/layers-3.png"
import icon from "../img/icon.png"

function Page_2() {
  return (
    <div>
      <div class="div_3">
            <div class="div_4">
                <img class="img_layer" src={layout_11} alt=""/>
                <h5>Multiple Modern Layouts</h5>
                <p>With lots of unique blocks, you can easily<br/> build a page without coding. Build your next <br/>
                    landing page quickly.</p>
            </div>
            <div class="div_4">
                <img class="img_layer" src={layers_3} alt=""/>
                <h5>Built with Bootstrap 4</h5>
                <p>With lots of unique blocks, you can easily<br/> build a page without coding. Build your next <br/>
                    landing page quickly.</p>
            </div>
            <div class="div_4">
                <img class="img_layer" src={icon} alt=""/>
                <h5>Fully Responsive</h5>
                <p>With lots of unique blocks, you can easily<br/> build a page without coding. Build your next <br/>
                    landing page quickly.</p>
            </div>
        </div>
    </div>
  )
}

export default Page_2
