import React from 'react'
import { Container } from 'react-bootstrap'

function ExistingDetails() {
  return (
    <>
    <Container>
    <div className="row p-4">
                    <div className="col-lg-6 text-center">
                        <input type="text" className='form-control w-75 me-auto ms-auto' placeholder='Enter the required content' />
                    </div>
                    <div className="col-lg-6 d-flex text-center align-items-center"><h5>From</h5>
                        <input type="date" className='w-25 me-2 form-control ms-3 me-3' placeholder='Start Date' /><h5>To</h5>
                        <input type="date" className='w-25 me-2 form-control ms-3' placeholder='End Date' />
                        <button className='btn btn-primary me-3 ms-3'>Search</button>
                        <button className='btn btn-secondary'>Clear</button>
                    </div>
      </div> 
      <div className='p-3 ms-2 d-flex align-items-center justify-content-between'>
                        <div className='fs-5 d-flex align-items-center ms-5'>
                            <input
                                type="radio"
                                className='me-2 ms-2'
                                value="showAll"
                                // checked={selected === 'showAll'}
                                // onChange={handleChange}
                                id='showall'
                            //  defaultChecked
                            />
                            <label htmlFor="showall" className='me-3'>Show All</label>
                            <input
                                type="radio"
                                className='me-2'
                                value='activeContent'
                                // checked={selected === 'activeContent'}
                                // onChange={handleChange}
                                id='activecontent'
                            />
                            <label htmlFor="activecontent" className='me-3'>Active Content</label>
                            <input
                                type="radio"
                                className='me-2'
                                value='expiredContent'
                                // checked={selected === 'expiredContent'}
                                // onChange={handleChange}
                                id='expiredcontent'
                            />
                            <label htmlFor="expiredcontent" className='me-2'>Expired Content</label>
                        </div>
                        <div>
                            <button className='btn btn-primary ms-2 me-2'>Edit</button>
                            <button className='btn btn-primary ms-2 me-2'>Publish</button>
                            <button className='btn btn-primary ms-2 me-2'>Deactivate</button>
                        </div>
                    </div> 
                     <div className='pe-4 text-end'>
                        <button className="me-2 btn p-2 border rounded "><i class="fa-solid fa-backward"></i></button>
                        <button className="me-2 btn p-2 border rounded">1</button>
                        <button className="me-2 btn p-2 border rounded">2</button>
                        <button className="me-2 btn p-2 border rounded">3</button>
                        <button className="me-2 btn p-2 border rounded">4</button>
                        <button className="me-2 btn p-2 border rounded">5</button>
                        <button className="me-2 btn p-2 border rounded"><i class="fa-solid fa-forward"></i></button>
                    </div> 
                    </Container>
      
    </>
  )
}

export default ExistingDetails
