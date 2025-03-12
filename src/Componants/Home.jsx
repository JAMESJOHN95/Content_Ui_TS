import React from 'react'
import Layout from '../Pages/Layout'

function Home() {
    return (
        <>
        <Layout/>
            <div className='main_content text-start mt-3' >
                <div><h3 className='ms-4'>WELCOME!</h3></div>
                <div><button className='btn  ms-4 border'>Any</button><button className='btn border  ms-4'>Any</button></div>
                <div className='d-flex justify-content-around mt-3'>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded p-2'> <h5>Total Content Blocks</h5> </div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded p-2'><h5>Content Block Published</h5></div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded p-2'><h5>Content Blocks Deactivated</h5></div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded p-2'></div>
                </div>
                <div className='d-flex justify-content-around mt-3'>
                    <div style={{width:"450px", height:"250px"}} className='border rounded'></div>
                    <div style={{width:"450px", height:"250px"}} className='border rounded'></div>
                </div>
                <div className='d-flex justify-content-around mt-3'>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded'> </div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded'></div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded'></div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded'></div>
                </div>            </div>

        </>
    )
}

export default Home