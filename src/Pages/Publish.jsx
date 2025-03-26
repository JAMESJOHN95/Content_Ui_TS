import React, { useContext } from 'react';
import { TokenContext } from '../Componants/TokenContext';
import axios from 'axios';
import Layout from './Layout'
function Publish() {
    const { token } = useContext(TokenContext);

    const publishingTemplate = async () => {
        if (!token) {
            alert("Token Generation Failed");
            return;
        }

        try {
            console.log("Inside Publish Template Function");

            // Make POST request with correct format
            const response = await axios.post(
                'https://platform.adobe.io/ajo/content/templates',
                {
                    name: "sample ui template",
                    description: "Test",
                    templateType: "html",
                    channels: ["email"],
                    source: {
                        origin: "ajo",
                        metadata: {}
                    },
                    template: {
                        html: "<Hai>",
                        editorContext: {}
                    }
                },
                {
                    headers: {
                        "x-api-key": "bc4db24a1ce845fcbe8c99d30048af8f",
                        "x-gw-ims-org-id":"3C4727E253DB241C0A490D4E@AdobeOrg", // API Key
                        "x-sandbox-name":"uatmmh",
                        "Authorization": `Bearer ${token}`, // Use the valid token
                        "Content-Type": "application/vnd.adobe.ajo.template.v1+json",
                        
                    }
                }
            );

            if (response.status === 201) {
                console.log("Template published successfully");
            } else {
                console.error("Failed to publish template", response.data);
            }
        } catch (error) {
            console.error("Error in Publishing Template", error.response?.data || error.message);
        }
    };

    return (
       <>
            <div className='row'>
                <div className='col-md-2'><Layout/></div>
               <div className='col-md-10 mt-5'>
                    <button className='btn btn-warning' onClick={publishingTemplate}>
                        Publish
                    </button>
               </div>
            </div>
       </>
    );
}

export default Publish;
