import React from 'react'
import '../Styles/Aside.css'
import one from '../Images/1on1.png'
import choose from '../Images/choose.webp'
import { useNavigate } from 'react-router-dom'
import Templates from './Templates'
import Layout from './Layout'

function Dashboard() {
    const navigate = useNavigate()


    const handleBasicTemplate = () => {

    }

    const handlePrebuildTemplate = ()=>{
navigate('/templates')
    }

    return (
        <>
            <div className='dashboard'>
                <Layout />
                <div style={{ marginLeft: "200px", marginTop: "1px" }} className=' mb-3 p-3 flex-column  text-center fs-5 pt-5 pb-5'>

                    <h2 className="bold">Design Your Content BLock</h2>

                    <div> <p>To get started on your first campaign, just select a template, update its content, and your <br /> email is ready to go. Export it to the ESP of your choice.</p></div>


                    <div className='d-flex justify-content-around mt-5'>
                        <div onClick={handleBasicTemplate} className=" selectTemplate text-center border rounded ms-5 me-4  p-4">
                            <div className=''>
                                <i class="fa-regular fa-bookmark"></i></div>
                            <h4 className="bold">New Template</h4>
                            <p>Quick Start from Basic  Template</p>
                        </div>
                        <div onClick={handlePrebuildTemplate} className="selectTemplate text-center border rounded ms-5 me-4  p-3">
                            <div><i class="fa-regular fa-map"></i></div>
                            <h4 className="bold">Pre-built Templates</h4>
                            <p>Edit and use right away any of the templates</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Dashboard