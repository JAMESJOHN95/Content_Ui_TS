import React from 'react'
import Layout from './Layout'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function NewTemplate() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <div className='row'>
        <div className='col-sm-2'>
            <Layout/>
        </div>
        <div className='col-sm-8'>
            <div className='d-flex justify-content-center align-items-center mt-5 border solid shadow flex-column  p-5'>
                <h5>CREATE YOUR OWN TEMPLATES</h5>
            <button className='btn btn-success rounded mt-5' onClick={handleShow}>CREATE NEW</button>
            </div>
           
        </div>
      
    </div>
     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
      
     </Modal.Header>
     <Modal.Body>
     
      <div className='row'>
      <div className='col-md-12'>
      
      <label htmlFor="itemImage">
              <input type="file"id='itemImage' style={{display:'none'}}  />
              <img src="https://cdn.dribbble.com/users/34020/screenshots/3993396/otp_icon_upload.gif"alt="no image" className='w-100' style={{height:'300px'}}/>
            </label>
  
{/* </div> */}
{/* <div className='col-md-6' style={{backgroundColor: "#f2ebeb"}}> */}
  <div className='mt-2'><textarea type="text" className='form-control' placeholder='Description' /></div>
</div>
      </div>
     
      

     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="success" onClick={handleClose}>
         Save
       </Button>
     </Modal.Footer>
   </Modal>
</>
     )
}

export default NewTemplate
