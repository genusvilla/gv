import React, {useState,useRef,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

import Compress from "react-image-file-resizer";

import genus from './asset/genus.svg';
import icon from './asset/icon.svg';
import villa from './asset/villa.svg';
import loading from './asset/loading.svg';
//import user from './asset/user.svg';
import userx from './asset/SVG/userx.svg';
import forward from './asset/arrow-foward_w.svg';
import back from './asset/arrow-back_w.svg';
import back2 from './asset/back2.svg';
import menu from './asset/menu.svg';
import lenses from './asset/Lenses.jpg';
import preloader from './asset/SVG/preloader.svg';

import Cuntryco from './cuntry_select.js';
import Bookslib from './bookslib.js';
import Tc from './t&c.js';
import Cbt from './cbt.js';


import pixel from './asset/pexels-gra1.jpg';
import pixel2 from './asset/pexels-gra2.jpg';
import pixel3 from './asset/pexels-gra3.jpg';
import pixel4 from './asset/pexels-gra4.jpg';
import pixel5 from './asset/4krotate.jpg'; 
import pixel6 from './asset/gradient-8k.png'; 
import pixel7 from './asset/black.jpg'; 
import classroom from './asset/SVG/classroom.svg';
import home from './asset/SVG/home.svg';
import packages from './asset/SVG/packages.svg';
import connect from './asset/SVG/connect.svg';
import library from './asset/SVG/library.svg';
import events from './asset/SVG/events.svg';
import Question from './asset/SVG/Question.svg';
import projectz from './asset/SVG/projectz.svg';
import project1 from './asset/SVG/project1.svg';
//import settings from './asset/SVG/settings.svg';
import setting2 from './asset/SVG/setting2.svg';
//import messages from './asset/SVG/messages.svg';
//import profile from './asset/SVG/profile.svg';
//import logout from './asset/SVG/logout.svg';
//import theme from './asset/SVG/theme.svg';
//import bok from './asset/SVG/books_ico.svg';
//import rating from './asset/SVG/rating.svg';
import gradient from './asset/SVG/quantum-gradient.svg';
import clock from './asset/SVG/clock.svg';
//import books from './asset/SVG/reading.svg';
//import reading from './asset/SVG/books.svg';
//import lecture from './asset/SVG/lecture-class.svg';
import statistics from './asset/SVG/statistics-teacher.svg';
import blackboard from './asset/SVG/blackboard.svg';
import notepad from './asset/SVG/notepad.svg';
import reading1 from './asset/SVG/reading_student.svg';
import knowledge from './asset/SVG/knowledge.svg';
import credit from './asset/SVG/card-credit.svg';
import reward from './asset/SVG/reward.svg';
import paintbrush from './asset/SVG/paintbrush.svg';
import msg from './asset/SVG/msg.svg';
//import msg2 from './asset/SVG/message.svg';
//import chat2 from './asset/SVG/chat.svg';
import chat from './asset/SVG/chat-talk.svg';
import search from './asset/SVG/search-md.svg';
import mastercard from './asset/SVG/mastercard.svg';
//import rose1 from './asset/SVG/rose-petals.svg';
//import rose2 from './asset/SVG/sun.svg';
import rose from './asset/SVG/vanishing.svg';
//import wallet from './asset/SVG/wallet.svg';
import history from './asset/SVG/history.svg';
import tdbc from './asset/2Dqr-code.svg';
import usdtt from './asset/usdt.svg';
import hum from './asset/humans.svg';
import man from './asset/man.svg';
import dollar from './asset/SVG/dollar.svg';
import cloud from './asset/SVG/cloud.svg';
import signout from './asset/SVG/signout.svg';
import messege from './asset/SVG/messege.svg';
import reff from './asset/SVG/reff.svg';
import themec from './asset/SVG/themec.svg';
import give from './asset/SVG/give.svg';
import students from './asset/SVG/students.svg';
import Teachers from './asset/SVG/Teachers.svg';
import Awards from './asset/SVG/Awards.svg';
import admuser from './asset/SVG/admuser.svg';
import more from './asset/SVG/more.svg';
import historyy from './asset/SVG/historyy.svg';
import teacher from './asset/SVG/teacher.svg';
import arrowup from './asset/SVG/arrow-up.svg';
import addqimg from './asset/SVG/add-imagec.svg';
import backo from './asset/back.svg';
import coupon  from './asset/coupon.svg';
import test  from './asset/test.svg';
import ans  from './asset/qes.svg';
import likeer  from './asset/SVG/like.svg';
import verified  from './asset/SVG/verified.svg';

import pm from './asset/Perfect_M.png';


import rosegold from './asset/theme/rosegold.svg';
import pinknation from './asset/theme/pinknation.svg';
import coralgreen from './asset/theme/coralgreen.svg';
import purplecrown from './asset/theme/purplecrown.svg';
import skyblue from './asset/theme/skyblue.svg';
import carbonblack from './asset/theme/carbonblack.svg';
import magenta from './asset/theme/magenta.svg';


import bio1 from './asset/SVG/bio1.svg';
import bio2 from './asset/SVG/bio2.svg';
import bio3 from './asset/SVG/bio3.svg';
import bio4 from './asset/SVG/bio4.svg';
import bio5 from './asset/SVG/bio5.svg';
import bio6 from './asset/SVG/bio6.svg';
import bio7 from './asset/SVG/bio7.svg';
//import bio8 from './asset/SVG/bio8.svg';
//import bio9 from './asset/SVG/bio9.svg';



import gclass from './asset/class_icon/gen_class.jpg';
import toefil from './asset/class_icon/toefil.jpg';
import ielts from './asset/class_icon/ielts.jpg';
import utme from './asset/class_icon/utme.jpg';
import jamb from './asset/class_icon/Jamb_c.jpg';
import ssce from './asset/class_icon/ssce.jpg';
import noun from './asset/class_icon/noun.jpg';
import advanced from './asset/class_icon/advanced.webp';
import tertiary from './asset/class_icon/tesh_class.jpg';



//import fnames from './firstnames.json';
//import freezer from './freezer.js';
import './App.css';
import './ultra.css';
import axios from 'axios';

//const axios = require('axios');

function App() {
  
  
  useEffect(() => {

   //setrfn(randomize(fnames))
   //setrln(randomize(fnames))

   setInterval(() => {
     const date = new Date()
     setrealtime(date.toLocaleTimeString())
   }, 1000);

  }, [])

//  function randomize(i) {
//
//    const xmm = Math.floor(Math.random() * i.length);
//    return(xmm, i[xmm]);
//    }


//const nkref = window.location.href
  const _link = window.location.pathname
 // const host = window.location.origin

  /*
  onresize = (event) => {};
  */

  const resuser = useRef('')
  //const tet = useRef('')


  const [realtime, setrealtime] = useState("")

  const [rfn, setrfn] = useState("")
  

  const [mpo, setmpo] = useState({display:"none"})
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState("")
  const [country, setcountry] = useState('')
  const [phone, setphone] = useState('')
  const [qlink, setqlink] = useState('')
  const [refferal, setrefferal] = useState('')
  const [pin, setpin] = useState('')
  const [refr, setrefr] = useState('')
  const [usdt, setusdt] = useState('')
  const [password, setpassword] = useState('')
  const [password2, setpassword2] = useState('')
  const [gory, setgory] = useState("All")


  const [account, setaccount] = useState([])
  const [notify, setnotify] = useState([])
  const [questions, setquestions] = useState([])
  
  const [uplace, setuplace] = useState("Enter Email")
  const [ebgc, setebgc] = useState({backgroundColor:"white"})
  const [page, setpage] = useState()
  const [H, setH] = useState(parseInt(window.innerHeight))
  const [W, setW] = useState(parseInt(window.innerWidth))
const [remember, setremember] = useState()
const [load, setload] = useState(0)
const [loat, setloat] = useState('none')
const [formcase, setformcase] = useState('transcrollX')
const [popstate, setpopstate] = useState(1)
const [_note, set_note] = useState('')
const [_noted, set_noted] = useState('')
const [polom, setpolom] = useState("")
const [gig, setgig] = useState("")
const [noteh, setnoteh] = useState('')
const [notedh, setnotedh] = useState('')
const [walltype, setwalltype] = useState(1)
const [wall, setwall] = useState(pixel5)
const [wallx, setwallx] = useState(pixel5)
const [Img_DAta, setImgDAta] = useState(null)
const [ss, setss] = useState(1)
const [prop, setprop] = useState("")
const [sll, setsll] = useState('moslide1')
const [accountterms, setaccountterms] = useState(false)
const [dsta, setdsta] = useState({display:"block"})
const [dsta2, setdsta2] = useState({display:"block"})
const [mbar, setmbar] = useState("minibarx")
const [ts1, setts1] = useState("flisk")
const [dosage, setdosage] = useState("dosage")
const [overdose, setoverdose] = useState("overdose")
const [vform, setvform] = useState({display:"none"})
const [orbwi, setorbwi] = useState(0)
const [txx, settxx] = useState(1)
const [claa, setclaa] = useState(1)
const [bcc, setbcc] = useState({backgroundColor:"rgba(217, 217, 217, 0.857)",boxShadow: "0px 0px 10px 1px rgba(38, 38, 38, 0.629)"})

const [_pim, set_pim] = useState(1)
const [ev1, setev1] = useState(1)
const [mao, setmao] = useState(1)
const [mrdm, setmrdm] = useState("")
const [mrdm2, setmrdm2] = useState("")
const [any, setany] = useState("anyname")
const [blocker, setblocker] = useState({display:"none"})
const [minisub, setminisub] = useState(1)
const [lseq, setlseq] = useState(1)
const [submenu, setsubmenu] = useState(0)
const [rbb, setrbb] = useState(2)
const [kok, setkok] = useState("kok")
const [kok2, setkok2] = useState("kok2")
const [stopdis, setstopdis] = useState("stopdis")
const [adm, setadm] = useState(1)
const [pio, setpio] = useState("pio")
const [po, setpo] = useState(0)
const [histo, sethisto] = useState(0)
const [datatester, setdatatester] = useState("")
const [filesize, setfilesize] = useState()
const [urii, seturii] = useState(null)
const [mkpu, setmkpu] = useState(1)
const [pios, setpios] = useState("poin")
const [pios2, setpios2] = useState("poin")
const [vex, setvex] = useState("")
const [ex, setex] = useState("")
const dsp = {display:"block"}
const [pluss, setpluss] = useState(0)
const [strx, setstrx] = useState(0)
const [ldn, setldn] = useState(1)
const [wed, setwed] = useState("wedd2")
const [sub, setsub] = useState("English")
const [quskii, setquskii] = useState("quorapikin")
const [pichiki, setpichiki] = useState("What do you want to ask or share?")
const [quest, setquest] = useState("")
const [aann, setaann] = useState("x")

const [js1, setjs1] = useState([])
const [js2, setjs2] = useState([])
const [js3, setjs3] = useState([])
const [js4, setjs4] = useState([])

const [tempdis, settempdis] = useState(1)
const [tempdisx, settempdisx] = useState(1)
const [tempdis2, settempdis2] = useState({display:"none"})

const [ac, setac] = useState("")
const [subject, setsubject] = useState("")
const [question, setquestion] = useState("")
const [qimg, setqimg] = useState(null)
const [A, setA] = useState("")
const [B, setB] = useState("")
const [C, setC] = useState("")
const [D, setD] = useState("")
const [E, setE] = useState("")
const [ANS, setANS] = useState("")
const [uid, setuid] = useState("")

const [aqindex1, setaqindex1] = useState(1)
const [aqindex2, setaqindex2] = useState(1)
const [aqindex3, setaqindex3] = useState(1)
const [aqindex4, setaqindex4] = useState(1)

const [ans1, setans1] = useState("")
const [ans2, setans2] = useState("")
const [ans3, setans3] = useState("")
const [ans4, setans4] = useState("")
const [ans5, setans5] = useState("")
const [ans6, setans6] = useState("")
const [ans7, setans7] = useState("")
const [ans8, setans8] = useState("")
const [ans9, setans9] = useState("")
const [ans10, setans10] = useState("")
const [ans11, setans11] = useState("")
const [ans12, setans12] = useState("")
const [ans13, setans13] = useState("")
const [ans14, setans14] = useState("")
const [ans15, setans15] = useState("")
const [ans16, setans16] = useState("")
const [ans17, setans17] = useState("")
const [ans18, setans18] = useState("")
const [ans19, setans19] = useState("")
const [ans20, setans20] = useState("")

const [bns1, setbns1] = useState("")
const [bns2, setbns2] = useState("")
const [bns3, setbns3] = useState("")
const [bns4, setbns4] = useState("")
const [bns5, setbns5] = useState("")
const [bns6, setbns6] = useState("")
const [bns7, setbns7] = useState("")
const [bns8, setbns8] = useState("")
const [bns9, setbns9] = useState("")
const [bns10, setbns10] = useState("")
const [bns11, setbns11] = useState("")
const [bns12, setbns12] = useState("")
const [bns13, setbns13] = useState("")
const [bns14, setbns14] = useState("")
const [bns15, setbns15] = useState("")
const [bns16, setbns16] = useState("")
const [bns17, setbns17] = useState("")
const [bns18, setbns18] = useState("")
const [bns19, setbns19] = useState("")
const [bns20, setbns20] = useState("")

const [cns1, setcns1] = useState("")
const [cns2, setcns2] = useState("")
const [cns3, setcns3] = useState("")
const [cns4, setcns4] = useState("")
const [cns5, setcns5] = useState("")
const [cns6, setcns6] = useState("")
const [cns7, setcns7] = useState("")
const [cns8, setcns8] = useState("")
const [cns9, setcns9] = useState("")
const [cns10, setcns10] = useState("")
const [cns11, setcns11] = useState("")
const [cns12, setcns12] = useState("")
const [cns13, setcns13] = useState("")
const [cns14, setcns14] = useState("")
const [cns15, setcns15] = useState("")
const [cns16, setcns16] = useState("")
const [cns17, setcns17] = useState("")
const [cns18, setcns18] = useState("")
const [cns19, setcns19] = useState("")
const [cns20, setcns20] = useState("")

const [dns1, setdns1] = useState("")
const [dns2, setdns2] = useState("")
const [dns3, setdns3] = useState("")
const [dns4, setdns4] = useState("")
const [dns5, setdns5] = useState("")
const [dns6, setdns6] = useState("")
const [dns7, setdns7] = useState("")
const [dns8, setdns8] = useState("")
const [dns9, setdns9] = useState("")
const [dns10, setdns10] = useState("")
const [dns11, setdns11] = useState("")
const [dns12, setdns12] = useState("")
const [dns13, setdns13] = useState("")
const [dns14, setdns14] = useState("")
const [dns15, setdns15] = useState("")
const [dns16, setdns16] = useState("")
const [dns17, setdns17] = useState("")
const [dns18, setdns18] = useState("")
const [dns19, setdns19] = useState("")
const [dns20, setdns20] = useState("")

const fans1 = [ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10,ans11,ans12,ans13,ans14,ans15,ans16,ans17,ans18,ans19,ans20]
const fans2 = [bns1,bns2,bns3,bns4,bns5,bns6,bns7,bns8,bns9,bns10,bns11,bns12,bns13,bns14,bns15,bns16,bns17,bns18,bns19,bns20]
const fans3 = [cns1,cns2,cns3,cns4,cns5,cns6,cns7,cns8,cns9,cns10,cns11,cns12,cns13,cns14,cns15,cns16,cns17,cns18,cns19,cns20]
const fans4 = [dns1,dns2,dns3,dns4,dns5,dns6,dns7,dns8,dns9,dns10,dns11,dns12,dns13,dns14,dns15,dns16,dns17,dns18,dns19,dns20]
function dfans(i,x) { if(fans1[i-1]===x){return({display:"block"})}else{return({display:"none"})} }
function dfans2(i,x) { if(fans2[i-1]===x){return({display:"block"})}else{return({display:"none"})} }
function dfans3(i,x) { if(fans3[i-1]===x){return({display:"block"})}else{return({display:"none"})} }
function dfans4(i,x) { if(fans4[i-1]===x){return({display:"block"})}else{return({display:"none"})} }

function ffans(i,x) { 
  if(i===1){setans1(x)}
  if(i===2){setans2(x)}
  if(i===3){setans3(x)}
  if(i===4){setans4(x)}
  if(i===5){setans5(x)}
  if(i===6){setans6(x)}
  if(i===7){setans7(x)}
  if(i===8){setans8(x)}
  if(i===9){setans9(x)}
  if(i===10){setans10(x)}
  if(i===11){setans11(x)}
  if(i===12){setans12(x)}
  if(i===13){setans13(x)}
  if(i===14){setans14(x)}
  if(i===15){setans15(x)}
  if(i===16){setans16(x)}
  if(i===17){setans17(x)}
  if(i===18){setans18(x)}
  if(i===19){setans19(x)}
  if(i===10){setans10(x)}
 }

 
function ffans2(i,x) { 
  if(i===1){setans1(x)}
  if(i===2){setans2(x)}
  if(i===3){setans3(x)}
  if(i===4){setans4(x)}
  if(i===5){setans5(x)}
  if(i===6){setans6(x)}
  if(i===7){setans7(x)}
  if(i===8){setans8(x)}
  if(i===9){setans9(x)}
  if(i===10){setans10(x)}
  if(i===11){setans11(x)}
  if(i===12){setans12(x)}
  if(i===13){setans13(x)}
  if(i===14){setans14(x)}
  if(i===15){setans15(x)}
  if(i===16){setans16(x)}
  if(i===17){setans17(x)}
  if(i===18){setans18(x)}
  if(i===19){setans19(x)}
  if(i===10){setans10(x)}
 }


 function ffans3(i,x) { 
  if(i===1){setans1(x)}
  if(i===2){setans2(x)}
  if(i===3){setans3(x)}
  if(i===4){setans4(x)}
  if(i===5){setans5(x)}
  if(i===6){setans6(x)}
  if(i===7){setans7(x)}
  if(i===8){setans8(x)}
  if(i===9){setans9(x)}
  if(i===10){setans10(x)}
  if(i===11){setans11(x)}
  if(i===12){setans12(x)}
  if(i===13){setans13(x)}
  if(i===14){setans14(x)}
  if(i===15){setans15(x)}
  if(i===16){setans16(x)}
  if(i===17){setans17(x)}
  if(i===18){setans18(x)}
  if(i===19){setans19(x)}
  if(i===10){setans10(x)}
 }

 
function ffans4(i,x) { 
  if(i===1){setans1(x)}
  if(i===2){setans2(x)}
  if(i===3){setans3(x)}
  if(i===4){setans4(x)}
  if(i===5){setans5(x)}
  if(i===6){setans6(x)}
  if(i===7){setans7(x)}
  if(i===8){setans8(x)}
  if(i===9){setans9(x)}
  if(i===10){setans10(x)}
  if(i===11){setans11(x)}
  if(i===12){setans12(x)}
  if(i===13){setans13(x)}
  if(i===14){setans14(x)}
  if(i===15){setans15(x)}
  if(i===16){setans16(x)}
  if(i===17){setans17(x)}
  if(i===18){setans18(x)}
  if(i===19){setans19(x)}
  if(i===10){setans10(x)}
 }
 
function ai(i) {
  if(JSON.stringify(i)==="[]"){return({})}else{return(i[0])}
}

 const [aq1, setaq1] = useState([])
 const [aq2, setaq2] = useState([])
 const [aq3, setaq3] = useState([])
 const [aq4, setaq4] = useState([])
 const [aq5, setaq5] = useState([])
 const [aq6, setaq6] = useState([])
 const [aq7, setaq7] = useState([])
 const [aq8, setaq8] = useState([])
 const [aq9, setaq9] = useState([])
 const [aq10, setaq10] = useState([])
 const [aq11, setaq11] = useState([])
 const [aq12, setaq12] = useState([])
 const [aq13, setaq13] = useState([])
 const [aq14, setaq14] = useState([])
 const [aq15, setaq15] = useState([])
 const [aq16, setaq16] = useState([])
 const [aq17, setaq17] = useState([])
 const [aq18, setaq18] = useState([])
 const [aq19, setaq19] = useState([])
 const [aq20, setaq20] = useState([])

const SB1 = [ai(aq1),ai(aq2),ai(aq3),ai(aq4),ai(aq5),ai(aq6),ai(aq7),ai(aq8),ai(aq9),ai(aq10),ai(aq11),ai(aq12),ai(aq13),ai(aq14),ai(aq15),ai(aq16),ai(aq17),ai(aq18),ai(aq19),ai(aq20)]

 
const [bq1, setbq1] = useState([])
const [bq2, setbq2] = useState([])
const [bq3, setbq3] = useState([])
const [bq4, setbq4] = useState([])
const [bq5, setbq5] = useState([])
const [bq6, setbq6] = useState([])
const [bq7, setbq7] = useState([])
const [bq8, setbq8] = useState([])
const [bq9, setbq9] = useState([])
const [bq10, setbq10] = useState([])
const [bq11, setbq11] = useState([])
const [bq12, setbq12] = useState([])
const [bq13, setbq13] = useState([])
const [bq14, setbq14] = useState([])
const [bq15, setbq15] = useState([])
const [bq16, setbq16] = useState([])
const [bq17, setbq17] = useState([])
const [bq18, setbq18] = useState([])
const [bq19, setbq19] = useState([])
const [bq20, setbq20] = useState([])

const SB2 = [ai(bq1),ai(bq2),ai(bq3),ai(bq4),ai(bq5),ai(bq6),ai(bq7),ai(bq8),ai(bq9),ai(bq10),ai(bq11),ai(bq12),ai(bq13),ai(bq14),ai(bq15),ai(bq16),ai(bq17),ai(bq18),ai(bq19),ai(bq20)]


const [cq1, setcq1] = useState([])
const [cq2, setcq2] = useState([])
const [cq3, setcq3] = useState([])
const [cq4, setcq4] = useState([])
const [cq5, setcq5] = useState([])
const [cq6, setcq6] = useState([])
const [cq7, setcq7] = useState([])
const [cq8, setcq8] = useState([])
const [cq9, setcq9] = useState([])
const [cq10, setcq10] = useState([])
const [cq11, setcq11] = useState([])
const [cq12, setcq12] = useState([])
const [cq13, setcq13] = useState([])
const [cq14, setcq14] = useState([])
const [cq15, setcq15] = useState([])
const [cq16, setcq16] = useState([])
const [cq17, setcq17] = useState([])
const [cq18, setcq18] = useState([])
const [cq19, setcq19] = useState([])
const [cq20, setcq20] = useState([])

const SB3 = [ai(cq1),ai(cq2),ai(cq3),ai(cq4),ai(cq5),ai(cq6),ai(cq7),ai(cq8),ai(cq9),ai(cq10),ai(cq11),ai(cq12),ai(cq13),ai(cq14),ai(cq15),ai(cq16),ai(cq17),ai(cq18),ai(cq19),ai(cq20)]


const [dq1, setdq1] = useState([])
const [dq2, setdq2] = useState([])
const [dq3, setdq3] = useState([]) 
const [dq4, setdq4] = useState([])
const [dq5, setdq5] = useState([])
const [dq6, setdq6] = useState([])
const [dq7, setdq7] = useState([])
const [dq8, setdq8] = useState([])
const [dq9, setdq9] = useState([])
const [dq10, setdq10] = useState([])
const [dq11, setdq11] = useState([])
const [dq12, setdq12] = useState([])
const [dq13, setdq13] = useState([])
const [dq14, setdq14] = useState([])
const [dq15, setdq15] = useState([])
const [dq16, setdq16] = useState([])
const [dq17, setdq17] = useState([])
const [dq18, setdq18] = useState([])
const [dq19, setdq19] = useState([])
const [dq20, setdq20] = useState([])



const SB4 = [ai(dq1),ai(dq2),ai(dq3),ai(dq4),ai(dq5),ai(dq6),ai(dq7),ai(dq8),ai(dq9),ai(dq10),ai(dq11),ai(dq12),ai(dq13),ai(dq14),ai(dq15),ai(dq16),ai(dq17),ai(dq18),ai(dq19),ai(dq20)]


function xox(i) {
  if(i===gory){return("busu")}else{return("busu2")}
}

const [gorylie, setgorylie] = useState("All")
function xox2(i) {
  if(i===gorylie){return("jumia")}else{return("jumia2")}
}


function subdip(i) { if(sub===i){return({display:"block"})}else{return({display:"none"})} }

const tst = {
  "account":claa,
  "upload":ex,
  "subject":subject,
  "question":question,
  "qimg":qimg,
  "A":A,
  "B":B,
  "C":C,
  "D":D,
  "E":E,
  "ANS":ANS,
  "id":uid
}
const tst2 = {
  "subject":subject,
  "id":uid
}

const [holly, setholly] = useState("jik1")
const [holly2, setholly2] = useState("jik2")

const j1 = "English"
const [j2, setj2] = useState(null)
const [j3, setj3] = useState(null)
const [j4, setj4] = useState(null)

const jex = [j2,j3,j4]

const [tfs, setfs] = useState(0)



useEffect(() => { 
 //initialize() 
 freezer()
}, [])

function freezer() {
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 1);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 2);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 3);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 4);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 5);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 6);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 7);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 8);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 9);

