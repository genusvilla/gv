import React, {useState,useRef,useEffect} from 'react'

import book1 from './asset/books/black arts.jpg';
import book2 from './asset/books/chem.jpg';
import book3 from './asset/books/chem1.jpg';
import book4 from './asset/books/chem1.jpg';
import book5 from './asset/books/eco1.webp';
import book6 from './asset/books/eco3.jpg';
import book7 from './asset/books/eco4.jpg';
import book8 from './asset/books/eco5.jpg';
import book9 from './asset/books/history1.jpg';
import book10 from './asset/books/history2.jpg';
import book11 from './asset/books/history3.jpg';
import book12 from './asset/books/law1.png';
import book13 from './asset/books/law2.jpg';
import book14 from './asset/books/law3.jpg';
import book15 from './asset/books/law4.jpg';
import book16 from './asset/books/maths1.jpg';
import book17 from './asset/books/maths2.jpg';
import book18 from './asset/books/eco2.jpg';
import book19 from './asset/books/physics1.jpg';
import book20 from './asset/books/physics2.jpg';
import book21 from './asset/books/law5.jpg';
import ratestar  from './asset/SVG/star.svg';
import report  from './asset/SVG/report.svg';
import share  from './asset/SVG/share.svg';
import more  from './asset/SVG/more-vertical.svg';
import more3  from './asset/SVG/more3.svg';
import starsing  from './asset/SVG/starsing.svg';


