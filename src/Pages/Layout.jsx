import React from 'react'
import Header from '../Componants/Header'
import { Link, useNavigate } from 'react-router-dom'

function Layout() {

    const navigate = useNavigate()

    const HandleCreateContent = () => {
        navigate('/dashoard')
    }

    const handleHome = () => {
        navigate('/')
    }

    return (
        <>
            <Header />
        {/*     <div style={{ marginLeft: "200px", marginTop: "" }} className='d-flex justify-content-center'>
                <div className='bg-success'>
                    <aside className='aside-tab '>
                        <ul>
                            <li onClick={handleHome}><a href="#section2"><i class="fa-solid fa-house me-2"></i>Dashboard </a></li>
                            <li onClick={HandleCreateContent}><a href="#section1"> <i class="fa-solid fa-square-plus me-2"></i>Create Content</a></li>
                            <li><a href="#section2"><i class="fa-solid fa-right-from-bracket me-2"></i>Existing Contents </a></li>
                            <li><a href="#section2"> <i class="fa-solid fa-upload me-2"></i>Publish / Unpublish Content</a></li> */}
                            {/* <li><a href="#section3">Pick a Template</a></li> */}
                            {/* <li><a href="#section4">Testimonials</a></li>
                                <li><a href="#section5">Blog</a></li>
                                <li><a href="#section6">Contact</a></li> */}
              {/*           </ul>
                    </aside>
                </div>
            </div> */}
            <div className="d-flex justify-content-center" style={{ marginLeft: "200px", marginTop: "" }}>
  <div className="bg-success">
    <aside className="aside-tab">
      <ul className="list-unstyled p-0 m-0">
        <li onClick={handleHome}>
          <a href="#section2">
            <i className="fa-solid fa-house me-2"></i>Dashboard
          </a>
        </li>
        <li onClick={HandleCreateContent}>
          <a href="#section1">
            <i className="fa-solid fa-square-plus me-2"></i>Create New Content
          </a>
        </li>
     <Link to={'/existingcontents'} className="text-decoration-none"> <li>
          <a href="#section2">
            <i className="fa-solid fa-right-from-bracket me-2"></i>Existing Contents
          </a>
        </li></Link>  
        <li>
          <a href="#section2">
            <i className="fa-solid fa-upload me-2"></i>Publish / Unpublish Content
          </a>
        </li>
        {/* <li><a href="#section3">Pick a Template</a></li>
            <li><a href="#section4">Testimonials</a></li>
            <li><a href="#section5">Blog</a></li>
            <li><a href="#section6">Contact</a></li> */}
      </ul>
    </aside>
  </div>
</div>

        </>
    )
}

export default Layout