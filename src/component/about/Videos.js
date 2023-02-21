import React, { Component } from "react";

import bshortsmokes from "../blog/videos/bshortsmokes.mp4";
import bapps from   "../blog/videos/bapps.mp4";

class Video extends Component {
  render() {
    return (
      <div className="text-center"> 
          <h4> Mirage Short Smokes one way for fast takeover</h4>
          
        <video src={bshortsmokes}  width="600" height="300" controls="controls"  />
        <h4>B Apps short smoke execute fast</h4>
        <video src={bapps}  width="600" height="300" controls="controls"  />
   
      </div>
      
    );
  }
}
export default Video;