export default function Bookslib() {

  const [smartdata, setsmartdata] = useState({display:"none"})
  const [dstate, setdstate] = useState("olo")
  const [tedata, settedata] = useState("")
  const dolls = ["$1.99", "$2.99", "$7.99", "$3.99", "$0.99", "$5.99", "free"];

  const random1 = Math.floor(Math.random() * dolls.length);
  const random2 = Math.floor(Math.random() * dolls.length);
  const random3 = Math.floor(Math.random() * dolls.length);
  const random4 = Math.floor(Math.random() * dolls.length);
  const rando14 = Math.floor(Math.random() * dolls.length);
  const random6 = Math.floor(Math.random() * dolls.length);
  const random7 = Math.floor(Math.random() * dolls.length);
  const random8 = Math.floor(Math.random() * dolls.length);
  const random9 = Math.floor(Math.random() * dolls.length);
  const random10 = Math.floor(Math.random() * dolls.length);
  const ddr1 = (random1, dolls[random1]);
  const ddr2 = (random2, dolls[random2]);
  const ddr3 = (random3, dolls[random3]);
  const ddr4 = (random4, dolls[random4]);
  const ddro = (rando14, dolls[rando14]);
  const ddr6 = (random6, dolls[random6]);
  const ddr7 = (random7, dolls[random7]);
  const ddr8 = (random8, dolls[random8]);
  const ddr9 = (rando14, dolls[rando14]);
  const ddr0 = (random10, dolls[random10]);

  
function skipchild(e) {
  if(e.nativeEvent) {
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopPropagation();
  }else
  e.preventDefault();
  e.stopPropagation();
}

const [mpo, setmpo] = useState({display:"block"})

function popri() { if(dstate==="olo2"){setdstate("olo")}else{setdstate("olo2")} }
  function sdp() {  setsmartdata({display:"block"}) }
  function sdn() {  setsmartdata({display:"none"}) }

  function chkpay(i) {
    if(i==="pay"){return("Buy")}else{return("Download")}
  }
  return (
    
  <div id="uiskin" >
    
<div className="popbase" onClick={e=> sdn()} style={smartdata} >
  <div id="overpop" >
     <div id="avs" onClick={e=> skipchild(e)} >
    <div id="inose" >
      <div id="becover" ><div id="pbacki" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={tedata} /></div></div>
     </div>
    <div id="inosill" > 
    <div id="bookne" >Placeholder</div>
    <div id="starrate" ><div id="ratesize" ></div> <img alt='img' id='rateblank' src={ratestar} /> </div>
    <div id="booknote" >Food is our most intimate and telling connection both with the living natural order and with our living cultural heritage. By eating the plants and animals of our earth, we literally incorporate them. It is also through this act of eating that we partake of our culture's values and paradigms at the most primal levels. It is becoming increasingly obvious, however, that the choices we make about our food are leading to environmental degradation, enormous human health problems, and unimaginable cruelty toward our fellow creatures.</div>
    <div id="plf" ></div>
    <div id="rewi"  onClick={e=> popri()}><img alt="img" id="img" src={more3} /></div>
    <div id="share" ><img alt="img" id="img" src={share} /></div>
    <div id="reportm1" ><img alt="img" id="img" src={report} /></div>
    <div id="reportm2" ><img alt="img" id="img" src={starsing} /></div>
    <div id="getbut" >{chkpay("pay")}</div>
    <div id={dstate} >
    <div id="coric" ><img alt="img" id="img" style={{marginRight:"10px",marginBottom:"-5px"}} src={share} />Share</div>
    <div id="coric" ><img alt="img" id="img" style={{marginRight:"10px",marginBottom:"-5px"}} src={report} />Report</div>
    <div id="coric" ><img alt="img" id="img" style={{marginRight:"10px",marginBottom:"-5px"}} src={starsing} />Rating</div>
    </div>
    </div>
    <div></div>
    </div> </div></div>

<div id="liscroll" >
<div id="fox" >
<div id="pback" onClick={e=> {sdp();settedata(book1)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book1} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book2)}} ><div id="bond" >{ddr2}</div> <img alt='img' id='imgfit' src={book2} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book3)}} ><div id="bond" >{ddr3}</div> <img alt='img' id='imgfit' src={book3} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book21)}} ><div id="bond" >{ddr4}</div> <img alt='img' id='imgfit' src={book21} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book5)}} ><div id="bond" >{ddro}</div> <img alt='img' id='imgfit' src={book5} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book6)}} ><div id="bond" >{ddr6}</div> <img alt='img' id='imgfit' src={book6} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book7)}} ><div id="bond" >{ddr7}</div> <img alt='img' id='imgfit' src={book7} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book8)}} ><div id="bond" >{ddr9}</div> <img alt='img' id='imgfit' src={book8} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book9)}} ><div id="bond" >{ddr0}</div> <img alt='img' id='imgfit' src={book9} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book10)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book10} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book11)}} ><div id="bond" >{ddr2}</div> <img alt='img' id='imgfit' src={book11} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book12)}} ><div id="bond" >{ddr3}</div> <img alt='img' id='imgfit' src={book12} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book13)}} ><div id="bond" >{ddr4}</div> <img alt='img' id='imgfit' src={book13} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book14)}} ><div id="bond" >{ddro}</div> <img alt='img' id='imgfit' src={book14} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book15)}} ><div id="bond" >{ddro}</div> <img alt='img' id='imgfit' src={book15} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book16)}} ><div id="bond" >{ddr6}</div> <img alt='img' id='imgfit' src={book16} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book17)}} ><div id="bond" >{ddr7}</div> <img alt='img' id='imgfit' src={book17} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book18)}} ><div id="bond" >{ddr9}</div> <img alt='img' id='imgfit' src={book18} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book19)}} ><div id="bond" >{ddr0}</div> <img alt='img' id='imgfit' src={book19} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book20)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book20} /></div>

<div id="pback" onClick={e=> {sdp();settedata(book1)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book1} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book2)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book2} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book3)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book3} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book21)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book21} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book5)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book5} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book6)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book6} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book7)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book7} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book8)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book8} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book9)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book9} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book10)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book10} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book11)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book11} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book12)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book12} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book13)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book13} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book14)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book14} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book15)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book15} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book16)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book16} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book17)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book17} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book18)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book18} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book19)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book19} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book20)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book20} /></div>