setTimeout(() => {window.history.pushState("object or string", "Title", )}, 10);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 11);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 12);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 13);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 14);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 15);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 16);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 17);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 18);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 19);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 20);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 21);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 22);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 23);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 24);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 25);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 26);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 27);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 28);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 29);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 30);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 31);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 32);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 33);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 34);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 35);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 36);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 37);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 38);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 39);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 40);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 41);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 42);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 43);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 44);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 45);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 46);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 47);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 48);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 49);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 50);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 51);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 52);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 53);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 54);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 55);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 56);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 57);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 58);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 59);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 60);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 61);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 62);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 63);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 64);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 65);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 66);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 67);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 68);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 69);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 70);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 71);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 72);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 73);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 74);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 75);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 76);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 77);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 78);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 79);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 80);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 81);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 82);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 83);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 84);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 85);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 86);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 87);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 88);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 89);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 90);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 91);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 92);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 93);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 94);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 95);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 96);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 97);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 98);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 99);
setTimeout(() => {window.history.pushState("object or string", "Title", )}, 100);
}


function pop2(i,x) { set_noted(i);setnotedh(x);setsll("moslide1") }


function block(i) {  setblocker({display:"block"}); setTimeout(() => {setblocker({display:"none"})}, 1000); }


  function setloadtime(i) {setload(1);setloat('block')
  setTimeout(() => { setload(0)}, i); 
  setTimeout(() => {setloat('none')}, i+1000); 
  }
  function loadtime(){ if(load>0){return("preloader")}else{return("preloader0")}}

 // function delayProcess(delay, callback) {
 //   setTimeout(function(){
 //     callback({display:"none"});
 //   },1000);
 // }

  
  function keypress(e) {
    if(e.key === "Enter"){login()}
  }
  

  //__________________________________________________________________________________________________________________________________________

  function onFileResize(e){
    const file = e.target.files[0];
   // const prev = document.getElementById("ironclow2");
    //const imgData = URL.createObjectURL(file);
  
  Compress.imageFileResizer(
  file, // the file from input
  300, // width
  300, // height
  "JPEG", // compress format WEBP, JPEG, PNG
  70, // quality
  0, // rotation
  (uri) => {
    IMGpro(uri,"Raw")
    seturii(uri);
    //setIMGdata(uri)
    lengthInUtf8Bytes();
    //console.log(uri);
    // You upload logic goes here
   // prev.src = uri;
  
  // var myBuffer = [];
  // var str = uri;
  // var buffer = /*nwe*/ Buffer(str, 'UTF-8');
  // for (var i = 0; i < buffer.length; i++) {
  //     myBuffer.push(buffer[i]);
  // }
  
    function lengthInUtf8Bytes() {
      const str = uri.toString();
      // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
      var m = encodeURIComponent(str).match(/%[89ABab]/g);
      var bytes =str.length + (m ? m.length : 0);
      //return str.length + (m ? m.length : 0);
      const i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
      return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    };
  
  setdatatester(lengthInUtf8Bytes()+"reduced");
  
  },
  "base64" // blob or base64 default base64
  );
  }

  function IMGpro(uri,h){  }

  
async function PROimg(e) {
  const file = e.target.files[0];
  const fileRead = new FileReader();
  fileRead.readAsDataURL(file);

  
  function nimage() {
    fileRead.onloadend = function() {
      seturii(fileRead.result);
      IMGpro(fileRead.result,"Compressed");
    }
  }
    if(file.size>30000){  onFileResize(e); }else 
    if(e.target.files.length > 0 ){
      //prev.src = imgData;
      nimage();
      //setIMGdata(imgData)
    }
  
    function lengthInUtf8Bytes() {
     const bytes = file.size
      const i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
      return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    };
    setfilesize(lengthInUtf8Bytes())
    //set_fs(file.size)

    fileRead.onerror = function () {
    URL.revokeObjectURL(this.imgData);
    // Handle the failure properly
    alert("Cannot load image");
  };
    //setimginitial({display:"block"})
    //setimghold({display:"none"})
}

//function Uni_size(fi) {
//  const bytes = fi.size
//   const i = Math.floor(Math.log(bytes) / Math.log(1024)),
//     sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
// 
//     return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
//   //if(bytes===undefined){return("0B")}else{return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];}
// };

  //___________________________________________________________________________________________________________________________________________


  function shrinkfile(e){
    const file = e.target.files[0];
    //const imgData = URL.createObjectURL(file);
  
  Compress.imageFileResizer(
  file, // the file from input
  300, // width
  300, // height
  "JPEG", // compress format WEBP, JPEG, PNG
  70, // quality
  0, // rotation
  (uri) => {
    setqimg(uri);
  },
  "base64" // blob or base64 default base64
  );
  }

  function testimage(e) {
    
  const file = e.target.files[0];
  //const imgData = URL.createObjectURL(file);
  const fileRead = new FileReader();
  fileRead.readAsDataURL(file);

  function nimage() {
    fileRead.onloadend = function() {
      setqimg(fileRead.result);
    }
  }
  if(file.size>30000){  shrinkfile(e); }else 
  if(e.target.files.length > 0 ){
    //prev.src = imgData;
    nimage();
    //setIMGdata(imgData)
  }

  }

  //___________________________________________________________________________________________________________________________________________

  function account_tc() {if(accountterms === false){setaccountterms(true)}else{setaccountterms(false)}}
  

  function link(i) { 
    if(i===_link.toString()){ return({display:"block"}) }else{ return({display:"none"})} 
   }

  function _claa(i) {
    if(claa===i){ return({display:"block"}) }else{ return({display:"none"})}
  }
  function mkpurua(i) {  if(i=== mkpu){ return("mkpuru") }else{ return("mkpurus")}}
  function pss(i) { if(i===popstate){return({display:"block"})}else{return({display:"none"})}}
  function  prerun(i) {
    setloadtime(1000);
    setpopstate(0);
    setTimeout(() => {
      setpopstate(i)
    }, 1400);
  }

  function rdm() { if(mrdm.length>0){return({display:"block"})}else{return({display:"none"})} }
  function rdm2() { if(mrdm2.length>0){return({display:"block"})}else{return({display:"none"})} }
  function note() { if(_note.length>0){return({display:"block"})}else{return({display:"none"})} }
  function noted() { if(_noted.length>0){return({display:"block"})}else{return({display:"none"})} }
  function vexd() { if(vex.length>0){return({display:"block"})}else{return({display:"none"})} }
  function polo() { if(polom.length>0){return({display:"block"})}else{return({display:"none"})} }
  function jigi() { if(gig.length>0){return({display:"block"})}else{return({display:"none"})} }
  function iif(i) { if(i===ldn){return({display:"block"})}else{return({display:"none"})} }
  function plus() { if(pluss===1){return("haa")}else{return("DN")} }
  function runplus() { if(pluss===1){setpluss(0)}else{setpluss(1) }}
  
  function ifld() {
    if(ldn===1){setldn(2)}else{setldn(1)}
  }
    

    function lps(a,b){
      document.getElementById("unimputus").value =''
     const ts = "invalid username or password"
     setebgc({backgroundColor:"#ffdbdd"})
     setuplace(ts);setstrx(0)
    // ee1.value ='ddddsa'
    }

    const accountdata = 
    {  balance:"0",
       fullname:fullname,
       email:email,
       country:country,
       phone:phone,
       password:password,
       refferal:refferal,
       qlink:qlink,
       pin:pin,
       ref:refr,
       usdt:usdt,
       id:uuidv4()
      }

      const imgDB = 
      { email:email,
        img:urii,
        id:uuidv4()
        }


      function login() {
        const pllx = document.getElementById("imgrid")
        setstrx(1)
          
        if(email==="admin"){llc1()}else{pllx.click()}
      
        function llc1(){if(password==="admin"){setpio("pio2");seturii(admuser);setkss(11);setadm(2);flipcard();setaccount([{fullname:"Super admin"}]); runseq();setstrx(0);}else{pllx.click()}}

    }
        function pgml() {
          
          axios.post("http://192.168.0.2:5001/account/find",{"email":email})
          .then(function (res){ if(JSON.stringify(res.data)==="[]"){}else{seturii(res.data[0].img)};mainloging()  })
          .catch(function (error) { });
        }

           function mainloging(){
        setTimeout(() => {      
            //setlseq(1)
            axios.post("http://192.168.0.2:5000/account/find",{"email":email})
            .then(function (res){
     
              if(JSON.stringify(res.data)!=="[]"){
               if(res.data[0].email===email){
               if(res.data[0].password===password){setaccount(res.data);setpio("pio2");setkss(1);setadm(1);flipcard();setstrx(0);runseq(); }else{lps()}
             }else{lps()}
              }else{lps()}
               
              } )
            .catch(function (error) { });
     
       }, 1500);
       
           }
      
  // const flt = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  const vmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //const pwd=/^[A-Za-z]\w{7,14}$/
  //const pwdF=/[A-Z]/

  function rep(i) {
    if(i===1){if(fullname === ""){return("Enter full name")}else{return""}}
    if(i===2){if(email === ""){return("Enter Email")}else{if(!vmail.test(email)){return("Invalid Email")}else{return""}}}
    if(i===3){if(country === ""){return("Select country")}else{return""}}
    if(i===4){if(phone ===""){return("Enter phone")}else{if(phone.length<9){return("invalid phone")}else{return""}}}
    if(i===5){if(password === ""){return("Enter password")}else{if(password.length<8){
      return("password must be upto 8 characters")}else{return""}}}
    if(i===6){if(password !== password2){return("Password does not match")}else{return""}}
  }


  function prosetnotify(y) {
    if(notify.find(i=>i===y)){}else{setnotify([...notify,y])}
  }
  function verify() {
   // prerun(5)
  
   setvform(dsp)

  if(rep(1)===""){
    if(rep(2)===""){
      if(rep(3)===""){
        if(rep(4)===""){
          if(rep(5)===""){
            if(rep(6)===""){if(accountterms === true){prerun(5)}else{prosetnotify("Please read and agree privacy policies and guidelines")}}else{ }
          }else{}
        }else{}
      }else{}
    }else{}
  }else{}

  }

  function createaccount() {

    
   axios.post("http://192.168.0.2:5000/account/find",{"email":email})
   .then(function (res){
     if(JSON.stringify(res.data) !=="[]"){prosetnotify("Email Already in Use")}else{

   setlseq(2)
   axios.post("http://192.168.0.2:5000/account/add",accountdata)
   .then(function (res){if(res){setaccount([accountdata]); runseq();setadm(1)}})
   .catch(function (error) { });

   axios.post("http://192.168.0.2:5001/account/add",imgDB)
   .then(function (res){if(res){}})
   .catch(function (error) { });
 }
   })
  }
  function checkpro() {
   axios.post("http://192.168.0.2:5000/account/find",{"email":email})
   .then(function (res){
     if(JSON.stringify(res.data)==="[]"){verify()}else{ prosetnotify("This email is already in use") }
   })
  }
  

    // Example POST method implementation:
// async function login_test( url = 'http://data.mongodb-api.com/app/data-zbdkg/endpoint/data/v1/action/insertOne', data = JSON.stringify(dataX) ) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
//     //credentials: true, // include, *same-origin, omit
//     headers: {
//       'Accept': '*/*',
//       'vary': 'Origin',
//       'Host': 'data.mongodb-api.com', 
//       //'Access-Control-Request-Headers': 'Origin, Content-Type',
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'strict-transport-security': 'max-age=31536000; includeSubdomains',
//       'api-key': 'efwfppaQzdeBLxeKzKzkeY1bNWj1UsmTz1RGVrJeaTEU6KlVraCet5CCwbLXlZUp',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: data // body data type must match "Content-Type" header
//   }).then(function (res){ alert('done') })
//   .catch(function (error) { alert(error.toString()) });
//   return alert(response.json()); // parses JSON response into native JavaScript objects
// }



function getImg(i){
  PROimg(i) 
  const file = i.currentTarget.files[0]
  if(file){
  const reader = new FileReader();
  reader.onloadend = ()=>  {
    setImgDAta(reader.result);
  };
  reader.readAsDataURL(file);
  }else{setImgDAta(null)}

  /*
  const image = new Image();
  image.crossOrigin = 'Anonymous';
  image.onload = function(){
     const canvas = document.createElement('canvas');
     const context = canvas.getContext('2d');
     canvas.height = this.naturalHeight;
     canvas.width = this.naturalWidth;
     context.drawImage(this, 0, 0);
     var dataURL = canvas.toDataURL();
     callback(dataURL);
  };
  image.src = i;
  setImgDAta(i)
  */
}

function skipchild(e) {
  if(e.nativeEvent) {
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopPropagation();
  }else
  e.preventDefault();
  e.stopPropagation();
}


function sub_m(i) { if(i===submenu){return({display:"block"})}else{return({display:"none"})} }
function sub_mm() { if(minisub===2){setminisub(1)}else{setminisub(2)} }
function ren_m() { if(minisub===2){return({display:"block"})}else{return({display:"none"})} }
function Check_data(i) { if(i===null){return(userx)}else{return(urii)} }
function ree() { if(ss===1){return({display:"block"})}else{return({display:"none"})}  }
function _ev() { if(ev1===1){return({display:"block"})}else{return({display:"none"})}  }
function Check_i(i) { 
  if(i===1){if(Img_DAta!==null){return({display:"none"})}else{return({display:"block"})}} 
  if(i===2){if(Img_DAta===null){return({display:"none"})}else{return({display:"block"})}} }
  function Check_Exi(i) { 
    if(i==null){return(addqimg)}else{return(qimg)} 
  } 
function atex() { if(Img_DAta===null){return("Add Image")}else{return("Change Image")} }
function prodesk(i){ if(i===adm){return({display:"block"})}else{return({display:"none"})} }
function runhisto(i){ if(i===histo){return({display:"block"})}else{return({display:"none"})} }
function gnex(i){ if(parseInt(i)===aqindex1){return({display:"block"})}else{return({display:"none"})} }
function gnex2(i){ if(parseInt(i)===aqindex2){return({display:"block"})}else{return({display:"none"})} }
function gnex3(i){ if(parseInt(i)===aqindex3){return({display:"block"})}else{return({display:"none"})} }
function gnex4(i){ if(parseInt(i)===aqindex4){return({display:"block"})}else{return({display:"none"})} }
function dran1(){ if(js1.length>0){return({display:"block"})}else{return({display:"none"})} }

function rundash() { return("transbar"+ss.toString())}
function ji() { return('jiji-X'+ss.toString()) }
function veryh() { return('verifiedh'+ss.toString()) }
function jipro() { if(ss===1){return('jiji')}else{return('jiji-X'+ss.toString())} }
function sli() { return('slider'+ss.toString()) }
function kjp() { return('kkj'+ss.toString()) }
function pr() { return('proname'+ss.toString()) }
function ds() { return('dash_skin'+ss.toString()) }
function logi() { return('logi'+ss.toString()) }
function foco() { return('fc'+txx.toString()) }
function prvg() { return('svg'+txx.toString()) }
function chu() { return('chalu'+txx.toString()) }
function lor() {if(ss===1){return({display:"block"})}else{return({display:"none"})}}


function runseq() {
  setTimeout(() => {setss(1);block()}, 0);
  setTimeout(() => {setss(2)}, 700);
  setTimeout(() => {setss(3)}, 1400);
  setTimeout(() => {setss(4)}, 2100);
  setTimeout(() => {setss(5)}, 2800);
  setTimeout(() => {setss(6)}, 3500);
  setTimeout(() => {setss(7)}, 4200);
}

function _runseq() {
  setTimeout(() => {setss(7);block()}, 0);
  setTimeout(() => {setss(6)}, 1);
  setTimeout(() => {setss(5)}, 2);
  setTimeout(() => {setss(4)}, 3);
  setTimeout(() => {setss(3)}, 4);
  setTimeout(() => {setss(2)}, 5);
  setTimeout(() => {setss(1)}, 6);
}

const [kss, setkss] = useState(1)
function proslide() {if(sll==="moslide1"){setsll("moslide2")}else{setsll("moslide1")} }
function btts(i) { if(kss===i){return("dash_btts")}else{return("dash_btt")}}
function mclass(i) { if(submenu===0){return("dash_btt")}else{return("dash_btts")}}
function btms(i) { if(kss===i){return("dash_btms")}else{return("dash_btm")}}
function dss(i) { if(kss===i){return({display:"block"})}else{return({display:"none"})}}
function runmao(i) { if(mao===i){return({display:"block"})}else{return({display:"none"})}}
function dpo(i) { if(po===i){return({display:"block"})}else{return({display:"none"})}}


