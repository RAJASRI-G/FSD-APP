import React, { Component } from 'react'
import './photos/card.css'
import A from './photos/a.jpg'
import B from './photos/g.jpg'
import C from './photos/c.jpg'
import D from './photos/d.jpg'
import E from './photos/e.jpg'
import F from './photos/f.jpg'
export default class Work extends Component {
  render() {
    return (
      <div className="table1">
      <div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={E} alt="Cinque Terre" width="600" height="600"/>
  </a>
  <div class="desc">MIYUKI</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src={C} alt="Forest" width="600" height="600"/>
  </a>
  <div class="desc">CAYENA</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src={A} alt="Northern Lights" width="600" height="600"/>
  </a>
  <div class="desc">KYOKO</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src={D} alt="Mountains" width="600" height="600"/>
  </a>
  <div class="desc">JIN</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src={D} alt="Mountains" width="600" height="600"/>
  </a>
  <div class="desc">TATSUYA</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src={D} alt="Mountains" width="600" height="400"/>
  </a>
  <div class="desc">JIN</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src={D} alt="Mountains" width="600" height="400"/>
  </a>
  <div class="desc">JIN</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src={A} alt="Mountains" width="600" height="400"/>
  </a>
  <div class="desc">JIN</div>
</div>
      </div>
    )
  }
}