</div></div>

<div id="liscroll"  onClick={e=> skipchild(e)} >
<div id="fox" >
<div id="pback" onClick={e=> {sdp();settedata(book10)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book10} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book11)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book11} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book12)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book12} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book1)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book1} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book2)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book2} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book3)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book3} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book21)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book21} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book16)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book16} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book17)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book17} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book18)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book18} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book19)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book19} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book5)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book5} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book6)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book6} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book13)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book13} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book14)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book14} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book15)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book15} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book20)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book20} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book7)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book7} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book8)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book8} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book9)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book9} /></div>

<div id="pback" onClick={e=> {sdp();settedata(book18)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book18} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book19)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book19} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book20)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book20} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book1)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book1} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book10)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book10} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book11)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book11} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book12)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book12} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book13)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book13} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book2)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book2} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book3)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book3} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book21)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book21} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book5)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book5} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book8)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book8} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book9)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book9} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book14)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book14} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book15)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book15} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book16)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book16} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book17)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book17} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book6)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book6} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book7)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book7} /></div>
</div></div>

<div id="liscroll" onClick={e=> skipchild(e)} >
<div id="fox" >
<div id="pback" onClick={e=> {sdp();settedata(book13)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book13} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book14)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book14} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book15)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book15} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book6)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book6} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book7)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book7} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book16)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book16} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book17)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book17} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book18)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book18} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book8)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book8} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book1)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book1} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book10)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book10} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book11)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book11} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book12)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book12} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book2)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book2} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book3)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book3} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book21)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book21} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book9)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book9} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book19)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book19} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book20)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book20} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book5)}} ><div id="bond" >{ddr1}</div> <img alt='img' id='imgfit' src={book5} /></div>

<div id="pback" onClick={e=> {sdp();settedata(book14)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book14} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book15)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book15} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book6)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book6} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book7)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book7} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book17)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book17} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book18)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book18} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book19)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book19} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book20)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book20} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book2)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book2} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book3)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book3} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book21)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book21} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book5)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book5} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book8)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book8} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book9)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book9} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book10)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book10} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book11)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book11} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book12)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book12} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book1)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book1} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book13)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book13} /></div>
<div id="pback" onClick={e=> {sdp();settedata(book16)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book16} /></div>

</div></div>


  <div id="liscroll" onClick={e=> skipchild(e)} >
    <div id="fox" >
    <div id="pback" onClick={e=> {sdp();settedata(book21)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book21} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book5)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book5} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book6)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book6} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book14)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book14} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book15)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book15} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book16)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book16} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book7)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book7} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book8)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book8} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book9)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book9} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book10)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book10} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book11)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book11} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book12)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book12} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book13)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book13} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book1)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book1} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book2)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book2} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book3)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book3} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book17)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book17} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book18)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book18} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book19)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book19} /></div>
    <div id="pback" onClick={e=> {sdp();settedata(book20)}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book20} /></div>

    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book16} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book17} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book12} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book13} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book14} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book18} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book2} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book3} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book21} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book5} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book1} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book6} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book7} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book8} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book9} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book10} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book11} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book15} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book19} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='imgfit' src={book20} /></div>
    
  </div></div>


  <div id="liscroll" onClick={e=> skipchild(e)} >
    <div id="fox" >
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book10} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book11} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book12} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book13} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book2} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book3} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book21} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book9} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book14} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book5} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book6} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book18} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book19} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book20} /></div>

    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book7} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book8} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book15} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book16} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book17} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book18} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book19} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book1} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book16} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book17} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book1} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book2} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book9} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book10} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book11} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book12} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book13} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book3} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book21} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book5} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book6} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book7} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book8} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book14} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book15} /></div>
    <div id="pback" onClick={e=> {sdp();settedata()}} ><div id="bond" >{ddr1}</div><img alt='img' id='img' src={book20} /></div>
    
  </div></div>
   </div>
  )
}