function altsu_m(i){if(submenu !== 0){setsubmenu(0)}else{setsubmenu(i)}}
function invertpin() { if(pios === "poin2"){setpios("poin")}else{setpios("poin2")} }
function poinanim() { if(pios==="poin2"){return({display:"block"})}else{return({display:"none"})}}
function poinanim2() { if(aqindex1>20){return({display:"block"})}else{return({display:"none"})}}

function Myslide() { return(<div onClick={e=> skipchild(e)} >
  
  <div id='col_c' style={{marginTop:"10px"}} onClick={e=> {skipchild(e);sethisto(0);}} >
          <div id='row_c' style={{width:'80%'}} >
        <div id='logosa' >
        <div id="upline">
        <div id='ic1' ><img alt='img' id='unimage' src={icon} /></div><div id='ic2'><img alt='img' id='unimage' src={genus} /></div>
        </div>
        <div id='ic3'><img alt='img' id='unimage' src={villa} /></div>
        </div></div></div>

        <div style={prodesk(1)} id="dkll" onClick={e=> {setkss(1);setsll("moslide1");setsubmenu(0)}} > <div id={btts(1)} ><img alt='img' id="dsi"  src={home}  /><span id='btt_tex'>Home</span></div></div>
        <div style={prodesk(1)} id="dkll" onClick={e=> {setkss(2);setsll("moslide1");setsubmenu(0);setclaa(2)}} > <div id={btts(2)} ><img alt='img' id="dsi"  src={classroom}  /><span id='btt_tex'>Classroom</span></div></div>
        <div style={prodesk(1)} id="dkll" onClick={e=> {setkss(3);setsll("moslide1");setsubmenu(0)}} > <div id={btts(3)} ><img alt='img' id="dsi"  src={packages}  /><span id='btt_tex'>Premium</span></div></div>
        <div style={prodesk(1)} id="dkll" onClick={e=> {setkss(4);setsll("moslide1");setsubmenu(0)}} > <div id={btts(4)} ><img alt='img' id="dsi"  src={connect}  /><span id='btt_tex'>Connect</span></div></div>
        <div style={prodesk(1)} id="dkll" onClick={e=> {setkss(5);setsll("moslide1");setsubmenu(0)}} > <div id={btts(5)} ><img alt='img' id="dsi" src={library}  /><span id='btt_tex'>library </span></div></div>
        <div style={prodesk(1)} id="dkll" onClick={e=> {setkss(6);setsll("moslide1");setsubmenu(0)}} > <div id={btts(6)} ><img alt='img' id="dsi" src={events}  /><span id='btt_tex'>Events</span></div></div>
        <div style={prodesk(1)} id="dkll" onClick={e=> {setkss(7);setsll("moslide1");setsubmenu(0);getans();gibox();getquestions();}} > <div id={btts(7)} ><img alt='img' id="dsi" src={Question}  /><span id='btt_tex'>Question arena</span></div></div>
        <div style={prodesk(1)} id="dkll" onClick={e=> {setkss(8);setsll("moslide1");setsubmenu(0)}} > <div id={btts(8)} ><img alt='img' id="dsi" src={project1}  /><span id='btt_tex'>Projects</span></div></div>
        <div style={prodesk(1)} id="dkll" onClick={e=> {altsu_m(9);setkss(9)}} > <div id={mclass(9)} ><img alt='img' id="dsi"  src={setting2}  /><span id='btt_tex'>Settings</span></div></div>
        <div style={prodesk(1)} ><div id="dklm" style={sub_m(9)} onClick={e=> {setsll("moslide1");setsubmenu(0)}}  > 
        <div id={btms(1)} onClick={e=> setkss(10)} ><img alt='img' id="dsi"  src={man}  /><span id='btt_tex'>My Profile</span></div>
         <div id={btms(1)} onClick={e=> setkss(9)} ><img alt='img' id="dsi"  src={themec}  /><span id='btt_tex'>UI Settings</span></div></div></div>

         
        <div style={prodesk(2)} id="dkll" onClick={e=> {setkss(11);setsll("moslide1");setsubmenu(0);sethisto(0)}} > <div id={btts(11)} ><img alt='img' id="dsi"  src={home}  /><span id='btt_tex'>Home</span></div></div>
        <div style={prodesk(2)} id="dkll" onClick={e=> {setkss(12);setsll("moslide1");setsubmenu(0);sethisto(0)}} > <div id={btts(12)} ><img alt='img' id="dsi"  src={man}  /><span id='btt_tex'>Users</span></div></div>
        <div style={prodesk(2)} id="dkll" onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("2X")}} > <div id={btts(13)} ><img alt='img' id="dsi"  src={cloud}  /><span id='btt_tex'>Uploads</span></div></div>
        <div style={prodesk(2)} id="dkll" onClick={e=> {setkss(14);setsll("moslide1");setsubmenu(0);sethisto(0)}} > <div id={btts(14)} ><img alt='img' id="dsi"  src={dollar}  /><span id='btt_tex'>Deposits</span></div></div>
        <div style={prodesk(2)} id="dkll" onClick={e=> {setkss(15);setsll("moslide1");setsubmenu(0);sethisto(0)}} > <div id={btts(15)} ><img alt='img' id="dsi"  src={give}  /><span id='btt_tex'>Withdrawals</span></div></div>
        <div style={prodesk(2)} id="dkll" onClick={e=> {setkss(16);setsll("moslide1");setsubmenu(0);sethisto(0)}} > <div id={btts(16)} ><img alt='img' id="dsi"  src={teacher}  /><span id='btt_tex'>Teacher</span></div></div>
        <div style={prodesk(2)} id="dkll" onClick={e=> {setkss(17);setsll("moslide1");setsubmenu(0)}} > <div id={btts(17)} ><img alt='img' id="dsi"  src={historyy}  /><span id='btt_tex'>History</span></div></div>
</div>) }

function mbape() {if(ss===7){if(mbar==="minibarx"){setmbar("minibar_ex")}else{setmbar("minibarx"); }}}



function rewall(img) {  
  setdsta({display:"none"});setdsta2({display:"none"});
  setTimeout(() => {setdsta({display:"block"});setwall(img)}, 1);
  setTimeout(() => {setwallx(img)}, 2000);
 }
 


// window.addEventListener('DOMContentLoaded', (event) => {
//  console.log('DOM fully loaded and parsed'); })


function accent(i) { setbcc(i) }
function sab(i) { if(txx===i){return("thtx")}else{return("thtx1")}}
function sapa(i) { settxx(i) }

const t1 = {backgroundColor:"rgba(65, 65, 65, 0.726)"}
const t2 = {backgroundColor:"rgba(217, 217, 217, 0.857)"}
const t3 = {backgroundColor:"rgba(217, 217, 217, 0.857)"}
const t4 = {backgroundColor:"rgba(200, 193, 255, 0.736)"}
const t5 = {backgroundColor:"rgba(161, 202, 255, 0.647)"}
const t6 = {backgroundColor:"rgba(181, 200, 255, 0.499)"}
const t7 = {backgroundColor:"rgba(255, 211, 191, 0.805)"}


const gt1 = {backgroundColor:"rgba(65, 65, 65, 0.726)",boxShadow: "0px 0px 20px 5px rgba(38, 38, 38, 0.629)"}
const gt2 = {backgroundColor:"rgba(217, 217, 217, 0.857)",boxShadow: "0px 0px 20px 5px rgba(38, 38, 38, 0.629)"}
const gt3 = {backgroundColor:"rgba(217, 217, 217, 0.857)",boxShadow: "0px 0px 20px 5px rgba(38, 38, 38, 0.629)"}
const gt4 = {backgroundColor:"rgba(200, 193, 255, 0.736)",boxShadow: "0px 0px 20px 5px rgba(38, 38, 38, 0.629)"}
const gt5 = {backgroundColor:"rgba(161, 202, 255, 0.647)",boxShadow: "0px 0px 20px 5px rgba(38, 38, 38, 0.629)"}
const gt6 = {backgroundColor:"rgba(181, 200, 255, 0.499)",boxShadow: "0px 0px 20px 5px rgba(38, 38, 38, 0.629)"}
const gt7 = {backgroundColor:"rgba(255, 211, 191, 0.805)",boxShadow: "0px 0px 20px 5px rgba(38, 38, 38, 0.629)"}

function I5() {
  return(
    <div id="fiwix" >
    <div id="i5"  style={bcc} >
      
      <div id="racoon">
      <img alt="img" id="guymini"  src={msg} /> <div id="microtex" className={prvg()} >Unread messeges</div><div id="megatex" className={prvg()} >Messeges</div>
     <div id="microtex" className={prvg()} >              </div><div id="megatex" className={prvg()} >0</div>
      </div> 
      

    <div id="racoon">
      <img alt="img" id="guymini"  src={chat} /> <div id="microtex" className={prvg()} >Chat</div><div id="megatex" className={prvg()} >chat</div>
     <div id="microtex" className={prvg()} >              </div><div id="megatex" className={prvg()} >     </div>
      </div> 
      

  <div id="preg"></div> </div>
    </div>
  )
}

function auto_t(a,b,c) {sapa(a);accent(b);rewall(c)}

function _search(i) { 
  skipchild(i)
  const koko =  document.getElementById("inp1");
   koko.focus();
   setev1(2);
   }

function dispose() {  
  setsll("moslide1");setmbar("minibarx");setev1(1)  }


  //const er1 = "agree to privacy policies and guidelines"
  const ms1 = "Are you sure you want to log out"

  function R(i) {
    if(i===1){setuplace("Enter Email");setebgc({backgroundColor:"white"})}
  }
  function limitnumber(e,i){
    //const newNum = phone.toString().slice(0, 18)
    const newNum = phone.toString().slice(0, i)
   if(e.currentTarget.value.length>i){e.currentTarget.value=parseFloat(newNum)}
  }

  function notifyme(i) { 
    const init =  notify
    const midcook = [...init,i]
    setnotify(midcook.reverse())
    //setnotify(midcook.reverse())
   }
   function flipcard(){if(ts1==="flisk"){setts1("flisk2");setany("anyname2")}else{setts1("flisk");setany("anyname")}}
   function flipcard2(){if(dosage==="dosage"){setdosage("overdose");setoverdose("dosage")}else{setdosage("dosage");setoverdose("overdose")}}

   function displalast() {
     return({display:"block"}) }
   
   function autobtt() { 
    setnotify(notify.splice(1,notify.length))
  } 
  
  function tryhid() {
    if(notify.length>0){ setTimeout(() => {setnotify(notify.splice(1,notify.length))}, 3000); }}


    function logseq() {
      setpio("pio");setemail("");setpassword("")
      setaccount([])
      setts1("flisk2");setany("anyname2");
      setTimeout(() => {  setts1("flisk");setany("anyname"); }, 200);
      seturii(null);
      setpopstate("X");seturii(userx);set_noted("");
      setTimeout(() => { }, 0);setTimeout(() => { _runseq() }, 0);
    }

    function runbutt(i){ if(rbb===i){return({display:"none"})}else{return({display:"block"})}}
    function runku(){ if(kok==="kok"){setkok("koka")}else{setkok2("kok")}}
    function runku1(){ if(kok2==="koka"){setkok2("kok")}else{setkok("kok")}}


    const [darr, setdarr] = useState(['Jan', 'March', 'April', 'June'])

    function jview(i) {
      if(jex.find(m=> i===m )){return{display:"block"}}else{return{display:"none"}}
    }

    function rejev(i) { 

    if(j2=== i){setj2(null)}else
    if(j3=== i){setj3(null)}else
    if(j4=== i){setj4(null)}else
    if(j2 === null){setj2(i)}else
    if(j3 === null){setj3(i)}else
    if(j4 === null){setj4(i)}else{
    prosetnotify("Please remove one subject")
    }
    }

    function runex() {
      if(j1 === null){prosetnotify("Please Select upto 4 subjects")}else{
        if(j2 === null){prosetnotify("Please Select upto 4 subjects")}else{
          if(j3 === null){prosetnotify("Please Select upto 4 subjects")}else{
            if(j4 === null){prosetnotify("Please Select upto 4 subjects")}else{
            setclaa("preEX")
            }

            
          //axios.post("http://192.168.0.2:5002/jamb/find",jex)
          //.then(function (res){ if(res){}})
          //.catch(function (error) { });

          }}}


    }


    function clerinput() {
      document.getElementById("puntusa").value = ""
      document.getElementById("puntusb").value = ""
      document.getElementById("puntusc").value = ""
      document.getElementById("puntusd").value = ""
      document.getElementById("puntuse").value = ""
      document.getElementById("ikeagwulam").value = ""
      setquestion("");setA("");setB("");setC("");setD("");setqimg("");setE("");setANS("");setuid("");
    }

    function staticloader() {if(strx===1){return({display:"block"})}else{return({display:"none"})}}

    function uploadTest() {

      const getid = document.getElementById("myid")

      if(pluss===1){prosetnotify("Add Option E")}else
      if(question===""){prosetnotify("Enter question")}else
      if(A===""){prosetnotify("Enter Option A")}else
      if(B===""){prosetnotify("Enter Option B")}else
      if(C===""){prosetnotify("Enter Option C")}else
      if(D===""){prosetnotify("Enter Option C")}else
      if(ANS===""){prosetnotify("Enter Answer")}else
      if(uid===""){ setuid(uuidv4()); setTimeout(() => { getid.click()}, 1000) }else{
        axios.post("http://192.168.0.2:5002/upload/add",tst)
        .then(function (res){ prosetnotify("Test Uplaoded!");clerinput() })
        .catch(function (error) { });

        axios.post("http://192.168.0.2:5002/uploadindex/add",tst2)
        .then(function (res){ setuid("") })
        .catch(function (error) { });
    }
}

function uploadJamb() {

  const getid = document.getElementById("myid")

  if(pluss===1){prosetnotify("Add Option E")}else
  if(question===""){prosetnotify("Enter question")}else
  if(A===""){prosetnotify("Enter Option A")}else
  if(B===""){prosetnotify("Enter Option B")}else
  if(C===""){prosetnotify("Enter Option C")}else
  if(D===""){prosetnotify("Enter Option C")}else
  if(ANS===""){prosetnotify("Enter Answer")}else
  if(uid===""){ setuid(uuidv4()); setTimeout(() => { getid.click()}, 1000) }else{
    axios.post("http://192.168.0.2:5002/jamb/add",tst)
    .then(function (res){ prosetnotify("Test Uplaoded!");clerinput() })
    .catch(function (error) { });

    axios.post("http://192.168.0.2:5002/jambindex/add",tst2)
    .then(function (res){ setuid("") })
    .catch(function (error) { });
}
}


function getest() {
  runex()

  axios.post("http://192.168.0.2:5002/jambindex/find",{subject:j1})
  .then(function (res){ setjs1(res.data) })
  .catch(function (error) { });

  axios.post("http://192.168.0.2:5002/jambindex/find",{subject:j2})
  .then(function (res){ setjs2(res.data) })
  .catch(function (error) { });
  axios.post("http://192.168.0.2:5002/jambindex/find",{subject:j3})
  .then(function (res){ setjs3(res.data) })
  .catch(function (error) { });
  axios.post("http://192.168.0.2:5002/jambindex/find",{subject:j4})
  .then(function (res){ setjs4(res.data) })
  .catch(function (error) { });
}

function qimgpro() {
  if(qimg===""){return({display:"none"})}else{return({display:"block"})}
}

function runaly() {
  const pll = document.getElementById("okeagu");
  pll.click()
}
const [Ransub1, setRansub1] = useState([])
const [Ransub2, setRansub2] = useState([])
const [Ransub3, setRansub3] = useState([])
const [Ransub4, setRansub4] = useState([])

function runrand() {
  const random = Math.floor(Math.random() * js1.length);
 // return JSON.stringify((random, js1[random]));
  rand((random, js1[random]),(random, js1[random]),(random, js1[random]),(random, js1[random]));
}


function rand(x) {
  const ran = document.getElementById("randomselect")
  const finditem = Ransub1.find(i=> i.id === x.id)
  //setRansub1([...Ransub1,{"id":x.id}])
const finditem2 = Ransub2.find(i=> i.id === x.id)
const finditem3 = Ransub3.find(i=> i.id === x.id)
const finditem4 = Ransub4.find(i=> i.id === x.id)

  if(Ransub1.length<20){ 
  if(finditem){ setTimeout(() => { ran.click() }, 100); }else{ setRansub1([...Ransub1,{"id":x.id}]) ; setTimeout(() => { ran.click() }, 100); }
}else{ Grabex(Ransub1) }



if(Ransub2.length<10){ 
if(finditem2){ setTimeout(() => { ran.click() }, 100); }else{ setRansub2([...Ransub2,{"id":x.id}]) ; setTimeout(() => { ran.click() }, 100); }
}else{ Grabex2(Ransub2) }


if(Ransub3.length<10){ 
if(finditem3){ setTimeout(() => { ran.click() }, 100); }else{ setRansub3([...Ransub3,{"id":x.id}]) ; setTimeout(() => { ran.click() }, 100); }
}else{ Grabex3(Ransub3) }


if(Ransub4.length<10){ 
if(finditem4){ setTimeout(() => { ran.click() }, 100); }else{ setRansub4([...Ransub4,{"id":x.id}]) ; setTimeout(() => { ran.click() }, 100); }
}else{ Grabex4(Ransub4) }

}

function runie(r) {
  if(r){return("qeop")}else{return("DN")}
}


function getquestions() {
    axios.post("http://192.168.0.2:5000/question/")
  .then(function (res){ setquestions(res.data) })
  .catch(function (error) { })
}
function getans() {
  axios.post("http://192.168.0.2:5000/answer")
  .then(function (res){ sets400(res.data) })
  .catch(function (error) { });}


