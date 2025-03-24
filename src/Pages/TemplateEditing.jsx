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
    const [key, setKey] = useState(0);
    const [showHtml, setShowHtml] = useState(false);

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
        });
        setPreview("");
        setKey(key === 0 ? 1 : 0);
    };

    // Function to generate HTML structure
    const getHtmlStructure = () => {
        return `
        <div class='template-container'>
            <h2>${templateDetails.heading1}</h2>
            <h3><i>${templateDetails.heading2}</i></h3>
            <div class='row'>
                <div class='col-md-4'>
                    <img src="${preview}" alt="Template Image" class='w-100' style="height: 200px;" />
                </div>
                <div class='col-md-6'>
                    <p>${templateDetails.content}</p>
                    <a href="#">${templateDetails.navlink}</a>
                </div>
            </div>
        </div>`;
    };

    return (
        <>
            <div className='row'>
                <div className='col-md-2'>
                    <Layout/>
                </div>
                <div className='col-md-10 mt-5'>
                    <div className='row border shadow mx-5 p-4'>

                        {!showHtml ? (
                            <>
                                <div className='row'>
                                    <input 
                                        type="text" 
                                        className='form-control text-center p-4 fw-bold border-0' 
                                        style={{ fontSize: '30px' }}
                                        value={templateDetails?.heading1} 
                                        onChange={(e) => setTemplateDetails({ ...templateDetails, heading1: e.target.value })}
                                    />
                                    <input 
                                        type="text" 
                                        style={{ fontSize: '20px', fontStyle: 'italic' }} 
                                        className='form-control border-0 p-4' 
                                        value={templateDetails?.heading2} 
                                        onChange={(e) => setTemplateDetails({ ...templateDetails, heading2: e.target.value })}
                                    />
                                </div>

                                <div className='row mt-4'>
                                    <div className='col-md-1'></div>
                                    <div className='col-md-4'>
                                        <label htmlFor="templateImage">    
                                            <input 
                                                id="templateImage"
                                                style={{ display: 'none' }}
                                                type="file"  
                                                onChange={handleFile} 
                                                key={key}
                                            /> 
                                            <img 
                                                src={preview} 
                                                alt="Template" 
                                                className='w-100' 
                                                style={{ height: '200px' }} 
                                            />
                                        </label>
                                    </div>
                                    <div className='col-md-6'>
                                        <textarea 
                                            type="text" 
                                            className='form-control p-4' 
                                            value={templateDetails?.content} 
                                            onChange={(e) => setTemplateDetails({ ...templateDetails, content: e.target.value })}
                                        />
                                        <Link style={{ textDecoration: 'none' }}>
                                            <input 
                                                style={{ color: 'blue' }} 
                                                type="text" 
                                                className='form-control p-4 border-0' 
                                                value={templateDetails?.navlink} 
                                                onChange={(e) => setTemplateDetails({ ...templateDetails, navlink: e.target.value })}
                                            />
                                        </Link>
                                        <button className='btn btn-primary ms-2 me-2'>Create</button>
                                        <button className='btn btn-primary ms-2 me-2' onClick={handleCancel}>Cancel</button>
                                        <button 
                                            className='btn btn-primary ms-2 me-2' 
                                            onClick={() => setShowHtml(!showHtml)}
                                        >
                                            {showHtml ? "Back to Edit" : "View Structure"}
                                        </button>
                                    </div>
                                    <div className='col-md-1'></div>
                                </div>
                            </>
                        ) : (
                            <div className='p-4'>
                                <h4>HTML Structure</h4>
                                <pre className='bg-light p-3 border' style={{ whiteSpace: 'pre-wrap' }}>
                                    {getHtmlStructure()}
                                </pre>
                                <button className='btn btn-primary' onClick={() => setShowHtml(false)}>Back to Edit</button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}

export default TemplateEditing;
