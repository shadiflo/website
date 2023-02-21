import React from 'react';
import ReactCountryFlag from "react-country-flag"
import { Link } from 'react-router-dom';

const Places = () => {

    return (
     <div className="text-center"> 
      

        <ul>
        <h1> Places to play CS:GO</h1>
        <h2 id="faceit" class="toc-header"><a class="toc-anchor" href="#faceit"></a> FACEIT</h2>
  <li>Free to play and paid</li>
  <li>Supports all regions</li>
  <li>Anti-Cheat</li>
  <li>128 tickrate servers</li>
  <li><a href="https://www.faceit.com/en/home" class="is-external-link">https://www.faceit.com/en/home</a></li>
</ul>

<h2 id="esea" class="toc-header"><a href="#esea"></a> ESEA</h2>
<ul>
  <li>Paid only platform</li>
  <li>Supports all regions</li>
  <li>Anti-cheat</li>
  <li>128 tickrate servers</li>
  <li><a href="https://play.esea.net/subscribe/?r=205220" class="is-external-link">http://play.esea.net/subscribe/</a></li>
</ul>

<h2 id="esportal" class="toc-header"><a class="toc-anchor" href="#esportal"></a> ESPORTAL</h2>
<ul>
  <li>Free to play and paid</li>
  <li>Supports only EU regions</li>
  <li>Anti-Cheat</li>
  <li>128 tickrate servers</li>
  <li><a href="https://esportal.com/en/" class="is-external-link">https://esportal.com/en/</a></li>
</ul>
<p>&nbsp;</p>
<h2 id="valve-match-making" class="toc-header"><a class="toc-anchor" href="#valve-match-making"></a> VALVE Match Making</h2>
<ul>
  <li>Free to play</li>
  <li>Supports all regions</li>
  <li>Only VAC</li>
  <li>64 tickrate servers</li>
  <li>Inside of CS:GO client</li>
</ul>
        
</div>
    )
}
export default Places;