function Grabex(x) {
  const hlk = document.getElementById("laow")

  if(x.length>0){  axios.post("http://192.168.0.2:5002/jamb/find",x[0])
  .then(function (res){ setaq1(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>1){  axios.post("http://192.168.0.2:5002/jamb/find",x[1])
  .then(function (res){ setaq2(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>2){  axios.post("http://192.168.0.2:5002/jamb/find",x[2])
  .then(function (res){ setaq3(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>3){  axios.post("http://192.168.0.2:5002/jamb/find",x[3])
  .then(function (res){ setaq4(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>4){  axios.post("http://192.168.0.2:5002/jamb/find",x[4])
  .then(function (res){ setaq5(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>5){  axios.post("http://192.168.0.2:5002/jamb/find",x[5])
  .then(function (res){ setaq6(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>6){  axios.post("http://192.168.0.2:5002/jamb/find",x[6])
  .then(function (res){ setaq7(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>7){  axios.post("http://192.168.0.2:5002/jamb/find",x[7])
  .then(function (res){ setaq8(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>8){  axios.post("http://192.168.0.2:5002/jamb/find",x[8])
  .then(function (res){ setaq9(res.data);hlk.click() })
  .catch(function (error) { }); }else{}

  if(x.length>9){  axios.post("http://192.168.0.2:5002/jamb/find",x[9])
  .then(function (res){ setaq10(res.data); })
  .catch(function (error) { }); }else{}

  if(x.length>10){  axios.post("http://192.168.0.2:5002/jamb/find",x[10])
  .then(function (res){ setaq11(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>11){  axios.post("http://192.168.0.2:5002/jamb/find",x[11])
  .then(function (res){ setaq12(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>12){  axios.post("http://192.168.0.2:5002/jamb/find",x[12])
  .then(function (res){ setaq13(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>13){  axios.post("http://192.168.0.2:5002/jamb/find",x[13])
  .then(function (res){ setaq14(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>14){  axios.post("http://192.168.0.2:5002/jamb/find",x[14])
  .then(function (res){ setaq15(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>15){  axios.post("http://192.168.0.2:5002/jamb/find",x[15])
  .then(function (res){ setaq16(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>16){  axios.post("http://192.168.0.2:5002/jamb/find",x[16])
  .then(function (res){ setaq17(res.data) })
  .catch(function (error) { }); }else{} 

  if(x.length>17){  axios.post("http://192.168.0.2:5002/jamb/find",x[17])
  .then(function (res){ setaq18(res.data)})
  .catch(function (error) { }); }else{}

  if(x.length>18){  axios.post("http://192.168.0.2:5002/jamb/find",x[18])
  .then(function (res){ setaq19(res.data) })
  .catch(function (error) { }); }else{}

  if(x.length>19){  axios.post("http://192.168.0.2:5002/jamb/find",x[19])
  .then(function (res){ setaq20(res.data); })
  .catch(function (error) { }); }else{}



}


function Grabex2(x) {
    

  if(x.length>0){  axios.post("http://192.168.0.2:5002/jamb/find",x[0])
  .then(function (res){ setbq1(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>1){  axios.post("http://192.168.0.2:5002/jamb/find",x[1])
  .then(function (res){ setbq2(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>2){  axios.post("http://192.168.0.2:5002/jamb/find",x[2])
  .then(function (res){ setbq3(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>3){  axios.post("http://192.168.0.2:5002/jamb/find",x[3])
  .then(function (res){ setbq4(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>4){  axios.post("http://192.168.0.2:5002/jamb/find",x[4])
  .then(function (res){ setbq5(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>5){  axios.post("http://192.168.0.2:5002/jamb/find",x[5])
  .then(function (res){ setbq6(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>6){  axios.post("http://192.168.0.2:5002/jamb/find",x[6])
  .then(function (res){ setbq7(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>7){  axios.post("http://192.168.0.2:5002/jamb/find",x[7])
  .then(function (res){ setbq8(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>8){  axios.post("http://192.168.0.2:5002/jamb/find",x[8])
  .then(function (res){ setbq9(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>9){  axios.post("http://192.168.0.2:5002/jamb/find",x[9])
  .then(function (res){ setbq10(res.data); })
  .catch(function (error) { }); }else{}
  
  if(x.length>10){  axios.post("http://192.168.0.2:5002/jamb/find",x[10])
  .then(function (res){ setbq11(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>11){  axios.post("http://192.168.0.2:5002/jamb/find",x[11])
  .then(function (res){ setbq12(res.data) })
  .catch(function (error) { }); }else{}
  
}

function Grabex3(x) {
  

  if(x.length>0){  axios.post("http://192.168.0.2:5002/jamb/find",x[0])
  .then(function (res){ setcq1(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>1){  axios.post("http://192.168.0.2:5002/jamb/find",x[1])
  .then(function (res){ setcq2(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>2){  axios.post("http://192.168.0.2:5002/jamb/find",x[2])
  .then(function (res){ setcq3(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>3){  axios.post("http://192.168.0.2:5002/jamb/find",x[3])
  .then(function (res){ setcq4(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>4){  axios.post("http://192.168.0.2:5002/jamb/find",x[4])
  .then(function (res){ setcq5(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>5){  axios.post("http://192.168.0.2:5002/jamb/find",x[5])
  .then(function (res){ setcq6(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>6){  axios.post("http://192.168.0.2:5002/jamb/find",x[6])
  .then(function (res){ setcq7(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>7){  axios.post("http://192.168.0.2:5002/jamb/find",x[7])
  .then(function (res){ setcq8(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>8){  axios.post("http://192.168.0.2:5002/jamb/find",x[8])
  .then(function (res){ setcq9(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>9){  axios.post("http://192.168.0.2:5002/jamb/find",x[9])
  .then(function (res){ setcq10(res.data); })
  .catch(function (error) { }); }else{}
  
  if(x.length>10){  axios.post("http://192.168.0.2:5002/jamb/find",x[10])
  .then(function (res){ setcq11(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>11){  axios.post("http://192.168.0.2:5002/jamb/find",x[11])
  .then(function (res){ setcq12(res.data) })
  .catch(function (error) { }); }else{}
  
  

}

function Grabex4(x) {
  

  if(x.length>0){  axios.post("http://192.168.0.2:5002/jamb/find",x[0])
  .then(function (res){ setdq1(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>1){  axios.post("http://192.168.0.2:5002/jamb/find",x[1])
  .then(function (res){ setdq2(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>2){  axios.post("http://192.168.0.2:5002/jamb/find",x[2])
  .then(function (res){ setdq3(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>3){  axios.post("http://192.168.0.2:5002/jamb/find",x[3])
  .then(function (res){ setdq4(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>4){  axios.post("http://192.168.0.2:5002/jamb/find",x[4])
  .then(function (res){ setdq5(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>5){  axios.post("http://192.168.0.2:5002/jamb/find",x[5])
  .then(function (res){ setdq6(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>6){  axios.post("http://192.168.0.2:5002/jamb/find",x[6])
  .then(function (res){ setdq7(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>7){  axios.post("http://192.168.0.2:5002/jamb/find",x[7])
  .then(function (res){ setdq8(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>8){  axios.post("http://192.168.0.2:5002/jamb/find",x[8])
  .then(function (res){ setdq9(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>9){  axios.post("http://192.168.0.2:5002/jamb/find",x[9])
  .then(function (res){ setdq10(res.data); })
  .catch(function (error) { }); }else{}
  
  if(x.length>10){  axios.post("http://192.168.0.2:5002/jamb/find",x[10])
  .then(function (res){ setdq11(res.data) })
  .catch(function (error) { }); }else{}
  
  if(x.length>11){  axios.post("http://192.168.0.2:5002/jamb/find",x[11])
  .then(function (res){ setdq12(res.data) })
  .catch(function (error) { }); }else{}
  
}

function qcat(i) {
  setgory(i)
  if(tempdis===1){settempdis(2)}else{settempdis(1)}
}
function qcat2(i) {
  setgorylie(i)
  if(tempdisx===1){settempdisx(2)}else{settempdisx(1)}
}

function uo() { if(tempdis===1){return({display:"block"})}else{return({display:"none"})} }
function uo1() { if(tempdis===2){return({display:"block"})}else{return({display:"none"})} }

const [indmage, setindmage] = useState([])
const [ibex, setibex] = useState(0)


 function runull(i) {
   if(indmage.find(m=> m.email === i )=== undefined){return(userx)}else{
    return(indmage.find(m=> m.email === i ).img)
   }
  // return(userx)
 }

 function gibox(i,b) {

     axios.post("http://192.168.0.2:5001/account/")
     .then(function (res){setindmage(res.data) })
     .catch(function (error) { });



 // fetch("http://192.168.0.2:5001/account/find", {
 //           method: 'POST',
 //           body: JSON.stringify({"email":i}),
 //           headers: {
 //               "Content-Type": "application/json;charset=UTF-8"
 //           }
 //       })
 //       .then((response) => {
 //               return response.json()
 //       })
 //       .then((data) => {
 //        //return(data)
 //        setindmage([...indmage,data[0].img])
 //       })
 //       
                
}



function Recat() { 
  function ftune(i) { if(gory === "All"){  return({display:"block"})  }else{ if(i === gory){return({display:"block"}) }else{return({display:"none"})} } }

return(
  revy.map(i=> <div style={ftune(i.category)} >

      <div id="ifugo" style={bcc} >
        <div id="ihnb"  ><div id="omaka" > <img alt="img" id="mongodb" src={runull(i.email)} /> <img id="verified" alt="img" src={verified}/> </div>
        <div id="onename" className={chu()} > {i.fullname} </div></div>
        
        <div id={smis(parseInt(questions.indexOf(i)))} className={chu()} >{i.question}</div>
        
        <div id={respro(parseInt(questions.indexOf(i)))} className={chu()} > {s400R.map(i=>  <div style={drit(i.id)} id="fscx" >
        <div id="obasiki"  ><div id="vkmog" > <img alt="img" id="img" src={Check_data(null)} /> </div><div id="jakata" >{i.fullname}</div></div>
          <div>{i.answer}</div></div>)} </div>
        
       <div id={flak(parseInt(questions.indexOf(i)))} onClick={e=> skipchild(e)} ><div id={flak2(parseInt(questions.indexOf(i)))} style={kb(parseInt(questions.indexOf(i)))} ></div> 
       <textarea className='komb' id={"mli"+questions.indexOf(i).toString()} onChange={e=> setrianswer(e.currentTarget.value)} ></textarea></div> 
        <div id="stil" >
        <div id="antutu" className={chu()} onClick={e=> onans(i.id,e,parseInt(questions.indexOf(i)))} ><img className={prvg()} alt="img" src={ans} id="newid"/> <div id="preld" style={kb(parseInt(questions.indexOf(i)))} ><img id="img" className='spin' alt="img" src={preloader} /></div>
        {anambe(parseInt(questions.indexOf(i)))}
         </div>
        <img alt="img" src={likeer} id="lisvg" className={prvg()} />
        <div id={smis3(parseInt(questions.indexOf(i)))} onClick={e=> smore(i.id,parseInt(questions.indexOf(i)))} className={chu()} >{sml(parseInt(questions.indexOf(i)))}</div> </div>


      </div>
     

        </div>)
)
}

function pretes() {
  if(sub===j1){if(aqindex1<2){}else{setaqindex1(aqindex1-1)}}
  if(sub===j2){if(aqindex2<2){}else{setaqindex2(aqindex2-1)}}
  if(sub===j3){if(aqindex3<2){}else{setaqindex3(aqindex3-1)}}
  if(sub===j4){if(aqindex4<2){}else{setaqindex4(aqindex4-1)}}
}
function nxttes(i) {
  
  if(sub===j1){
    if(aqindex1>19){ setmkpu(2);setsub(j2); }else{setaqindex1(aqindex1+1)} }

    if(sub===j2){
      if(aqindex3>10){ setmkpu(3);setsub(j3); }else{setaqindex2(aqindex2+1)} }
  
  if(sub===j3){
    if(aqindex3>10){ setmkpu(4);setsub(j4); }else{setaqindex3(aqindex3+1)} }
    
  if(sub===j4){
    if(aqindex4>10){ }else{setaqindex4(aqindex4+1)} }
  
 //if(sub===j2){
 //  if(aqindex2>10){setmkpu(3);setsub(j3);setaqindex1(1)}else{setaqindex1(aqindex1-1)}  }

 //if(sub===j3){
 //  if(aqindex3>10){setmkpu(4);setsub(j4);setaqindex1(1)}else{setaqindex1(aqindex1-1)}  }
 //  
 //if(sub===j4){
 //  if(aqindex4>10){setaqindex1(1)}else{setaqindex1(aqindex1-1)}  }

}



function runwed() {
  if(wed==="wedd"){setwed("wedd2")}else{setwed("wedd")}
}

const askmode = {
	"question":quest,
  "fullname":account.map(i=> i.fullname).toString(),
  "email":account.map(i=> i.email).toString(),
  "category":gory,
  "id":uuidv4()
}

 

function ansq(x,i) { 
  const unseenjubee = document.getElementById("mli"+i.toString()).value

    axios.post("http://192.168.0.2:5000/answer/add",{
      "answer":unseenjubee,
      "fullname":account.map(m=> m.fullname).toString(),
      "email":account.map(m=> m.email).toString(),
      "id":x
    })
    .then(function (res){ sets400([...s400,{
      "answer":unseenjubee,
      "fullname":account.map(m=> m.fullname).toString(),
      "email":account.map(m=> m.email).toString(),
      "id":x}
    ]);document.getElementById("mli"+(i).toString()).value="";setrianswer("");setkbs("x");setaann("x");clearquest() })
    .catch(function (error) { });
  
  setkbs(i)
  
}
const [s400, sets400] = useState([])
function onans(x,a,i) { 
  skipchild(a);
   if(aann===i){
  if(rianswer.length>18){ansq(x,i);}else{setaann("x") }  
}else{setaann(i)}}

function quski1(i) { setquskii("quorapikin2");setpichiki(""); }

function quski(i) { 

   if(quest.length>3){
    const stuby = document.getElementById("agodmm")
     axios.post("http://192.168.0.2:5000/question/add",askmode)
     .then(function (res){ setquestions([...questions,askmode]);stuby.click()})
     .catch(function (error) { });
   
   }else{setquskii("quorapikin2");setpichiki("")} 
}
function clean() {
  if(aann!=="x"){document.getElementById("mli"+(aann).toString()).value=""}
}
  function clearquest() {  document.getElementById("smo").value="";clean();setrianswer("") }


  function aspo() {
    if(quest.length>3){return("Post")}else{ return("Ask ?") }
  }

  const [smix, setsmix] = useState("0")
  const [kbs, setkbs] = useState("x")
  const [rianswer, setrianswer] = useState("Answer")
  const [selecteditem, setselecteditem] = useState("")

  function smore(d,i) { setselecteditem(d);if(smix===i){setsmix("0")}else{setsmix(i)} }

  function smis(i) { if(smix===i){return("pikinote2")}else{return("pikinote")} }
  //function smis2(i) { if(smix===i){return("ifugo")}else{return("ifugo2")} }
  function smis3(i) { if(1===2){return("showmore")}else{return("showmore2")} }
  function sml(i) { if(smix===i){return("show less")}else{return("Show more")} }
  function flak(i) { if(aann===i){return("comb2")}else{return("comb")} }
  function flak2(i) { if(aann===i){return("kombloker2")}else{return("kombloker")} }
  function ssmt() { if(quskii==="quorapikin"){return("smart")}else{return("smart2")} }
  function drit(i) { if(selecteditem === i){return({display:"block"})}else{return({display:"none"})} }
  function anambe(i) {   if(aann===i){if(rianswer.length<18){return("Answer")}else{return("Post")}}else{ return("Answer")}   }
  function respro(i) { if(smix===i){return("respop2")}else{return("respop")} }

  
  function tobase() { clean();setrianswer("");setaann("x") }
  function kb(i) {
    if(kbs===i){return({display:"block"})}else{return({display:"none"})}
  }


  const revy = [...questions].reverse()
  const s400R = [...s400].reverse()
  

  return (
    <div id="skin" onClick={e=> dispose()} >

      
      <div id='loadscreen' style={staticloader()} >
          <div id="preloader" ><img  alt="img" id="unimage" src={loading} /></div>
        </div>

        
    <div id="noteskin" style={mpo} >
    <div id="depop" >
      <div id="pback" ><div id="bond" ></div> <img alt='img' id='imgfit' /></div>
      <div >Cart</div>
    </div></div>
    
        <div id="agodmm" onClick={e=> setTimeout(() => { clearquest() }, 200)} ></div>
    <div id="autobtto" onClick={e=> autobtt()} ></div>
    <div id="tyrhid" hidden="hidden" onClick={tryhid()} ></div>
    <div id="randomselect" hidden="hidden" onClick={e=> {runrand()} } ></div>
    <div id="myid" hidden="hidden" onClick={e=> uploadTest() } ></div>
    <div id="laow" hidden="hidden" onClick={e=> setldn(2)} >Test10</div>
    <div id="imgrid" onClick={e=> pgml()} ></div>

    
    <div id="noteskin" style={poinanim()} onClick={e=> setpios("")}>
        <div id="note" style={bcc} className={chu()} onClick={e=> skipchild(e)} >
          <div id="note_h" >Are you Sure you want to quit exam? </div>
        <div id="noter" >{_noted}</div>
        <div id="scaterpart">
        <div id="lbt" onClick={e=> setpios("")}>Cancel</div>
          <div id="lbt" onClick={e=> {setclaa("sumer");setpios("")}} >Yes</div>
        </div>
        </div>
      </div>

    <div id="noteskin" style={poinanim2()} onClick={e=> setpios2("")}>
        <div id="note" style={bcc} className={chu()} onClick={e=> skipchild(e)} >
          <div id="note_h" >Are you Sure you want to submit exam? </div>
        <div id="noter" >{_noted}</div>
        <div id="scaterpart">
        <div id="lbt" onClick={e=> setaqindex1(aqindex1-1)}>Cancel</div>
          <div id="lbt" onClick={e=> {setclaa("sumer");setaqindex1(aqindex1-1);setss(7)}} >Yes</div>
        </div>
        </div>
      </div>
      
<div id="testpos"hidden="hidden" >
<div id="test" onClick={e=> notifyme("wow")}>Test</div>
<div id="test" onClick={e=> flipcard()}>flipcard</div>
<div id="test" onClick={e=> runseq()}>Test3</div>
<div id="test" onClick={e=> autobtt()}>Test4</div>
<div id="test" onClick={e=> getans()}>Test5</div>
<div id="test" onClick={e=> seturii(Img_DAta)}>Test6</div>
<div id="test" onClick={e=> flipcard2()}>Test7</div>
<div id="test" onClick={e=> setdarr(darr.splice(1, 0, 'Feb'))} >TestX8</div>
<div id="test" onClick={e=> setss(8)} >Test9</div>
<div id="test" onClick={e=> ifld()} >Test10</div>

</div>


<div id="noteskin" style={dpo(1)} onClick={e=> setpo(0)} >
        <div id="note" style={bcc} className={foco()} onClick={e=> skipchild(e)} >
          <div id="note_h" >Transaction ID ... </div>
          <div id="note_h" >Student Name ... </div>
          <div id="note_h" ><input id='unimput' placeholder='Amount' type="number" /> </div>
        <div id="noter" >{_noted}</div>
        <div id="scaterpart">
        <div id="lbt" onClick={e=> setpo(0)}>Cancel</div>
          <div id="lbt" onClick={e=> logseq()}>Fund</div>
        </div>
        </div>
      </div>
      

<div id="noteskin" style={dpo(2)} onClick={e=> setpo(0)} >

<div id="cardinal" style={bcc} >
  
                  <div id="sp-bt-win" ><div>Name: </div><div id="moss" >{}dfdfkldf </div></div>
                  <div id="sp-bt-win" ><div>phone</div> <div>{} </div></div>
                  <div id="sp-bt-win" ><div>Mail:</div> <div>{} </div></div>
                  <div id="sp-bt-win" ><div>Package :</div> <div>{} </div></div>
                  <div id="sp-bt-win" ><div>Dollar </div><div>{} </div></div>
                  <div id="sp-bt-win" ><div>Pay ID</div> <div>{} </div></div>
                  <div id="sp-bt-win" ><div>country</div> <div>{} </div></div>
                  <div id="sp-bt-win" ><div>wallet address</div> <div>{} </div></div>
              
</div>
      </div>


      <div id="noteskin" style={dpo(3)} onClick={e=> setpios("pion")} >
        <div id="note" style={bcc} className={foco()} onClick={e=> skipchild(e)} >
          <div id="note_h" >Student Name ... </div>
          <div id="note_h" >Payment Type ... </div>
          <div id="note_h" >Amount  ... </div>
        <div id="noter" >{_noted}</div>
        <div id="scaterpart">
        <div id="lbt" onClick={e=> setpo(0)}>Cancel</div>
          <div id="lbt" onClick={e=> logseq()}>Approve</div>
        </div>
        </div>
      </div>



      <div id="notify">
        {notify.map(i=> <div id='notifyelement' style={displalast(parseInt(notify.indexOf(i))+1)}>{i}</div>)}
      </div>
      
    
      <div id="blocker" style={blocker} ></div>

    <div id="noteskin" style={note()} >
      <div id="note" onClick={e=> skipchild(e)}>
        <div id="note_h" >{noteh}</div>
      <div id="noter" >{_note}</div>
      <div id="unibtt" onClick={e=> set_note("")} style={{width:"150px"}} >Ok</div>
      </div>
    </div>



    <div id="noteskin" style={noted()} onClick={e=> set_noted("")} >
        <div id="note" style={bcc} className={foco()} onClick={e=> skipchild(e)} >
          <div id="note_h" >{notedh}</div>
        <div id="noter" >{_noted}</div>
        <div id="scaterpart">
        <div id="lbt" onClick={e=> set_noted("")}>Cancel</div>
          <div id="lbt" onClick={e=> logseq()}>Continue</div>
        </div>
        </div>
      </div>

<div id="noteskin" style={vexd()} onClick={e=> setvex("")} >
    <div id="note" style={bcc} className={foco()} onClick={e=> skipchild(e)} >
      <div id="note_h" >{notedh}</div>
    <div id="noter" >{_noted}</div>
    <div id="scaterpart">
    <div id="lbt" onClick={e=> set_noted("")}>Cancel</div>
      <div id="lbt" onClick={e=> logseq()}>Continue</div>
    </div>
    </div>
  </div>


      

    <div id="noteskin" style={polo()} onClick={e=> setpolom("")} >
        <div id="note" style={bcc} className={foco()} onClick={e=> skipchild(e)} >
          <div id="note_h" >{notedh}</div>
          
          
        <div id="mrr" ><iframe id="lglg" src="http://3vqfuozegltudzwopbzeca.on.drv.tw/lgbt/gv.html" title="description"></iframe></div>

        <div id="scaterpart">
        <div id="lbt" onClick={e=> setpolom("")}>Via Agent</div>
        
          <div id="lbt" onClick={e=> logseq()}>Continue</div>
        </div>
        </div>
      </div>


      <div id="noteskin" style={jigi()} onClick={e=> setgig("")} >
        <div id="note" style={bcc} className={foco()} onClick={e=> skipchild(e)} >
          <div id="note_h" >
          
          <div id="use" >
        <div id={kok2} style={{height:"100px"}} ><img onClick={e=> runku() } id='img' alt="img" src={pm} /></div>
        <div id={kok} style={{height:"100px"}} ><img onClick={e=> runku1() } id='img' alt="img" src={usdtt} /></div></div></div>

        <div id="unn" style={{marginBottom:"20px"}} ><input  placeholder='Enter Amount' type="number" id="unimput" /></div>

        <div id="scaterpart">


        <div id="lbt" onClick={e=> setgig("")} >Back</div>
        
          <div id="lbt" onClick={e=> logseq()}>Submit</div>
        </div>
        </div>
      </div>

        <div id={mbar} style={bcc} onClick={e=> {skipchild(e);setmbar("minibarx")}} >

          <div style={prodesk(1)} >
          <div id="pribar" >
          <div id='pbi' ><img style={Check_i(1)} id="unimage" alt='img' src={Check_data(urii)} />  <img style={Check_i(2)} id="unimage" alt='img' src={Check_data(urii)} /></div>
          <div style={{paddingTop:"15px",paddingLeft:"10px"}} ><div id='main_id' className={prvg()} >Student</div><div id='miname' className={prvg()} >{account.map(i=> i.fullname)}</div></div>
          </div>
          <div id="line" style={{marginBottom:"5px"}}></div>
          <div id="mit"  onClick={e=> setkss(10)}  ><img alt='img' id='pico' src={man} /><div style={{marginTop:"4px"}} className={prvg()}>My Profile</div></div>
          <div id="mit"  ><img alt='img' id='pico' src={messege} /><div style={{marginTop:"4px"}} className={prvg()} >Messages</div></div>
          <div id="mit"  onClick={e=> {skipchild(e);sub_mm();setsll("moslide1")}}  ><img alt='img' id='pico' src={setting2} /><div style={{marginTop:"4px"}} className={prvg()} >Settings</div></div>
          <div  style={ren_m()} ><div id="mit_ex"  onClick={e=> {setsll("moslide1");setkss(9)}}  ><img alt='img' id='pico' src={themec} /><div style={{marginTop:"4px"}} className={prvg()} >UI Settings</div></div></div>
          <div id="line" style={{marginBottom:"2px"}}></div>
          <div id="mit" onClick={e=> pop2(ms1,"Logout")} ><img alt='img' id='pico' src={signout}  /><div style={{marginTop:"4px"}} className={prvg()} >Logout</div></div>
          </div>

          
          <div style={prodesk(2)} > 
          <div id="pribar" >
          <div id='pbi' ><img style={Check_i(1)} id="unimage" alt='img' src={Check_data(urii)} />  <img style={Check_i(2)} id="unimage" alt='img' src={Check_data(urii)} /></div>
          <div style={{paddingTop:"15px",paddingLeft:"10px"}} ><div id='main_id' className={prvg()} >Admin</div><div id='miname' >Admin</div></div>
          </div>

          
          <div id="mit"  ><img alt='img' id='pico' src={messege} /><div style={{marginTop:"4px"}} className={prvg()} >Messages</div></div>
          <div id="mit"  onClick={e=> {skipchild(e);sub_mm();setsll("moslide1")}}  ><img alt='img' id='pico' src={setting2} /><div style={{marginTop:"4px"}} className={prvg()} >Settings</div></div>
          <div  style={ren_m()} ><div id="mit_ex"    ><img alt='img' id='pico' src={urii} /><div style={{marginTop:"4px"}} className={prvg()} >Alloocate</div></div></div>
          <div  style={ren_m()} ><div id="mit_ex"    ><img alt='img' id='pico' src={coupon} /><div style={{marginTop:"4px"}} className={prvg()} >Coupon</div></div></div>
          <div>
          <div id="line" style={{marginBottom:"2px"}}></div>
          <div id="mit" onClick={e=> pop2(ms1,"Logout")} ><img alt='img' id='pico' src={signout}  /><div style={{marginTop:"4px"}} > Logout</div></div></div>

          </div>

        </div>
      {prop}

      
        <div id='dimback' style={rdm()} >
        <div id='s_note' >
          <div id='bfs' ><Tc/></div>
          <div id='unibtt' onClick={e=> setmrdm('')} >Ok</div>
        </div></div>

        
      
        <div id='dimback' style={rdm2()} >
        <div id='s_note' >
          <div id='bfs' ><Cbt/></div>
          <div id='unibtt' style={dran1()} onClick={e=> {setclaa("EX");setmrdm2('');setss(8);runrand()}} >Start Exam</div>
        </div></div>

      <div id='logo' style={lor()}  >
        <div id="upline">
        <div id='ic1' ><img alt='img' id='unimage' src={icon} /></div><div id='ic2'><img alt='img' id='unimage' src={genus} /></div>
        </div>
        
        <div id='ic3'><img alt='img' id='unimage' src={villa} /></div>
        </div>

      <div id='login' >
        {/*style={link("/")}*/}
    {/*-------------------------------------------------------------------------------------------*/}    
        <div id="wall-bh" ><img alt='img' id="wall-bh" src={wallx}  /></div>
       <div id="trans_opacity" style={dsta} > <div id="wall_1" style={dsta} ><img alt='img' id="wall_1" src={wall}  /></div></div>



<div id="bg" >
  <div id="bgc" ></div>
  <div id="bg2" ></div>
  <div id="bg3" ></div>
  <div id="bg4" ></div>
</div>


    {/*___________________________________________________________________________________________________________________________________________________*/}
        
        <div id="popin" style={pss(1)}>

        <div id={ts1} ><div id="transcroll">
          <div id='transblank' >
          <div id='row_c' >
          <div id='col_c' style={{width:'80%'}}  >
            <div id="form_header" style={{marginBottom:"20px"}} >Sign in</div>
          
          <div><input id='unimputus' style={ebgc} placeholder={uplace} onKeyUp={e=> keypress(e)} onChange={e=> setemail(e.currentTarget.value)} useRef={resuser} onClick={e=> R(1)} /> </div>
          <div id='formbase'> <div id='formop' ><span id='link' onClick={e=> prerun(2)} >Forgot password</span></div> </div>
          <div><input id='unimput' className='form' type='password' placeholder='Enter password'onKeyUp={e=> keypress(e)} onChange={e=> setpassword(e.currentTarget.value)} /> </div>
          <div id='formbase'> <input type='checkbox' id='c'  onChange={e=> setremember(e.currentTarget.value)} />Remember me</div>
          <div id='unibtt' className='form' onClick={e=> {login()}} >Log in</div>
          <div id='formbase-c'>New on Our platform? <span id='link' onClick={e=> prerun(3)} >Create an account</span> </div>
          </div></div></div>
        </div></div></div>
        
    {/*___________________________________________________________________________________________________________________________________________________*/}

  <div id={any} >
        <div id="popin" >
      <div id={rundash()} style={bcc} >
        <div id='row_c' >
        <div id='col_c' style={{width:'80%'}} >

          <div style={ree()} >
        <div id="hi" ></div>
        <div id="hi" ></div></div>  
        
        <div className={logi()} > <img alt='img' className={prvg()} id="hsd" src={search} onClick={e=> _search(e) } /></div>
        <div id="pimp" className={logi()} ><input type="text" id="inp1" className={foco()} /> </div>
        <div id={kjp()} onClick={e=> {proslide();setmbar("minibarx");skipchild(e)} } className={prvg()} >
          <img src={menu} alt='img' id='unimage' /></div>  <div id={pr()}  >
            <div className={prvg()} id="inuserbar" ><span  style={_ev()} >{account.map(i=> i.fullname)}</span></div><div id="kpom"></div></div>
       <div onClick={e=> skipchild(e)} ><img id={veryh()} alt="img" src={verified}/>
        <img style={Check_i(1)} id={jipro()} alt='img' src={Check_data(urii)} onClick={e=>{mbape();setsll("moslide1")}} />
          <img style={Check_i(2)} id={ji()} alt='img' src={Check_data(urii)} onClick={e=>mbape()} />
 </div>


        <input style={{display:"none"}} hidden="hidden" id="add_img" accept="image/*" type="file" onChange={e=> {getImg(e);PROimg(e)} } />

       <div id="code"  ><div id={pio} >{account.map(i=> i.fullname)}</div></div> 

        <div id='split' className='form2' ></div>
        
        </div></div>
      </div></div>
</div>

    {/*___________________________________________________________________________________________________________________________________________________*/}

 
        <div id="popin" style={pss("X")}>

        <div id={ts1} ><div id="transcrollX">
          <div id='weeeeeee' >
          <div id='row_c' >
          <div id='col_c' style={{width:'80%'}}  onClick={e=> skipchild(e)} >
            <div id="form_header" style={{marginBottom:"20px"}} >Sign in</div>
          
          <div><input id='unimputus' style={ebgc} placeholder={uplace} onKeyUp={e=> keypress(e)} onChange={e=> setemail(e.currentTarget.value)} useRef={resuser} onClick={e=> R(1)} /> </div>
          <div id='formbase'> <div id='formop' ><span id='link' onClick={e=> prerun(2)} >Forgot password</span></div> </div>
          <div><input id='unimput' className='form' type='password' placeholder='Enter password' onKeyUp={e=> keypress(e)} onChange={e=> setpassword(e.currentTarget.value)} /> </div>
          <div id='formbase'> <input type="checkbox" id="c" onClick={e=> setremember(e.currentTarget.value)} />Remember me</div>
          <div id='unibtt' className='form' onClick={e=> {login()}} >Log in</div>
          <div id='formbase-c'>New on Our platform? <span id='link' onClick={e=> prerun(3)} >Create an account</span> </div>
          </div></div></div>
        </div></div></div>
        

        
        <div id="popin" style={pss(2)} onClick={e=> skipchild(e)}>
      <div id="transcrollX" >
        <div id='row_c' >
        <div id='col_c' style={{width:'80%'}} >
          <div id="form_header" >Forgot password</div>
        <div><input id='unimput' className='form' placeholder='Enter Email' /> </div>
        <div id='unibtt' className='form' onClick={e=> setloadtime(2000)} >Reset password</div>
        <div id='formbase'>New on Our platform? <span id='link'onClick={e=> prerun(3)} >Create an account</span> </div>
        </div></div>
      </div></div>



      <div id="popin" style={pss(3)} onClick={e=> skipchild(e)} >
      <div id="transcrollX1" >
        <div id='row_c' >
        <div id='col_c' style={{width:'80%'}} >
          <div id="form_header" >Create an account</div>

        <div id='dinflex' >
        <div id='formdynwidth' ><input id='unimput' onChange={e=> setfullname(e.currentTarget.value)} className='form' placeholder='Enter full Name' /> <div id="report" style={vform} >{rep(1)}</div></div>
        
        <div id='formdynwidth' ><input id='unimput' onChange={e=> setemail(e.currentTarget.value)} className='form' placeholder='Enter Email' /> <div id="report" style={vform} >{rep(2)}</div></div>
        
        </div>

        <div id='dinflex' >
        <div id='formdynwidth' ><Cuntryco setcountry={setcountry} /> <div id="report" style={vform} >{rep(3)}</div></div>
        
        <div id='formdynwidth' ><input id='unimput' type='number' 
        pattern="/^-?\d+\.?\d*$/" onInput={e=> limitnumber(e,18) }
         onChange={e=> setphone(e.currentTarget.value)} className='form' placeholder='Enter phone' />  <div id="report" style={vform} >{rep(4)}</div></div>
        
        </div>
        <div id='dinflex' >
        <div id='formdynwidth' ><input id='unimput' type='password' onChange={e=> setpassword(e.currentTarget.value)} className='form' placeholder='Enter Password' /> <div id="report" style={vform} >{rep(5)}</div></div>
        
        <div id='formdynwidth' ><input id='unimput' type='password' onChange={e=> setpassword2(e.currentTarget.value)} className='form' placeholder='Re-Enter  Password' /> <div id="report" style={vform} >{rep(6)}</div></div>
        
        </div>
        
        {/*
        <div id='dinflex-c'  >
        <div id='formdynwidth' ><input id='unimput' className='form' placeholder='Re-Enter Password' /> </div>
        </div>
         */}
        <div id='formbase'> <input type='checkbox' id='c' checked={accountterms} onClick={e=> account_tc()} />I agree to privacy <span id='link' onClick={e=> setmrdm("dsdj")} >policies and guidelines</span></div>

      <div id='unibtt' className='form' onClick={e=> checkpro()} >Continue</div>
        <div id='formbase-c'>Alredy have an account? <span id='link' onClick={e=> prerun("X")} >Sign in instead</span> </div>
        </div>
        </div>
      </div></div>




      
      <div id="popin" style={pss(4)} onClick={e=> skipchild(e)} >
      <div id="transcrollX" >account
        <div id='row_c' >
        <div id='col_c' style={{width:'80%'}} >
          <div id="form_header" >Forgot password</div>
        <div><input id='unimput' className='form' placeholder='Enter Email' /> </div>
        <div id='unibtt' className='form' onClick={e=> setloadtime(2000)} >Reset password</div>
        <div id='formbase'>New on Our platform? <span id='link'onClick={e=> prerun(3)} >Create an account</span> </div>
        </div></div>
      </div></div>

      <div id="popin" style={pss(5)} >
      <div id={rundash()} style={bcc} >
        <div id='row_c' >
        <div id='col_c' style={{width:'80%'}} >

          <div style={ree()} >
        <div id="hi" ></div>
        <div id='icon' className='arrow_defult' style={{position:'absolute',left:'20px',top:'20px'}}  onClick={e=> prerun(3)} ><img alt='img' id='unimage'src={back} /></div>
        <div id="hi" ></div></div>  
        
        <div className={logi()} > <img alt='img' className={prvg()} id="hsd" src={search} onClick={e=> _search(e) } /></div>
        <div id="pimp" className={logi()} ><input type="text" id="inp1" className={foco()} /> </div>
        <div id={kjp()} onClick={e=> {proslide();skipchild(e)} } className={prvg()} >
          <img src={menu} alt='img' id='unimage' /></div>  <div id={pr()}  ><div className={prvg()} id="inuserbar" ><span style={_ev()} >{account.map(i=> i.fullname)}</span></div><div id="kpom"></div></div>
       <div onClick={e=> skipchild(e)} >
        <img style={Check_i(1)} id={jipro()} alt='img' src={Check_data(urii)} onClick={e=>mbape()} />  <img style={Check_i(2)} id={ji()} alt='img' src={Check_data(urii)} onClick={e=>mbape()} />
 </div>


        <input style={{display:"none"}} hidden="hidden" id="add_img" accept="image/*" type="file" onChange={e=> getImg(e) } />

        <div style={ree()} id='unitrans'  >
        <div  style={{position:'absolute',margin:'auto',right:'0px',left:'0px',bottom:'30px',width:'85%'}} id='unibtt' className='form1' onClick={function(){
          const add_img = document.getElementById("add_img") 
          add_img.click()
        }} >{atex()}
        <div id='btnext' className='arrow_defult' onClick={e=> skipchild(e)} style={{position:'absolute',right:'0px',top:'0px'}} >
          <img alt='img' onClick={e=> createaccount()} id='unimage'src={forward} /></div></div></div>

        <div id='split' className='form2' ></div>
        
        </div></div>
      </div></div>



      <div id="popin" style={pss(6)} onClick={e=> skipchild(e)} >
      <div id="transcrollX"  >
        <div id='row_c' >
        <div id='col_c' style={{width:'80%'}} >
          <div id="form_header" >Dash</div>
        <div><input id='unimput' className='form' placeholder='Enter Email' /> </div>
        <div id='unibtt' className='form' onClick={e=> setloadtime(2000)} >Reset password</div>
        <div id='formbase'>New on Our platform? <span id='link'onClick={e=> prerun(3)} >Create an account</span> </div>
        </div></div>
      </div></div>

      <div id={sli()} style={bcc} className={chu()} > <Myslide/> </div>
      <div id={sll} style={bcc} className={chu()} ><Myslide/> </div>


      </div>

      <div style={{display:loat}} >
        
      <div id='loadscreen' >
          <div id={loadtime()} ><img alt="img" id="unimage" src={loading} /></div>
        </div></div>  


        <div id={ds(1)} >


<div style={dss(1)} >

  <div id="uiskin">
        
    <div id="drd" >
     
     <div id="DTp" >
      
      <div id="adrc" >
      <div id="drc" >
      <div style={bcc} id="DTwidget">
        <div id="wico" className="wico1" ><img alt="img" id="gsc1" src={clock} /></div> 
      <div id="time" className={prvg()}>{realtime.toString().substring(0,8)}<span id="pms" > {realtime.toString().substring(8,11)}</span> </div>
      <center>  <div id="date"  style={{fontSize:"12px",width:"120px"}}  className={prvg()}> Local system time and system time</div></center>
      </div>
 
      <div style={bcc} id="DTwidget">
        <div id="wico" className="wico2" ><img alt="img" id="gsc2" src={credit} /></div><div id="nor" className={prvg()} >0</div>
      <div id="time" className={prvg()}>Credit unit<span id="pms" > </span> </div>
      <div id="date"  style={{fontSize:"12px",width:"120px"}}  className={prvg()}> Current credit unit puchased </div>
      </div></div>
      
      <div id="drc" >
      <div style={bcc} id="DTwidget">
        <div id="wico" className="wico3" ><img alt="img" id="gsc3" src={reward} /></div><div id="nor" className={prvg()} >0</div>
      <div id="time" className={prvg()}>Rewards<span id="pms" > </span> </div>
      <div id="date" style={{fontSize:"12px",width:"120px"}}   className={prvg()}> General reward gained through competition accomplishement</div>
      </div>
 
      <div style={bcc} id="DTwidget">
        <div id="wico" className="wico4"><img alt="img" id="gsc4" src={projectz} /></div><div id="nor" className={prvg()} >0</div>
      <div id="time" className={prvg()}> Projects <span id="pms" >  </span> </div>
      <div id="date" style={{fontSize:"12px",width:"120px"}} className={prvg()}>  Total project collection </div>

      </div></div>
      
</div>

<div id="i3m"  style={bcc} > <img alt="img" id="guy"  src={reading1} />
      <div id="preg"><div id="microtex" className={prvg()} >Current package</div><div id="megatex" className={prvg()} >Free Access</div>
     <div id="microtex" className={prvg()} >Perfomance Rating</div><div id="megatex" className={prvg()} >0</div>
      </div> </div>

      <div id="mini_D" ><I5/></div> 
      
     <div id="lender" style={bcc} >
      
      <img alt="img" id="guy"  src={knowledge} />
      <div id="preg"><div id="microtex" className={prvg()} >Perfomance Ratting</div><div id="megatex" className={prvg()} >Perfomance</div>
     <div id="microtex" className={prvg()} >Passive Rating</div><div id="megatex" className={prvg()} >0</div>
      
      </div>

     </div>





    </div>


    </div>

    <div id="dld" >
      <div id="fiwix" ><div id="i3"  style={bcc} > <img alt="img" id="guy"  src={reading1} /> 
      <div id="preg"><div id="microtex" className={prvg()} >Current package</div><div id="megatex" className={prvg()} >Free Access</div>
     <div id="microtex" className={prvg()} >Perfomance Rating</div><div id="megatex" className={prvg()} >0</div>
      </div> </div></div>
      
      <div id="big_D" ><I5/></div> 

    </div>
  </div>
    </div>

{/*__________________________________________________________________________________________________________________________________________*/}


<div style={prodesk(1)} >
        <div style={dss(2)} >   

<div id="uiskin" style={bcc} >
  <div id="sfi" style={_claa(1)} >
    <img alt="img"  className={prvg()} id="na" src={classroom} />
    <div id="nat">
       <div id="bt"  onClick={e=> setclaa(2)} ><div>Join Classroom</div> </div>
       </div>
  </div>

  <div style={_claa(2)}>
      
<div id="popin" > 
  <div id="cic" onClick={e=> setclaa(4) } ><div id="fixd" ><img alt='img' id="img_a" src={toefil}  /></div><div id="cname8" className='cnamex' ><div id="ctex" >Toefil</div></div> </div>
  <div id="cic" onClick={e=> setclaa(4) } ><div id="fixd" ><img alt='img' id="img_a" src={ielts}  /></div><div id="cname9" className='cnamex' ><div id="ctex" >Ielts</div></div> </div>

  <div id="cic" onClick={e=> setclaa(3) } ><div id="fixd" ><img alt='img' id="img_a" src={gclass}  /></div><div id="cname1" className='cnamex' ><div id="ctex" >General</div></div> </div>
  <div id="cic" onClick={e=> setclaa(3) } ><div id="fixd" ><img alt='img' id="img_a" src={tertiary}  /></div><div id="cname2" className='cnamex' ><div id="ctex" >Tertiary</div></div> </div>
  <div id="cic" onClick={e=> setclaa(3) } ><div id="fixd" ><img alt='img' id="img_a" src={utme}  /></div><div id="cname3" className='cnamex' ><div id="ctex" >Post Utme</div></div> </div>
  <div id="cic" onClick={e=> setclaa("jamb") } ><div id="fixd" ><img alt='img' id="img_a" src={jamb}  /></div><div id="cname4" className='cnamex' ><div id="ctex" >Jamb</div></div> </div>
  <div id="cic" onClick={e=> setclaa(3) } ><div id="fixd" ><img alt='img' id="img_a" src={ssce}  /></div><div id="cname5" className='cnamex' ><div id="ctex" >SSCE</div></div> </div>
  <div id="cic" onClick={e=> setclaa(3) } ><div id="fixd" ><img alt='img' id="img_a" src={noun}  /></div><div id="cname6" className='cnamex' ><div id="ctex" >Noun</div></div> </div>
  <div id="cic" onClick={e=> setclaa(3) } ><div id="fixd" ><img alt='img' id="img_a" src={advanced}  /></div><div id="cname7" className='cnamex' ><div id="ctex" >Advanced</div></div> </div>
  <div style={{height:"50px"}} ></div>
  </div>
  
  </div>

  

<div style={_claa(3)}>
    {/*style={{ backgroundImage: `url(${bio})` }}*/}
<div id="popin" style={{marginTop:"34px"}}> 
    
<div id="nokia"><img id='img' alt='img' src={backo} onClick={e=> {setkss(2);setsll("moslide1");setsubmenu(0);setclaa(2)}} /></div>
<div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio1}  /></div><div id="cname1" className='cnamex' ><div id="ctex" >English</div></div> </div>
<div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_b" src={bio2}  /></div><div id="cname2" className='cnamex' ><div id="ctex" >Mathematics</div></div> </div>
<div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio3}  /></div><div id="cname3" className='cnamex' ><div id="ctex" >Biology</div></div> </div>
<div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio4}  /></div><div id="cname4" className='cnamex' ><div id="ctex" >Chemistry</div></div> </div>
<div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio5}  /></div><div id="cname5" className='cnamex' ><div id="ctex" >Physics</div></div> </div>
<div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio6}  /></div><div id="cname6" className='cnamex' ><div id="ctex" >Economics</div></div> </div>
<div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio7}  /></div><div id="cname7" className='cnamex' ><div id="ctex" >Government</div></div> </div>
<div style={{height:"50px"}} ></div>
<div id="nokia3310"><img id='img' alt='img' src={backo}  /></div>
</div>
</div>


<div style={_claa("jamb")}>
    {/*style={{ backgroundImage: `url(${bio})` }}*/}
<div id="popin" style={{marginTop:"34px"}} > 
    <div id="nokia"><img id='img' alt='img' src={backo} onClick={e=> {setkss(2);setsll("moslide1");setsubmenu(0);setclaa(2)}} /></div>
<div id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio1}  /></div><div id="cname1" className='cnamex' ><div id="ctex" >English</div></div> <div id="dskin" onClick={e=> rejev()} > <div id="dit" ></div></div> </div>
<div id="cic" > <div id="fixd" ><img alt='img' id="img_b" src={bio2}  /></div><div id="cname2" className='cnamex' ><div id="ctex" >Mathematics</div></div> <div id="dskin" onClick={e=> rejev("Mathematics")} > <div id="dit" style={jview("Mathematics")} ></div></div> </div>
<div id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio3}  /></div><div id="cname3" className='cnamex' ><div id="ctex" >Biology</div></div> <div id="dskin" onClick={e=> rejev("Biology")} > <div id="dit" style={jview("Biology")} ></div></div> </div>
<div id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio4}  /></div><div id="cname4" className='cnamex' ><div id="ctex" >Chemistry</div></div> <div id="dskin" onClick={e=> rejev("Chemistry")} > <div id="dit" style={jview("Chemistry")} ></div></div> </div>
<div id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio5}  /></div><div id="cname5" className='cnamex' ><div id="ctex" >Physics</div></div> <div id="dskin" onClick={e=> rejev("Physics")} > <div id="dit" style={jview("Physics")} ></div></div> </div>
<div id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio6}  /></div><div id="cname6" className='cnamex' ><div id="ctex" >Economics</div></div> <div id="dskin" onClick={e=> rejev("Economics")} > <div id="dit" style={jview("Economics")} ></div></div> </div>
<div id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio7}  /></div><div id="cname7" className='cnamex' ><div id="ctex" >Government</div></div> <div id="dskin" onClick={e=> rejev("Government")} > <div id="dit" style={jview("Government")} ></div></div> </div>
<div style={{height:"50px"}} ></div>

<div id="nokia3310" onClick={e=> getest()} ><img id='img' alt='img' src={backo}  /></div>
</div>

</div>
  

  <div style={_claa(4)}>
    
      {/*style={{ backgroundImage: `url(${bio})` }}*/}
<div id="popin" style={{marginTop:"34px"}}> 
  <div id="nokia"><img id='img' alt='img' src={backo} onClick={e=> {setkss(2);setsll("moslide1");setsubmenu(0);setclaa(2)}} /></div>

  <div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio5}  /></div><div id="cname5" className='cnamex' ><div id="ctex" >Listening</div></div> </div>
  <div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio1}  /></div><div id="cname1" className='cnamex' ><div id="ctex" >Reading</div></div> </div>
  <div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_b" src={bio2}  /></div><div id="cname2" className='cnamex' ><div id="ctex" >Writing</div></div> </div>
  <div id="cic" onClick={e=> setclaa(5)} ><div id="fixd" ><img alt='img' id="img_a" src={bio3}  /></div><div id="cname3" className='cnamex' ><div id="ctex" >Speaking</div></div> </div>
  <div style={{height:"50px"}} ></div>
  </div>
  
  </div>


  <div style={_claa(5)}>
  <div id="uiskin"  >``
  <div id="nokia" style={{marginTop:"22px"}}><img id='img' alt='img' src={backo} onClick={e=> {setkss(2);setsll("moslide1");setsubmenu(0);setclaa(2)}} /></div>
      <div id="sfi" >
        <img alt="img" id="na"  src={test} />
        <div id="nat" className={prvg()} >Comming soon </div>
      </div>
    </div></div>

    

      
    <div style={_claa("preEX")}>
  <div id="uiskin"  >
  <div id="nokia" style={{marginTop:"22px"}}><img id='img' alt='img' src={backo} onClick={e=> {setkss(2);setsll("moslide1");setsubmenu(0);setclaa("jamb")}} /></div>

  <div id="imma" className={prvg()} >
  You have selected, and will be examined on the following subjects;
  <div>{j1}</div>
  <div>{j2}</div>
  <div>{j3}</div>
  <div>{j4}</div>
      <div style={{fontSize:"20px",marginTop:"20px"}} >Exam mode</div>
      <div>Total Number of Questions: 50</div>
      <div>Total Time Given: 35 mins</div>
  </div>
      
<div id="nokia3310" onClick={e=> setmrdm2("Jubee")} ><img id='img' alt='img' src={backo}  /></div>
    </div></div>

    

      
    <div style={_claa("EX")}>

{/*__________________________________________________________________________________________________________________________________________*/}
 
      

          <div id="preloader"  style={iif(1)} ><img alt="img" id="unimage" src={loading} /></div>
        
        <div id="loadingtext"  style={iif(1)} >Loading Questions...</div>


    

{/*__________________________________________________________________________________________________________________________________________*/}


  <div id="uiskin" style={iif(2)} >

        <div id="boble" > 
        <div onClick={e=> {setmkpu(1);setsub(j1)}} id={mkpurua(1)} ></div>
        <div onClick={e=> {setmkpu(2);setsub(j2)}} id={mkpurua(2)} ></div>
        <div onClick={e=> {setmkpu(3);setsub(j3)}} id={mkpurua(3)} ></div> 
        <div onClick={e=> {setmkpu(4);setsub(j4)}} id={mkpurua(4)} ></div>
          </div>

          <div id="timer" >{tfs/60}:35:{"0"}</div>

          <div style={subdip(j1)} >
            <div id="tai" >{j1}</div>

          {
          SB1.map(i=>  
          <div id="objective" style={gnex(SB1.indexOf(i))} ><div id="qnum" className={chu()}  >{SB1.indexOf(i)}</div>
          <div id="qesem" >{i.question}</div>
          <div id="qeop" onClick={e=> ffans(SB1.indexOf(i),"a")} ><div onClick={e=> ffans(SB1.indexOf(i),"a")} id="akpom" ><div id="akpomin" style={dfans(SB1.indexOf(i),"a")} ></div></div><div id="iccn"><div className={chu()} >{i.A}</div> </div></div>
          <div id="qeop" onClick={e=> ffans(SB1.indexOf(i),"b")} ><div onClick={e=> ffans(SB1.indexOf(i),"b")} id="akpom" ><div id="akpomin" style={dfans(SB1.indexOf(i),"b")} ></div></div><div id="iccn"><div className={chu()} >{i.B}</div></div></div>
          <div id="qeop" onClick={e=> ffans(SB1.indexOf(i),"c")} ><div onClick={e=> ffans(SB1.indexOf(i),"c")} id="akpom" ><div id="akpomin" style={dfans(SB1.indexOf(i),"c")} ></div></div><div id="iccn"><div className={chu()} >{i.C}</div></div></div>
          <div id="qeop" onClick={e=> ffans(SB1.indexOf(i),"d")} ><div onClick={e=> ffans(SB1.indexOf(i),"d")} id="akpom" ><div id="akpomin" style={dfans(SB1.indexOf(i),"d")} ></div></div><div id="iccn"><div className={chu()} >{i.D}</div></div></div>
          <div id={runie(i.E)} onClick={e=> ffans(SB1.indexOf(i),"e")} ><div onClick={e=> ffans(SB1.indexOf(i),"d")} id="akpom" ><div id="akpomin" style={dfans(SB1.indexOf(i),"e")} ></div></div><div id="iccn"><div className={chu()} >{i.E}</div></div></div>

          </div>
          )}
          </div>

          
          <div style={subdip(j2)} >
            <div id="tai" >{j2}</div>

          {
          SB2.map(i=>  
          <div id="objective" style={gnex2(SB2.indexOf(i))} ><div id="qnum" className={chu()}  >{SB2.indexOf(i)}</div>
          <div id="qesem" >{i.question}</div>
          <div id="qeop" onClick={e=> ffans2(SB2.indexOf(i),"a")} ><div onClick={e=> ffans2(SB2.indexOf(i),"a")} id="akpom" ><div id="akpomin" style={dfans2(SB2.indexOf(i),"a")} ></div></div><div id="iccn"><div className={chu()} >{i.A}</div> </div></div>
          <div id="qeop" onClick={e=> ffans2(SB2.indexOf(i),"b")} ><div onClick={e=> ffans2(SB2.indexOf(i),"b")} id="akpom" ><div id="akpomin" style={dfans2(SB2.indexOf(i),"b")} ></div></div><div id="iccn"><div className={chu()} >{i.B}</div></div></div>
          <div id="qeop" onClick={e=> ffans2(SB2.indexOf(i),"c")} ><div onClick={e=> ffans2(SB2.indexOf(i),"c")} id="akpom" ><div id="akpomin" style={dfans2(SB2.indexOf(i),"c")} ></div></div><div id="iccn"><div className={chu()} >{i.C}</div></div></div>
          <div id="qeop" onClick={e=> ffans2(SB2.indexOf(i),"d")} ><div onClick={e=> ffans2(SB2.indexOf(i),"d")} id="akpom" ><div id="akpomin" style={dfans2(SB2.indexOf(i),"d")} ></div></div><div id="iccn"><div className={chu()} >{i.D}</div></div></div>
          <div id={runie(i.E)} onClick={e=> ffans(SB2.indexOf(i),"e")} ><div onClick={e=> ffans(SB2.indexOf(i),"d")} id="akpom" ><div id="akpomin" style={dfans2(SB2.indexOf(i),"e")} ></div></div><div id="iccn"><div className={chu()} >{i.E}</div></div></div>

          </div>
          )}
          </div>
          
          
          <div style={subdip(j3)} >
            <div id="tai" >{j3}</div>

          {
          SB3.map(i=>  
          <div id="objective" style={gnex3(SB3.indexOf(i))} ><div id="qnum" className={chu()}  >{SB3.indexOf(i)}</div>
          <div id="qesem" >{i.question}</div>
          <div id="qeop" onClick={e=> ffans3(SB3.indexOf(i),"a")} ><div onClick={e=> ffans3(SB3.indexOf(i),"a")} id="akpom" ><div id="akpomin" style={dfans3(SB3.indexOf(i),"a")} ></div></div><div id="iccn"><div className={chu()} >{i.A}</div> </div></div>
          <div id="qeop" onClick={e=> ffans3(SB3.indexOf(i),"b")} ><div onClick={e=> ffans3(SB3.indexOf(i),"b")} id="akpom" ><div id="akpomin" style={dfans3(SB3.indexOf(i),"b")} ></div></div><div id="iccn"><div className={chu()} >{i.B}</div></div></div>
          <div id="qeop" onClick={e=> ffans3(SB3.indexOf(i),"c")} ><div onClick={e=> ffans3(SB3.indexOf(i),"c")} id="akpom" ><div id="akpomin" style={dfans3(SB3.indexOf(i),"c")} ></div></div><div id="iccn"><div className={chu()} >{i.C}</div></div></div>
          <div id="qeop" onClick={e=> ffans3(SB3.indexOf(i),"d")} ><div onClick={e=> ffans3(SB3.indexOf(i),"d")} id="akpom" ><div id="akpomin" style={dfans3(SB3.indexOf(i),"d")} ></div></div><div id="iccn"><div className={chu()} >{i.D}</div></div></div>
          <div id={runie(i.E)} onClick={e=> ffans3(SB3.indexOf(i),"e")} ><div onClick={e=> ffans3(SB3.indexOf(i),"d")} id="akpom" ><div id="akpomin" style={dfans3(SB3.indexOf(i),"e")} ></div></div><div id="iccn"><div className={chu()} >{i.E}</div></div></div>

          </div>
          )}
          </div>

          
          <div style={subdip(j4)} >
            <div id="tai" >{j4}</div>

          {
          SB4.map(i=>  
          <div id="objective" style={gnex4(SB4.indexOf(i))} ><div id="qnum" className={chu()}  >{SB4.indexOf(i)}</div>
          <div id="qesem" >{i.question}</div>
          <div id="qeop" onClick={e=> ffans4(SB4.indexOf(i),"a")} ><div onClick={e=> ffans4(SB4.indexOf(i),"a")} id="akpom" ><div id="akpomin" style={dfans4(SB4.indexOf(i),"a")} ></div></div><div id="iccn"><div className={chu()} >{i.A}</div> </div></div>
          <div id="qeop" onClick={e=> ffans4(SB4.indexOf(i),"b")} ><div onClick={e=> ffans4(SB4.indexOf(i),"b")} id="akpom" ><div id="akpomin" style={dfans4(SB4.indexOf(i),"b")} ></div></div><div id="iccn"><div className={chu()} >{i.B}</div></div></div>
          <div id="qeop" onClick={e=> ffans4(SB4.indexOf(i),"c")} ><div onClick={e=> ffans4(SB4.indexOf(i),"c")} id="akpom" ><div id="akpomin" style={dfans4(SB4.indexOf(i),"c")} ></div></div><div id="iccn"><div className={chu()} >{i.C}</div></div></div>
          <div id="qeop" onClick={e=> ffans4(SB4.indexOf(i),"d")} ><div onClick={e=> ffans4(SB4.indexOf(i),"d")} id="akpom" ><div id="akpomin" style={dfans4(SB4.indexOf(i),"d")} ></div></div><div id="iccn"><div className={chu()} >{i.D}</div></div></div>
          <div id={runie(i.E)} onClick={e=> ffans4(SB4.indexOf(i),"e")} ><div onClick={e=> ffans4(SB4.indexOf(i),"d")} id="akpom" ><div id="akpomin" style={dfans4(SB4.indexOf(i),"e")} ></div></div><div id="iccn"><div className={chu()} >{i.E}</div></div></div>

          </div>
          )}
          </div>


          <div id="qminibar" ><div id="kpum"  ></div></div>

          <div id="qmum" >
          <div id="quest" ></div>
          <div id="opta" ></div>
          <div id="opta" ></div>
          <div id="opta" ></div>
          <div id="opta" ></div>
          <div id="next" ></div>
          </div>

<div id="cbprev" onClick={e=> pretes()} ><div id="unibtt" >Previous</div></div>

<div id="poin"  onClick={e=> invertpin()} > <img alt='img' className={prvg()} id="img" src={arrowup} /> </div>
  <div id="cbnext" ><div id="unibtt" onClick={e=> nxttes()} >Next</div></div>
    </div>

    
{/*________________________*/}

    

    </div>


{/*__________________________________________________________________________________________________________________________________________*/}

    <div style={_claa("sumer")} onClick={e=> setwed("wedd2")}>
    <div id="uiskin"  >
      <div id="oke" ><div className={chu()}  >Examination Summary</div></div>
      <div id="moderm" className={chu()} >

        <div id="scol" >
        <div id="scoo" >Examination Score</div>
        <div id="scoodit" >0%</div>
        </div>

        <div id="scor" >
          <div id="jscor" ></div>
        </div>
        
      </div>
      </div>
      
      <div id="poinx"   onClick={e=> {skipchild(e);runwed()}} > <img alt='img' className={prvg()} id="img" src={arrowup} /> </div>

      <div id={wed} className={chu()} onClick={e=> skipchild(e)} > 
      <div id="mkk">
      <div id="nkwan"  onClick={e=>setwed("wedd2")} >View Explanations</div>
      <div id="nkwan" onClick={e=> {setkss(2);setsll("moslide1");setsubmenu(0);setclaa(2);setwed("wedd2")}} >Start Another Exam</div>
      <div id="nkwan" onClick={e=> {setkss(1);setsll("moslide1");setsubmenu(0);setss(7);setwed("wedd2")}} >Exit Classroom</div></div>
      </div>
    </div>




{/*__________________________________________________________________________________________________________________________________________*/}

</div>
        
</div>
</div>


{/*__________________________________________________________________________________________________________________________________________*/}

  <div style={dss(3)} >

<div id="uiskin2" >


<div id="ppkg" >

  <div id="pka" >



<img hidden="hidden" alt='img' id="gi" src={gradient}  />



<div id="promax" style={bcc} >
  
  <div id="col_c" >

    <div>
  <div id='logopr' >

        <div id="upline">
        <div id='ic1' ><img alt='img' id='unimage' src={icon} /></div><div id='ic2'><img alt='img' id='unimage' src={genus} /></div>
        </div>
        <div id='ic3' ><img alt='img' id='unimage' src={villa} /></div>
        </div>
        
        <div id="hocent" > <div id="hhh"  >Subscribe</div></div>

           <img alt='img' hidden="hidden" id="aaa" src={statistics} />
      <div id="pkgh" className="svg3"  >Premium ad-free</div>  
      <div id="pkgb" className="svg3"  >Credit  unit - 10</div>  
      
      <div id="spz" ></div>
</div>

</div>

   </div>

</div>

    </div>


</div>


  </div>


  <div style={dss(4)} > 

  <div id="uiskin2" >
<div id="scro" >
<div id="dyc" >

<div id="card" style={bcc} >
  <img alt='img' id='bc_img' src={rose} />
  <img alt='img' id='cardicon' src={mastercard} />
  <div id="cardname" >Onah {rfn}</div>
  <div id="creditunit" >
    <div id="preg"><div id="microtex" >Credit Unit</div><div id="megatex"  >0</div></div>
    </div>
  <div id="amount" >
    <div id="preg"><div id="microtex" >Amount</div><div id="megatex"  >$ 0.00</div></div>
    </div>
</div>

<div id="car1" style={bcc} > 
  <img alt='img' id='bc_img' src={rose} />

<div id="vvv" >
 <img alt="img" id="ico" src={history} /><div id="mgbada" >0</div>
      <div id="timcook" >Transaction history<span id="pms" > </span> </div>
</div>
 </div>

<div id="car2" style={bcc} >
  <img alt='img' id='bc_img' src={rose} />

<div id="vvv" >
 <img alt="img" id="ico" src={history} /><div id="mgbada" >0</div>
      <div id="timcook" >Last Transaction<span id="pms" > </span> </div>
</div>
 </div>

</div>


    <div id="basin"style={bcc} >

      <div id="rowcent" >
    <img alt="img" id="potorico" src={userx} />
    <div></div>
    
    <div id="cui" > 
    
      <div id="cuii" className={prvg()} >Receiver<span id="pms" > </span> </div>
      <div id="cuix"  style={{fontSize:"12px",width:"120px"}} className={prvg()} > Credit unit receiver </div>
      
     </div>
    </div>

      <div id="tem" >
        <input type="text" placeholder='Enter E-mail' id="loom" />
        <input type="text" placeholder='Credit unit' id="loom" style={{width:"90px"}} />
        <div id="unibtt" style={{marginTop:"20px"}} >Send</div>
        
        </div>


    </div>

        <div id="transpoper" style={bcc} > 
        
<div id="ming1" style={bcc} > 
  <img alt='img' id='bc_img' src={rose} />

<div id="vvv" >
 <img alt="img" id="ico" src={history} /><div id="mgbada" >0</div>
      <div id="timcook" >Transaction history<span id="pms" > </span> </div>
</div>
 </div>

<div id="ming2" style={bcc} >
  <img alt='img' id='bc_img' src={rose} />

<div id="vvv" >
 <img alt="img" id="ico" src={history} /><div id="mgbada" >0</div>
      <div id="timcook" >Last Transaction<span id="pms" > </span> </div>
</div>
 </div>

        
        </div>
        
        
        </div>
</div>
      


   </div>





  <div style={dss(5)} >

    
  <div id="UImini" > <img alt="img" src={library} id="licon"  /> <span className={prvg()}>library</span> </div>

  <div id='jimmy' > <div id='opsix' >
<div id={xox2("All")} onClick={e=>  {qcat2("All")} }>All</div>
<div id={xox2("Arts")} onClick={e=>  {qcat2("Arts")} }>Arts</div>
<div id={xox2("Photography")} onClick={e=>  {qcat2("Photography")} }>Photography</div>
<div id={xox2("Artificial intelligence")} onClick={e=>  {qcat2("Artificial intelligence")} }>Artificial intelligence</div>
<div id={xox2("Biographies & Memoirs")} onClick={e=>  {qcat2("Biographies & Memoirs")} }>Biographies & Memoirs</div>
<div id={xox2("Business & Investing")} onClick={e=>  {qcat2("Business & Investing")} }>Business & Investing</div>
<div id={xox2("Children's eBooks")} onClick={e=>  {qcat2("Children's eBooks")} }>Children's eBooks</div>
<div id={xox2("Comics, Manga & Graphic Novels")} onClick={e=>  {qcat2("Comics, Manga & Graphic Novels")} }>Comics, Manga & Graphic Novels</div>
<div id={xox2("Computers & Technology")} onClick={e=>  {qcat2("Computers & Technology")} }>Computers & Technology</div>
<div id={xox2("Cookbooks, Food & Wine")} onClick={e=>  {qcat2("Cookbooks, Food & Wine")} }>Cookbooks, Food & Wine</div>
<div id={xox2("Crafts, Hobbies & Home")} onClick={e=>  {qcat2("Crafts, Hobbies & Home")} }>Crafts, Hobbies & Home</div>
<div id={xox2("Education & Teaching")} onClick={e=>  {qcat2("Education & Teaching")} }>Education & Teaching</div>
<div id={xox2("Engineering & Self-Help")} onClick={e=> {qcat2("Engineering & Self-Help")}} >Engineering & Self-Help</div> 
<div id={xox2("Foreign Language eBooks")} onClick={e=> {qcat2("Foreign Language eBooks")}} >Foreign Language eBooks</div>
<div id={xox2("Health, Fitness & Dieting")} onClick={e=> {qcat2("Health, Fitness & Dieting")}} >Health, Fitness & Dieting</div>
<div id={xox2("Theology")} onClick={e=> {qcat2("Theology")}} >Theology</div>
<div id={xox2("History")} onClick={e=> {qcat2("History");}} >History</div>
<div id={xox2("Humor & Entertainment")} onClick={e=> {qcat2("Humor & Entertainment")}} >Humor & Entertainment</div>
<div id={xox2("Law")} onClick={e=> {qcat2("Law")}} >Law</div> 
<div id={xox2("Literature & Fiction")} onClick={e=> {qcat2("Literature & Fiction")}} >Literature & Fiction</div>
<div id={xox2("Medical eBooks")} onClick={e=> {qcat2("Medical eBooks")}} >Medical eBooks</div>
<div id={xox2("Mystery, Thriller & Suspense")} onClick={e=> {qcat2("Mystery, Thriller & Suspense")}} >Mystery, Thriller & Suspense</div>
<div id={xox2("Parenting & Relationships")} onClick={e=> {qcat2("Parenting & Relationships")}} >Parenting & Relationships</div>
<div id={xox2("Politics & Social Sciences")} onClick={e=> {qcat2("Politics & Social Sciences")}} >Politics & Social Sciences</div>
<div id={xox2("Reference eBooks")} onClick={e=> {qcat2("Reference eBooks")}} >Reference eBooks</div> 
<div id={xox2("Religion & Spirituality")} onClick={e=> {qcat2("Religion & Spirituality")}} >Religion & Spirituality</div>
<div id={xox2("Romance")} onClick={e=> {qcat2("Romance")}} >Romance</div>
<div id={xox2("Science & Math")} onClick={e=> {qcat2("Science & Math")}} >Science</div>
<div id={xox2("Science & Math")} onClick={e=> {qcat2("Science & Math")}} >Math</div>
<div id={xox2("Science Fiction & Fantasy")} onClick={e=> {qcat2("Science Fiction & Fantasy")}} >Science Fiction & Fantasy</div>
<div id={xox2("Self-Help")} onClick={e=> {qcat2("Self-Help")}} >Self-Help</div>
<div id={xox2("Sports & Outdoors")} onClick={e=> {qcat2("Sports & Outdoors")}} >Sports & Outdoors</div> 
<div id={xox2("Teen & Young Adult eBooks")} onClick={e=> {qcat2("Teen & Young Adult eBooks")}} >Teen & Young Adult eBooks</div>
<div id={xox2("Travel")} onClick={e=> {qcat2("Travel")}} >Travel</div>
<div id={xox2("Library and museum studies")} onClick={e=> {qcat2("Library and museum studies")}} >Library and museum studies</div> 
<div id={xox2("Business")} onClick={e=> {qcat2("Business")}} >Business</div>
<div id={xox2("Engineering")} onClick={e=> {qcat2("Engineering and technology")}} >Engineering and technology</div>
<div id={xox2("Military sciences")} onClick={e=> {qcat2("Military sciences")}} >Military sciences</div> 
</div></div>
        
    <Bookslib/>
     
     </div>


  <div style={dss(6)} >
    <div id="uiskin" style={bcc} >
      <div id="sfi" >
        <img alt="img" id="na"  src={events} />
        <div id="nat" className={prvg()} >Special events comming soon </div>
      </div>
    </div></div>


  <div style={dss(7)} >
    <div id="uiskin2" >
    <div id="dif" onClick={e=> {skipchild(e);setquskii("quorapikin");setpichiki("What do you want to ask or   ?")}} >
      <div id="quar"  style={bcc} onClick={e=> tobase()} >

      <div id="quorask"  ><div id={quskii} >
        <textarea id="smo" placeholder={pichiki} onClick={e=> {skipchild(e);quski1(e)} } onChange={e=> setquest(e.currentTarget.value)} /></div>
        <div id='jimmy' > <div id='opse' >
        <div id={xox("All")} onClick={e=>  {qcat("All")} }>All</div>
        <div id={xox("Science")} onClick={e=>  {qcat("Science");setgory("Science")} }>Science</div>
        <div id={xox("Technology")} onClick={e=>  {qcat("Technology");setgory("Technology")} }>Technology</div>
        <div id={xox("Education")} onClick={e=>  {qcat("Education");setgory("Education")} }>Education</div>
        <div id={xox("Art")} onClick={e=>  {qcat("Art");setgory("Art")} }>Art</div>
        <div id={xox("Visual arts")} onClick={e=>  {qcat("Visual arts");setgory("Visual arts")} }>Visual arts</div>
        <div id={xox("History")} onClick={e=>  {qcat("History");setgory("History")} }>History</div>
        <div id={xox("Languages and literature")} onClick={e=>  {qcat("Languages and literature");setgory("Languages and literature")} }>Languages and literature</div>
        <div id={xox("Artificial intelligence")} onClick={e=>  {qcat("Artificial intelligence");setgory("Artificial intelligence")} }>Artificial intelligence</div>
        <div id={xox("Law")} onClick={e=> {qcat("Law");setgory("Law")}} >Law</div> 
        <div id={xox("Philosophy")} onClick={e=> {qcat("Philosophy");setgory("Philosophy")}} >Philosophy</div>
        <div id={xox("Religious Studies")} onClick={e=> {qcat("Religious Studies");setgory("Religious Studies")}} >Religious Studies</div>
        <div id={xox("Theology")} onClick={e=> {qcat("Theology");setgory("Theology")}} >Theology</div>
        <div id={xox("Anthropology")} onClick={e=> {qcat("Anthropology");setgory("Anthropology")}} >Anthropology</div>
        <div id={xox("Archaeology")} onClick={e=> {qcat("Archaeology");setgory("Archaeology")}} >Archaeology</div>
        <div id={xox("Economics")} onClick={e=> {qcat("Economics");setgory("Economics")}} >Economics</div> 
        <div id={xox("Geography")} onClick={e=> {qcat("Geography");setgory("Geography")}} >Geography</div>
        <div id={xox("Linguistics")} onClick={e=> {qcat("Linguistics");setgory("Linguistics")}} >Linguistics</div>
        <div id={xox("Political science")} onClick={e=> {qcat("Political science");setgory("Political science")}} >Political science</div>
        <div id={xox("Psychology")} onClick={e=> {qcat("Psychology");setgory("Psychology")}} >Psychology</div>
        <div id={xox("Sociology")} onClick={e=> {qcat("Sociology");setgory("Sociology")}} >Sociology</div>
        <div id={xox("Social work")} onClick={e=> {qcat("Social work");setgory("Social work")}} >Social work</div> 
        <div id={xox("Chemistry")} onClick={e=> {qcat("Chemistry");setgory("Chemistry")}} >Chemistry</div>
        <div id={xox("Earth science")} onClick={e=> {qcat("Earth science");setgory("Earth science")}} >Earth science</div>
        <div id={xox("Astronomy")} onClick={e=> {qcat("Astronomy");setgory("Astronomy")}} >Astronomy</div>
        <div id={xox("Physics")} onClick={e=> {qcat("Physics");setgory("Physics")}} >Physics</div>
        <div id={xox("Transportation")} onClick={e=> {qcat("Transportation");setgory("Transportation")}} >Transportation</div>
        <div id={xox("Public policy")} onClick={e=> {qcat("Public policy");setgory("Public policy")}} >Public policy</div> 
        <div id={xox("Public administration")} onClick={e=> {qcat("Public administration");setgory("Public administration")}} >Public administration</div>
        <div id={xox("Medicine and health")} onClick={e=> {qcat("Medicine and health");setgory("Medicine and health")}} >Medicine and health</div>
        <div id={xox("Library and museum studies")} onClick={e=> {qcat("Library and museum studies");setgory("Library and museum studies")}} >Library and museum studies</div> 
        <div id={xox("Business")} onClick={e=> {qcat("Business");setgory("Business")}} >Business</div>
        <div id={xox("Engineering")} onClick={e=> {qcat("Engineering and technology");setgory("Engineering and technology")}} >Engineering and technology</div>
        <div id={xox("Journalism, media studies and communication")} onClick={e=> {qcat("Journalism, media studies and communication");setgory("Journalism, media studies and communication")}} >Journalism, media studies and communication</div>
        <div id={xox("Military sciences")} onClick={e=> {qcat("Military sciences");setgory("Military sciences")}} >Military sciences</div> 
        </div></div>
         
        <div id="permanent" style={uo()} ><div id="proxmox" ><img alt="img" id="unimage" src={loading} /></div></div>
         <div id="permanent" style={uo1()} ><div id="proxmox" ><img alt="img" id="unimage" src={loading} /></div></div>
         
         <div id="dhs" style={uo()} ><Recat/></div>
         <div id="dhs" style={uo1()} ><Recat/></div>
        
        </div>
      <div id={ssmt()} onClick={e=> {skipchild(e);quski()}} >{aspo()}  </div>
      
      </div>

      <div id="sfixi" hidden="hidden" >
        <img alt="img" id="na" src={Question} />
        <div id="nat" className={prvg()} >Server Contents </div>
      <div id="quarx" >
        
      </div>

      </div>

      <div id="quars2"  style={bcc} >
        <div id="ihgad"className={chu()} >The Overflow Blog</div>
        <div id="gonews" style={bcc} className={chu()} >GENUS Villa is the world-leading producer and provider of science videos with the mission to improve scientific research and education. With 16,000+ video articles published across several disciplines in science, medicine and engineering, faculty members can use JoVE to boost student learning outcomes and comprehension, teach science practicals effectively in classrooms, improve student engagement with complex science topics, increase research reproducibility and productivity, save time and resources in the lab and make lab training programs more efficient and cost-effective.
</div>

<div id="ihgad"className={chu()} >The Overflow Blog</div>
        <div id="gonews" style={bcc} className={chu()} >GENUS Villa is the world-leading producer and provider of science videos with the mission to improve scientific research and education. With 16,000+ video articles published across several disciplines in science, medicine and engineering, faculty members can use JoVE to boost student learning outcomes and comprehension, teach science practicals effectively in classrooms, improve student engagement with complex science topics, increase research reproducibility and productivity, save time and resources in the lab and make lab training programs more efficient and cost-effective.
</div>

      </div>
    </div>
    </div>
  </div>


  <div style={dss(8)} >

    <div id="uiskin" style={bcc} >
      <div id="sfi" >
        <img alt="img" id="na" src={project1} />
        <div id="nat" className={prvg()} >Projects not available </div>
      </div>
    </div>

    </div>


    <div style={dss(9)} > 
  
  <div id="uiskin" style={dss(9)}>
    
  <div id="UImini" > <img alt="img" src={themec}  id="licon"  /> <span className={prvg()}> Colour-schemes</span></div>

  <div id="ulaba">
    <div id={sab(1)} onClick={e=> {sapa(1);accent(gt2)}} ><div id="tht1" onClick={e=> rewall(pixel3)} > <div id="umenco">Rose Gold</div> <div id="smb" style={t2} ></div> <div id="smb2" style={t2} ></div> <div id="smb3" ></div>  <div id="smb4" ></div>  <div id="smb5" ></div> </div></div>

    <div id={sab(2)} onClick={e=> {sapa(2);accent(gt6)}} > <div id="tht6" onClick={e=> rewall(pixel6)} >  <div id="umenco">Pink Nation</div> <div id="smb" style={t6}></div> <div id="smb2" style={t6}></div> <div id="smb3" ></div>  <div id="smb4" ></div>  <div id="smb5" ></div> </div></div>
    
    <div id={sab(3)} onClick={e=> {sapa(3);accent(gt3)}} > <div id="tht3" onClick={e=> rewall(pixel5)} > <div id="umenco">Coral Green</div> <div id="smb" style={t3}></div> <div id="smb2" style={t3}></div> <div id="smb3" ></div>  <div id="smb4" ></div>  <div id="smb5" ></div> </div></div>

    <div id={sab(4)} onClick={e=> {sapa(4);accent(gt4)}} > <div id="tht4" onClick={e=> rewall(pixel)} > <div id="umenco">Purple Crown</div> <div id="smb" style={t4} ></div> <div id="smb2" style={t4} ></div> <div id="smb3" ></div>  <div id="smb4" ></div>  <div id="smb5" ></div> </div></div>

    <div id={sab(5)} onClick={e=> {sapa(5);accent(gt5)}} > <div id="tht5" onClick={e=> rewall(pixel2)} > <div id="umenco">Sky Blue</div><div id="smb" style={t5} ></div> <div id="smb2" style={t5} ></div> <div id="smb3" ></div>  <div id="smb4" ></div>  <div id="smb5" ></div> </div></div>
    
    <div id={sab(6)} onClick={e=> {sapa(6);accent(gt1)}} > <div id="tht2" onClick={e=> rewall(pixel7)} > <div id="umenco">Cabon black</div><div id="smb" style={t1} ></div> <div id="smb2" style={t1} ></div> <div id="smb3" ></div>  <div id="smb4" ></div>  <div id="smb5" ></div> </div></div>

    <div id={sab(7)} onClick={e=> {sapa(7);accent(gt7)}} > <div id="tht7" onClick={e=> rewall(pixel4)} > <div id="umenco">Magenta</div> <div id="smb" style={t7} ></div> <div id="smb2" style={t7} ></div> <div id="smb3" ></div>  <div id="smb4" ></div>  <div id="smb5" ></div> </div></div>

    </div>


    <div id="miniulaba" >
      <div id="etim"><img alt='img' id='unimage' src={rosegold} /></div>    <div id="themename" style={bcc} className={foco()} onClick={e=> auto_t(1,gt2,pixel3)} >Rose Gold</div>
      <div id="etim"><img alt='img' id='unimage' src={pinknation} /></div>  <div id="themename" style={bcc} className={foco()} onClick={e=> auto_t(2,gt6,pixel6)} >Pink Nation</div>
      <div id="etim"><img alt='img' id='unimage' src={coralgreen} /></div>  <div id="themename" style={bcc} className={foco()} onClick={e=> auto_t(3,gt3,pixel5)} >Coral Green</div>
      <div id="etim"><img alt='img' id='unimage' src={purplecrown} /></div> <div id="themename" style={bcc} className={foco()} onClick={e=> auto_t(4,gt4,pixel)} >Purple Crown</div>
      <div id="etim"><img alt='img' id='unimage' src={skyblue} /></div>     <div id="themename" style={bcc} className={foco()} onClick={e=> auto_t(5,gt5,pixel2)} >Sky Blue</div>
      <div id="etim"><img alt='img' id='unimage' src={carbonblack} /></div> <div id="themename" style={bcc} className={foco()} onClick={e=> auto_t(6,gt1,pixel7)} >Cabon black</div>
      <div id="etim"><img alt='img' id='unimage' src={magenta} /></div>     <div id="themename" style={bcc} className={foco()} onClick={e=> auto_t(7,gt7,pixel4)} >Magenta</div>
    </div>

    <div id='apply' style={bcc} ><div ><img alt='img' id='ooo' className={prvg(1)}   style={{height:'40px',marginRight:'10px'}} src={paintbrush} /></div><div style={{paddingTop:"10px",fontSize:'14px',fontWeight:'bold'}} className={prvg()} >Apply</div></div>


     </div>
     
     </div>

     

  <div style={dss(10)} > 
<div id="ach" style={bcc} onClick={e=> {setmao(1);setdosage("dosage");setoverdose("overdose")}}  > <img id="achii" alt='img' src={man}/><div id="achild" className={prvg()} >Account</div>
</div>
<div id="ach" style={bcc}  onClick={e=> {setdosage("overdose");setoverdose("dosage")}} > <img id="achii" alt='img'  src={dollar} /><div id="achild" className={prvg()} >Funds</div></div>
<div id="ach" style={bcc}  onClick={e=> {setmao(2);}} > <img id="achii" alt='img'  src={reff} /><div id="achild" className={prvg()} >Inivites</div></div>


  {/*________________________________________________________________________________________________________________________________________________________*/}

  <div id={dosage} >
    
  <div style={runmao(2)} >
  <div >
    <div id="uiskin" style={bcc} >
      <div id="sfi" >
        <img alt="img" id="na" className={prvg()} src={hum} />
        <div id="nat" className={prvg()} >No Inivites </div>
      </div>
    </div></div>
</div>

<div style={runmao(1)} >
  <div id="ach_skin" style={bcc} >
    <div id="prof" className={prvg()}  >Profile Details </div>
    <div id="prodat">
       <img id="prim" alt='img' src={lenses} />
<div id="dolly" >Upload Photo</div>
    </div>
    <div id="underskin" >
      
    
    <div id='row_c' >
        <div id='col_c' style={{width:'80%'}} >
          <div id="form_header" className={prvg()} >Edit Profile</div>

        <div id='dinflex' >
        <div id='formdynwidth' ><input id='unimput' onChange={e=> setfullname(e.currentTarget.value)} className='form' placeholder={account.map(i=> i.fullname)} /> <div id="report" style={vform} >{rep(1)}</div></div>
        
        <div id='formdynwidth' ><input id='unimput' onChange={e=> setemail(e.currentTarget.value)} className='form' value={account.map(i=> i.email)}/> <div id="report" style={vform} >{rep(2)}</div></div>
        
        </div>

        <div id='dinflex' >
        <div id='formdynwidth' ><input id='unimput' onChange={e=> setemail(e.currentTarget.value)} className='form' value={account.map(i=> i.country)}/> <div id="report" style={vform} >{rep(2)}</div></div>
        
        <div id='formdynwidth' ><input id='unimput' type='number' 
        pattern="/^-?\d+\.?\d*$/" onInput={e=> limitnumber(e,18) }
         onChange={e=> setphone(e.currentTarget.value)} className='form' placeholder='Enter phone' />  <div id="report" style={vform} >{rep(4)}</div></div>
        
        </div>

        
        <div id="form_header" className={prvg()} >Withdrawal Profile</div>
        
        <div id='dinflex' >
        <div id='formdynwidth' >
          <div id="okpo" ><img id='img' alt="img" src={pm} /></div>
          <input id='unimput' type='password' onChange={e=> setpassword(e.currentTarget.value)} className='form' placeholder='Enter  Perfect Money Pay id' /> <div id="report" style={vform} >{rep(5)}</div></div>
        
        <div id='formdynwidth' >
          <div id="okpo" ><img id='img' alt="img" src={usdtt} /></div>
          <input id='unimput' type='password' onChange={e=> setpassword2(e.currentTarget.value)} className='form' placeholder='Enter Usdt Wallet address' /> <div id="report" style={vform} >{rep(6)}</div></div>
        
        </div>
   
        
        {/*
        <div id='dinflex-c'  >
        <div id='formdynwidth' ><input id='unimput' className='form' placeholder='Re-Enter Password' /> </div>
        </div>
         */}

      <div id='unibtt' className='form' onClick={e=> verify()} >Update Profile</div>
        </div>
        </div>

    </div>
  </div>
  </div>
</div>
  {/*________________________________________________________________________________________________________________________________________________________*/}

<div id={overdose} >
  <div id="ach_skin" style={bcc} >
     
  <div id={holly} >
      
      <div id="card" style={bcc} onClick={e=> {setholly("jik2");setholly2("jik1");setrbb(1)}} >
   <img alt='img' id='bc_img' src={rose} />
   <img alt='img' id='cardicon' src={mastercard} />
   <div id="cardname" >Onah {rfn}</div>
   <div id="creditunit" >
     <div id="preg"><div id="microtex" >Credit Unit</div><div id="megatex"  >0</div></div>
     </div>
   <div id="amount" >
     <div id="preg"><div id="microtex" >Amount</div><div id="megatex"  >$ 0.00</div></div>
     </div>
 </div>
 
      </div>

  <div id={holly2} >
      
      <div id="card" style={bcc} onClick={e=> {setholly("jik1");setholly2("jik2");setrbb(2)}} >
   <img alt='img' id='bc_img' src={rose} />
   <img alt='img' id='cardicon' src={mastercard} />
   <div id="goko" >  </div>
   <div id="creditunit" >
     <div id="preg"><div id="microtex" >{""}</div><div id="megatex"  ><img alt="img" className={prvg()} id="bctt" src={tdbc} /></div></div>
     </div>
   <div id="amount" >
     <div id="preg"><div id="microtex" >{""}</div><div id="megatex"  style={{fontSize:"20px"}} >{"Genus Villa"}</div></div>
     </div>
 </div>
 
      </div>


      
      <div style={runbutt(1)} >
      <div id="dpcrd" >
      <div id="dpr" >  <div id='ims' ><img id="img" alt='img' src={back2} /></div> <div><div id='zoo' >Credit</div></div></div>
      <div id="crd"    ><div id='zoo2'>Cash</div><img id="ims2" alt='img' src={back2} /></div>
      </div></div>

      
      <div style={runbutt(2)} >
      <div id="dpcrd" >
      <div id="dpr" >  <div id='ims' ><img id="img" alt='img' src={back2} /></div> <div onClick={e=> setgig("g")} ><div id='zoo3' >Withdrawal</div></div></div>
      <div id="crd"  onClick={e=> setpolom("g")} ><div id='zoo2'>Deposit</div><img id="ims2" alt='img' src={back2} /></div>
      </div></div>
     
    </div></div>


     </div>



     
{/*__________________________________________________________________________________________________________________________________________*/}


<div style={dss(11)} >

  <div id="uiskin"  >
<div id="mumcard" >
  <center>
<div id="cardcon" >
      <div id="drc" >
        
 
      <div style={bcc} id="DTwidgetA">
      <div id="timeA" className={prvg()}>Students<span id="pms" > </span> </div>
        <div id="wicoA" className="wico2" ><img alt="img" id="gsc2" src={students} /></div><div id="norA" className={prvg()} >0</div>
      <div id="dateA" className={prvg()}> current credit unit puchased </div>
      </div>
      <div style={bcc} id="DTwidgetA">
      <div id="timeA" className={prvg()}>Teachers<span id="pms" > </span> </div>
        <div id="wicoA" className="wico2" ><img alt="img" id="gsc1" src={Teachers} /></div><div id="norA" className={prvg()} >0</div>
      <div id="dateA" className={prvg()}> current credit unit puchased </div>
      </div>
      
      </div>

</div>

<div id="cardcon" >
      <div id="drc" >
 
      <div style={bcc} id="DTwidgetA">
      <div id="timeA" className={prvg()}>Awards<span id="pms" > </span> </div>
        <div id="wicoA" className="wico2" ><img alt="img" id="gsc3" src={Awards} /></div><div id="norA" className={prvg()} >0</div>
      <div id="dateA" className={prvg()}> Reward offered for competition accomplishement </div>
      </div>
      <div style={bcc} id="DTwidgetA">
        <div id="wico" className="wico2" ><img alt="img" id="gsc4" src={credit} /></div><div id="nor" className={prvg()} >0</div>
      <div id="time" className={prvg()}>Credited<span id="pms" > </span> </div>
      <div id="date"  style={{fontSize:"12px",width:"120px"}}  className={prvg()}> Total credit unit puchased </div>
      </div>
      
      </div>

</div>
</center>


<div id="fiwixA" >
    <div id="i5A"  style={bcc} >
      
      <div id="racoon">
      <img alt="img" id="guymini"  src={messege} /> <div id="microtex" className={prvg()} >Unread messeges</div><div id="megatex" className={prvg()} >Messeges</div>
     <div id="microtex" className={prvg()} >              </div><div id="megatex" className={prvg()} >0</div>
      </div> 
      

    <div id="racoon">
      <img alt="img" id="guymini"  src={chat} /> <div id="microtex" className={prvg()} >Chat</div><div id="megatex" className={prvg()} >chat</div>
     <div id="microtex" className={prvg()} >              </div><div id="megatex" className={prvg()} >     </div>
      </div> 
      

  <div id="preg"></div> </div>
    </div>


    <div id="fiwixA"  >
    <div id="i5Amini" style={bcc} >
      
      <div id="racoon">
      <img alt="img" id="guymini"  src={knowledge} /> <div id="microtex" className={prvg()} > Unread Reports</div><div id="megatex" className={prvg()} >Reports</div>
     <div id="microtex" className={prvg()} >              </div><div id="megatex" className={prvg()} >0</div>
      </div> 

  <div id="preg"></div> </div>
    </div>

    

</div>
</div>

  </div>
  
{/*__________________________________________________________________________________________________________________________________________*/}
{/*__________________________________________________________________________________________________________________________________________*/}

<div style={dss(12)} >

  <div id="uiskin"  >
    <div id="admus" style={bcc} >
      <span id="sd1" ><div id='ssv' ></div>Student name</span>
      <span id="sd2" >Credit Unit</span>
      <span id="sd3" >Package</span>
    </div>


    <div id="admusb" style={bcc} >

<div id="stud" >
  <span id="ssd1" onClick={e=> setpo(2)} > <div id="minimage" ><img id="img" alt='img' src={more} /></div> <div>Student name</div></span>
  <span id="sd2" >Credit Unit</span>
  <span id="sd3" >Package</span>
  </div>
  
    </div>

    
  </div>
  
  </div>
  
{/*__________________________________________________________________________________________________________________________________________*/}



<div style={dss(13)} >
  <div id="uiskin" style={bcc} >

  <div style={_claa("2X")}>
      {/*  onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0)}}   */}
<div id="popin" > 
  <div id="cic" onClick={e=> setclaa("TX") } ><div id="fixd" ><img alt='img' id="img_a" src={toefil}  /></div><div id="cname8" className='cnamex' ><div id="ctex" >Language Test</div></div> </div>

  <div id="cic" onClick={e=> {setclaa("4X");setex("General")} } ><div id="fixd" ><img alt='img' id="img_a" src={gclass}  /></div><div id="cname1" className='cnamex' ><div id="ctex" >General</div></div> </div>
  <div id="cic" onClick={e=> {setclaa("4X");setex("Tertiary")} } ><div id="fixd" ><img alt='img' id="img_a" src={tertiary}  /></div><div id="cname2" className='cnamex' ><div id="ctex" >Tertiary</div></div> </div>
  <div id="cic" onClick={e=> {setclaa("4X");setex("Post Utme")} } ><div id="fixd" ><img alt='img' id="img_a" src={utme}  /></div><div id="cname3" className='cnamex' ><div id="ctex" >Post Utme</div></div> </div>
  <div id="cic" onClick={e=> setclaa("jamb") } ><div id="fixd" ><img alt='img' id="img_a" src={jamb}  /></div><div id="cname4" className='cnamex' ><div id="ctex" >Jamb</div></div> </div>
  <div id="cic" onClick={e=> {setclaa("4X");setex("SSCE")} } ><div id="fixd" ><img alt='img' id="img_a" src={ssce}  /></div><div id="cname5" className='cnamex' ><div id="ctex" >SSCE</div></div> </div>
  <div id="cic" onClick={e=> {setclaa("4X");setex("Noun")} } ><div id="fixd" ><img alt='img' id="img_a" src={noun}  /></div><div id="cname6" className='cnamex' ><div id="ctex" >Noun</div></div> </div>
  <div id="cic" onClick={e=> {setclaa("4X");setex("Advanced")} } ><div id="fixd" ><img alt='img' id="img_a" src={advanced}  /></div><div id="cname7" className='cnamex' ><div id="ctex" >Advanced</div></div> </div>
  <div style={{height:"50px"}} ></div>
  </div>
  
  </div>

  <div style={_claa("TX")}>
      {/*  onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0)}}   */}
<div id="popin" > 
  <div id="cic" onClick={e=> setclaa("5X") } ><div id="fixd" ><img alt='img' id="img_a" src={toefil}  /></div><div id="cname8" className='cnamex' ><div id="ctex" >Toefil</div></div> </div>
  <div id="cic" onClick={e=> setclaa("5X") } ><div id="fixd" ><img alt='img' id="img_a" src={ielts}  /></div><div id="cname9" className='cnamex' ><div id="ctex" >Ielts</div></div> </div>

  <div style={{height:"50px"}} ></div>
  </div>
  
  </div>

  


  <div style={_claa("4X")}>
    {/*style={{ backgroundImage: `url(${bio})` }}*/}
<div id="popin" style={{marginTop:"34px"}}> 
    
<div id="nokia"><img id='img' alt='img' src={backo} onClick={e=> {setclaa("2X")}} /></div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("T0X");setsubject("English")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio1}  /></div><div id="cname1" className='cnamex' ><div id="ctex" >English</div></div> </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("T0X");setsubject("Mathematics")}} id="cic" > <div id="fixd" ><img alt='img' id="img_b" src={bio2}  /></div><div id="cname2" className='cnamex' ><div id="ctex" >Mathematics</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("T0X");setsubject("Biology")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio3}  /></div><div id="cname3" className='cnamex' ><div id="ctex" >Biology</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("T0X");setsubject("Chemistry")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio4}  /></div><div id="cname4" className='cnamex' ><div id="ctex" >Chemistry</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("T0X");setsubject("Physics")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio5}  /></div><div id="cname5" className='cnamex' ><div id="ctex" >Physics</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("T0X");setsubject("Economics")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio6}  /></div><div id="cname6" className='cnamex' ><div id="ctex" >Economics</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("T0X");setsubject("Government")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio7}  /></div><div id="cname7" className='cnamex' ><div id="ctex" >Government</div></div>  </div>
<div style={{height:"50px"}} ></div>
</div>

</div>

<div style={_claa("jamb")}>
    

    {/*style={{ backgroundImage: `url(${bio})` }}*/}
<div id="popin" style={{marginTop:"34px"}} > 
    <div id="nokia"><img id='img' alt='img' src={backo} onClick={e=> {setclaa("2X")}} /></div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("0X");setex("Jamb");setsubject("English")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio1}  /></div><div id="cname1" className='cnamex' ><div id="ctex" >English</div></div> </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("0X");setex("Jamb");setsubject("Mathematics")}} id="cic" > <div id="fixd" ><img alt='img' id="img_b" src={bio2}  /></div><div id="cname2" className='cnamex' ><div id="ctex" >Mathematics</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("0X");setex("Jamb");setsubject("Biology")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio3}  /></div><div id="cname3" className='cnamex' ><div id="ctex" >Biology</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("0X");setex("Jamb");setsubject("Chemistry")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio4}  /></div><div id="cname4" className='cnamex' ><div id="ctex" >Chemistry</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("0X");setex("Jamb");setsubject("Physics")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio5}  /></div><div id="cname5" className='cnamex' ><div id="ctex" >Physics</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("0X");setex("Jamb");setsubject("Economics")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio6}  /></div><div id="cname6" className='cnamex' ><div id="ctex" >Economics</div></div>  </div>
<div onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0);setclaa("0X");setex("Jamb");setsubject("Government")}} id="cic" > <div id="fixd" ><img alt='img' id="img_a" src={bio7}  /></div><div id="cname7" className='cnamex' ><div id="ctex" >Government</div></div>  </div>
<div style={{height:"50px"}} ></div>
<div></div>
</div>

</div>

<div style={_claa("5X")}>
    
    {/*style={{ backgroundImage: `url(${bio})` }}*/}
<div id="popin" style={{marginTop:"34px"}}> 
<div id="nokia"><img id='img' alt='img' src={backo} onClick={e=> {setclaa("2X")}} /></div>

<div id="cic" ><div id="fixd" ><img alt='img' id="img_a" src={bio5}  /></div><div id="cname5" className='cnamex' ><div id="ctex" >Listening</div></div> </div>
<div id="cic" ><div id="fixd" ><img alt='img' id="img_a" src={bio1}  /></div><div id="cname1" className='cnamex' ><div id="ctex" >Reading</div></div> </div>
<div id="cic" ><div id="fixd" ><img alt='img' id="img_b" src={bio2}  /></div><div id="cname2" className='cnamex' ><div id="ctex" >Writing</div></div> </div>
<div id="cic" ><div id="fixd" ><img alt='img' id="img_a" src={bio3}  /></div><div id="cname3" className='cnamex' ><div id="ctex" >Speaking</div></div> </div>
<div style={{height:"50px"}} ></div>
</div>

</div>

  
<div id="umeray" style={_claa("T0X")}>
      {/*  onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0)}}   */}
      <input id="okeagu" hidden="hidden" accept="image/*" type="file"  onChange={e=> testimage(e)} />
      <div id="addimage" onClick={e=> runaly() } ><div id="tet" >Add</div><img id="dso" alt="img" src={Check_Exi(qimg)} /></div>
      <div id="addimage2"   >Ex</div>{/*onClick={e=>setvex("text")}*/}
      <div id="plusE" onClick={e=> runplus()} >+E</div>
      <div id="que" > <div id="italy" style={{marginLeft:"20px"}} >{ex} {subject}</div>
        <textarea  id="ikeagwulam" onChange={e=> setquestion(e.currentTarget.value)} />
        <div id="haa" ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="a" name="bula" type="radio" /> <input id="puntusa" onChange={e=> setA(e.currentTarget.value)}/> </div>
        <div id="haa" ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="b" name="bula" type="radio" /> <input id="puntusb" onChange={e=> setB(e.currentTarget.value)}/> </div>
        <div id="haa" ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="c" name="bula" type="radio" /> <input id="puntusc" onChange={e=> setC(e.currentTarget.value)}/> </div>
        <div id="haa" ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="d" name="bula" type="radio" /> <input id="puntusd" onChange={e=> setD(e.currentTarget.value)}/> </div>
        <div id={plus()} ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="e" name="bula" type="radio" /> <input id="puntuse" placeholder='' onChange={e=> setE(e.currentTarget.value)}/> </div>
        <div id="upli" onClick={e=> uploadTest()} >Upload</div>
    </div>

  </div>

  
<div id="umeray" style={_claa("0X")}>
      {/*  onClick={e=> {setkss(13);setsll("moslide1");setsubmenu(0);sethisto(0)}}   */}
      <input id="okeagu" hidden="hidden" accept="image/*" type="file"  onChange={e=> testimage(e)} />
      <div id="addimage" onClick={e=> runaly() } ><div id="tet" >Add</div><img id="dso" alt="img" src={Check_Exi(qimg)} /></div>
      <div id="addimage2"   >Ex</div>{/*onClick={e=>setvex("text")}*/}
      <div id="plusE" onClick={e=> runplus()} >+E</div>
      <div id="que" > <div id="italy" style={{marginLeft:"20px"}} >{ex} {subject}</div>
        <textarea  id="ikeagwulam" onChange={e=> setquestion(e.currentTarget.value)} />
        <div id="haa" ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="a" name="bula" type="radio" /> <input id="puntusa" onChange={e=> setA(e.currentTarget.value)}/> </div>
        <div id="haa" ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="b" name="bula" type="radio" /> <input id="puntusb" onChange={e=> setB(e.currentTarget.value)}/> </div>
        <div id="haa" ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="c" name="bula" type="radio" /> <input id="puntusc" onChange={e=> setC(e.currentTarget.value)}/> </div>
        <div id="haa" ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="d" name="bula" type="radio" /> <input id="puntusd" onChange={e=> setD(e.currentTarget.value)}/> </div>
        <div id={plus()} ><input id="minibu" onChange={e=> setANS(e.currentTarget.value)} value="e" name="bula" type="radio" /> <input id="puntuse" placeholder='' onChange={e=> setE(e.currentTarget.value)}/> </div>
        <div id="upli" onClick={e=> uploadJamb()} >Upload</div>
    </div>

  </div>

    
  </div>
  </div>
  
{/*__________________________________________________________________________________________________________________________________________*/}



<div style={dss(14)} >

  <div id="uiskin" >
    
    

  <div id="uiskin"  >
    <div id="admus"style={bcc} >
      <span id="sd1" ><div id='ssv' ></div> Student name</span>
      <span id="sd2" >Amount</span>
      <span id="sd3" >Date</span>
    </div>


    <div id="admusb" style={bcc} >

<div id="stud"  onClick={e=> setpo(1)} >
  <span id="ssd1" > <div id="minimage" ><img id="img" alt='img' src={more} /></div> <div>Student name</div></span>
  <span id="sd2" >Amount</span>
  <span id="sd3" >Date</span>
  </div>
  
    </div>

    
  </div>

  </div></div>
  
{/*__________________________________________________________________________________________________________________________________________*/}
{/*__________________________________________________________________________________________________________________________________________*/}


<div style={dss(15)} >

<div id="uiskin" >
  

<div id="uiskin"  >
  <div id="admus" style={bcc} >
    <span id="sd1" ><div id='ssv' ></div>Student name</span>
    <span id="sd2" >Amount</span>
    <span id="sd3" >Date</span>
  </div>


  <div id="admusb" style={bcc} >

<div id="stud" >
<span id="ssd1" onClick={e=> setpo(3)} > <div id="minimage" ><img id="img" alt='img' src={more} /></div> <div>Student name</div></span>
<span id="sd2" >Amount</span>
<span id="sd3" >Date</span>
</div>

  </div>

  
</div>

</div></div>

{/*__________________________________________________________________________________________________________________________________________*/}
{/*__________________________________________________________________________________________________________________________________________*/}


<div style={dss(17)} >

<div id="uiskin" >

<div id="uiskin" style={runhisto(0)} >
  
  
  <div id="mumglo" >
<div id="glo1"  style={bcc} onClick={e=> sethisto(2)} >Deposit History</div>
  <div id="glo1"  style={bcc} onClick={e=> sethisto(2)} >Withdrawal History</div>
  </div>
</div>
  
<div id="uiskin" style={runhisto(2)}  >
  <div id="admus" style={bcc} >
    <span id="sd1" ><div id='ssv' ></div>Student name</span>
    <span id="sd2" >Amount</span>
    <span id="sd3" >Date</span>
  </div>


  <div id="admusb" style={bcc} >

<div id="stud" >
<span id="ssd1" onClick={e=> setpo(3)} > <div id="minimage" ><img id="img" alt='img' src={more} /></div> <div>Student name</div></span>
<span id="sd2" >Amount</span>
<span id="sd3" >Date</span>
</div>

  </div>
</div>

<div id="uiskin" style={runhisto(3)}  >
  <div id="admus" style={bcc} >
    <span id="sd1" ><div id='ssv' ></div>Student name</span>
    <span id="sd2" >Amount</span>
    <span id="sd3" >Date</span>
  </div>


  <div id="admusb" style={bcc} >

<div id="stud" >
<span id="ssd1" onClick={e=> setpo(3)} > <div id="minimage" ><img id="img" alt='img' src={more} /></div> <div>Student name</div></span>
<span id="sd2" >Amount</span>
<span id="sd3" >Date</span>
</div>

  </div>
</div>




</div></div>

{/*__________________________________________________________________________________________________________________________________________*/}





</div>

      <div id="P" style={{display:"none"}}>
      <div>
      <div id="progkey" onClick={e=> setss(1)} >1</div>
      <div id="progkey" onClick={e=> setss(2)} >2</div>
      <div id="progkey" onClick={e=> setss(3)} >3</div>
      <div id="progkey" onClick={e=> setss(4)} >4</div>
      <div id="progkey" onClick={e=> setss(5)} >5</div>
      <div id="progkey" onClick={e=> setss(6)} >6</div>
      <div id="progkey" onClick={e=> setss(7)} >7</div>
      <div id="progkey" onClick={e=> setss(8)} >8</div></div>
      <div>
      <div id="progkey" onClick={e=> rewall(pixel)} >X1</div>
      <div id="progkey" onClick={e=> rewall(pixel2)} >X2</div>
      <div id="progkey" onClick={e=> rewall(pixel3)} >X3</div>
      <div id="progkey" onClick={e=> rewall(pixel4)} >X4</div>
      <div id="progkey" onClick={e=> rewall(pixel5)} >X5</div>
      <div id="progkey" onClick={e=> rewall(pixel6)} >X6</div>
      <div id="progkey" onClick={e=> rewall(pixel7)} >X7</div>
      <div id="progkey" onClick={e=> rewall(pixel4)} >X8</div></div>
      </div>

    </div>
  );
}

export default App;