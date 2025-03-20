import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

function TemplateEditing() {    
    const [templateDetails, setTemplateDetails] = useState({
        heading1: "Image on left - Template",
        heading2: "Design your new Ideas",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi autem laboriosam quo hic consectetur. Quidem blanditiis voluptatibus quibusdam non quis, earum cupiditate, maxime dignissimos distinctio vitae nobis sed alias!",
        templateImage: "https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.jpg?s=612x612&w=0&k=20&c=ruHb87Ryd6uOr7sRnqfOussQihY89gnGDLeisJnVi-M=",
        navlink: "Readmore"
    });

    const [preview, setPreview] = useState("");
    const[key,setkey]=useState(0)
    useEffect(() => {
        if (templateDetails.templateImage instanceof File) {
            setPreview(URL.createObjectURL(templateDetails.templateImage));
        } else {
            setPreview(templateDetails.templateImage);
        }
    }, [templateDetails.templateImage]);

    const handleFile = (e) => {
        setTemplateDetails({ ...templateDetails, templateImage: e.target.files[0] });
    };

    const handleCancel = () => {
        setTemplateDetails({
            heading1: "Image on left - Template",
            heading2: "Design your new Ideas",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi autem laboriosam quo hic consectetur. Quidem blanditiis voluptatibus quibusdam non quis, earum cupiditate, maxime dignissimos distinctio vitae nobis sed alias!",
            templateImage: "https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.jpg?s=612x612&w=0&k=20&c=ruHb87Ryd6uOr7sRnqfOussQihY89gnGDLeisJnVi-M=",
            navlink: "Readmore"
        })
        setPreview("");
        if(key==0)
            {
              setkey(1)
            }
            else{
              setkey(0)
            }
    };

    return (
        <>
            <div className='row'>
                <div className='col-md-2'>
                    <Layout />
                </div>
                <div className='col-md-10 mt-5'>
                    <div className='row border mx-5 p-4'>
                        <div className='row'>
                        <input type="text" className='form-control text-center p-4 fw-bold border-0' style={{fontSize:'30px'}}value={templateDetails?.heading1} onChange={(e)=>{setTemplateDetails({...templateDetails,heading1:e.target.value})}}/>
                        <input type="text" style={{fontSize:'20px',fontStyle:'italic'}} className='form-control border-0 p-4'value={templateDetails?.heading2} onChange={(e)=>{setTemplateDetails({...templateDetails,heading2:e.target.value})}}/>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-md-1'></div>
                            <div className='col-md-4'>
                                <label htmlFor="templateImage">    
                                    <input 
                                        id="templateImage"
                                        style={{ display: 'none' }}
                                        type="file"  
                                        onChange={(e) => handleFile(e)} 
                                    key={key}
                                    /> 
                                    <img 
                                        src={preview ? preview : "https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.jpg?s=612x612&w=0&k=20&c=ruHb87Ryd6uOr7sRnqfOussQihY89gnGDLeisJnVi-M="} 
                                        alt="no image" 
                                        className='w-100' 
                                        style={{ height: '200px' }} 
                                    />
                                </label>
                            </div>
                            <div className='col-md-6'>
                          <textarea type="text" className='form-control p-4'value={templateDetails?.content} onChange={(e)=>{setTemplateDetails({...templateDetails,content:e.target.value})}}/>
                                <Link style={{textDecoration:'none'}}>
                                <input style={{color:'blue'}} type="text" className='form-control p-4 border-0'value={templateDetails?.navlink} onChange={(e)=>{setTemplateDetails({...templateDetails,navlink:e.target.value})}}/>
                                </Link>
                                <button className='btn btn-primary ms-2 me-2'>Create</button>
                                <button className='btn btn-primary ms-2 me-2' onClick={handleCancel}>Cancel</button>
                            </div>
                            <div className='col-md-1'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TemplateEditing;
