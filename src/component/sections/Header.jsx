import { faSquareYoutube, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { faArrowRotateLeft, faBars, faBell, faClock, faDownload, faHouse, faMagnifyingGlass, faMicrophone, faThumbsUp, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../sections/header.css'
import Home from '../Pages/Home';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
   <div className='d-flex'>
      <Button  className="bg-transparent  border-0 ms-md-3  mt-md-3 w-25 p-0 m-0" onClick={handleShow}>
      <FontAwesomeIcon className='fa-xl' icon={faBars} style={{color: "#f9fafb",}} />
      <FontAwesomeIcon className='ms-2 fa-xl' icon={faYoutube} style={{color: "#f00505",}} />
      <span className='fs-5 ms-1'>KidsTube</span>
        </Button>
        <div className='d-flex ms-5 mt-4 w-100 '>
         
        <div className='d-flex ms-md-5 ps-md-5 w-100'>
           <div className='d-flex ms-md-5 me-md-5 pe-md-5 w-75'>
              <input type="text" placeholder='Search' className='form-control p-3    ' style={{borderRadius:'50px', width:'100%', height:'40px', backgroundColor:'white' }}  />
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginLeft:'-40px', marginTop:'12px'}} />
              <FontAwesomeIcon  className='ms-4 mt-2 fa-xl' icon={faMicrophone} style={{color: "#edeff2",}} />
           </div>
           <div className='d-flex ms-3 me-5'>
              <FontAwesomeIcon className='mt-2 fa-xl create' icon={faVideo} style={{color: "#f4f6fb",}} />
              <FontAwesomeIcon className='mt-2 fa-lg ms-4' icon={faBell} style={{color: "#eaecf0",}} />
             
              <FontAwesomeIcon className='mt-2 fa-lg ms-4' icon={faUser} style={{color: "#f7f7f7",}} />
             
              </div>
        </div>
         
        
        </div>
   </div>

      
      <div variant="info" className=" d-lg-block border-bottom border-bottom-light  p-md-3 " style={{height:'100vh', width:'100px' }}>
       <FontAwesomeIcon icon={faHouse} className='ms-4  mt-4' style={{color: "#fcfcfc",}} />
       <p className='text-light ms-3 ' style={{fontSize:'12px'}}> Home</p>
       <img src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg" alt="" className='ms-4  mt-4' style={{width:'20px'}} />
       <p  className='text-light ms-3 ' style={{fontSize:'12px'}} > Shorts</p> 
       <img src="https://thumbs.dreamstime.com/b/youtube-subscriptions-button-icon-vector-trendy-style-youtube-subscriptions-button-icon-vector-trendy-style-icon-221213479.jpg" alt="" className='ms-4  mt-4' style={{width:'20px'}} /> 
       <p  className='text-light' style={{fontSize:'12px'}} >Subscriptions</p> 
       <FontAwesomeIcon className='ms-4 p-1  mt-4' icon={faUser} style={{color: "#fafcff",}} />
      <p  className='text-light ms-4'  style={{fontSize:'12px'}}  > You</p>
      <FontAwesomeIcon className='ms-4 mt-4' icon={faDownload} style={{color: "#eff1f6",}} />
      <p  className='text-light ms-2'  style={{fontSize:'12px'}}  >Downloads</p>



      </div>
      <div style={{marginTop:'-630px', marginLeft:'200px'}}> 
  <Home/>
</div>
      

      <Offcanvas show={show} onHide={handleClose} responsive="" className='bg-dark' style={{width:'250px'}}>
        <Offcanvas.Header >
          <Offcanvas.Title>
          <FontAwesomeIcon onClick={handleClose} icon={faBars} style={{color: "#f9fafb",}} />

            <span className='text-light '><img src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="" className='w-25' /> KidsTube</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div variant="info" className=" d-lg-block border-bottom border-bottom-light  p-md-3 " style={{height:'100vh', width:'200px' }}>
       
       <p className='text-light '> <FontAwesomeIcon icon={faHouse} className='me-2' style={{color: "#fcfcfc",}} />Home</p>
       <p  className='text-light' ><img src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg" alt="" className='me-1' style={{width:'20px'}} /> Shorts</p> 
       <p  className='text-light' ><img src="https://thumbs.dreamstime.com/b/youtube-subscriptions-button-icon-vector-trendy-style-youtube-subscriptions-button-icon-vector-trendy-style-icon-221213479.jpg" alt="" className='me-1' style={{width:'20px'}} /> Subscriptions</p> 
      <hr className='text-light'></hr>
      <a href="/" className='text-light' style={{textDecoration:'none'}}>You </a>
      <p  className='text-light mt-3' ><FontAwesomeIcon className='me-3' icon={faUser} style={{color: "#fafcff",}} /> Your Channel</p>
      <p  className='text-light mt-3' ><FontAwesomeIcon className='me-3'  icon={faArrowRotateLeft} style={{color: "#fcfcfc",}} /> History</p>
      <p  className='text-light' ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZKzEZ8HaB2WoQMLjsZ1xqiofCYf_62TceDlVBcRbUJwbECdjRbqex--gWq93sLM_eCw&usqp=CAU" alt="" className='me-3' style={{width:'16px'}}/> PlayLists</p> 
      <p  className='text-light mt-3' ><FontAwesomeIcon className='me-3' icon={faSquareYoutube} /> Your Videos</p>
      <p  className='text-light mt-3' ><FontAwesomeIcon className='me-3' icon={faClock} /> Watch Later</p>
      <p  className='text-light mt-3' ><FontAwesomeIcon className='me-3' icon={faThumbsUp} style={{color: "#fafcff",}} />Liked Videos</p>
      <p  className='text-light mt-3' ><FontAwesomeIcon className='me-3' icon={faDownload} style={{color: "#eff1f6",}} />Downloads</p>



      </div>
        </Offcanvas.Body>
      </Offcanvas>
    <nav>

    </nav>
      
    </>
  )
}

export default Header
