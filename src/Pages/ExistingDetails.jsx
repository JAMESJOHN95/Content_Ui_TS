import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from './Layout'

function ExistingDetails() {
  return (
    <>
   <div className='container-fluid'> 
    <div className='row'>
  <div className='col-md-2 p-0'>
    <Layout/>
  </div>
  <div className='col-md-4 mt-5'>
  <input type="text" className='form-control w-75 me-auto' placeholder='Enter the required content' />
  <div className='fs-5 d-flex align-items-center mt-3 '>
  <input
    type="radio"
    className='me-2'
    value="showAll"
    name="contentFilter" 
    id='showall'
  />
  <label htmlFor="showall" className='me-3'>Show All</label>

  <input
    type="radio"
    className='me-2'
    value='activeContent'
    name="contentFilter" 
    id='activecontent'
  />
  <label htmlFor="activecontent" className='me-3'>Active Content</label>

  <input

    type="radio"
    className='me-2'
    value='expiredContent'
    name="contentFilter" 
    id='expiredcontent'
  />
  <label htmlFor="expiredcontent" className='me-2'>Expired Content</label>
</div>

  </div>
  <div className='col-md-2'></div>
  <div className='col-md-4 mt-5 pe-4 text-end'>
                       <div>
                            <button className='btn btn-primary ms-2 me-2'>Save</button>
                            <button className='btn btn-primary ms-2 me-2'>Edit</button>
                            <button className='btn btn-primary ms-2 me-2'>Publish</button>
                            <button className='btn btn-primary ms-2 me-2'>Deactivate</button>
                        </div>
                        <div className='pe-1 text-end mt-4'>
                        <button className="me-2 btn p-2 border rounded "><i class="fa-solid fa-backward"></i></button>
                        <button className="me-2 btn p-2 border rounded">1</button>
                        <button className="me-2 btn p-2 border rounded">2</button>
                        <button className="me-2 btn p-2 border rounded">3</button>
                        <button className="me-2 btn p-2 border rounded">4</button>
                        <button className="me-2 btn p-2 border rounded">5</button>
                        <button className="me-2 btn p-2 border rounded"><i class="fa-solid fa-forward"></i></button>
                    </div>
  </div>
  </div>
 

  <div className='row table table-responsive mt-5'>
    <div className='col-md-2'></div>
     <div className='col-md-10'>
          <table className='table border rounded'>
            <thead>
                <tr>
                    <th>Template name</th>
                    <th>Category</th>   
                    <th>Completion status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sample</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td><i class="fa-solid fa-pen-to-square"></i></td>
                </tr>
                <tr>
                    <td>Checking</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td><i class="fa-solid fa-pen-to-square"></i></td>
                </tr>
            </tbody>
        </table></div></div>
    </div>





    
     
    
      
    </>
  )
}

export default ExistingDetails
