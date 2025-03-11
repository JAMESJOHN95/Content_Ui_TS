import React from 'react'
import one from '../Images/1on1.png'
import choose from '../Images/choose.webp'
import Layout from './Layout'


function Templates() {

    const handleBasicTemplate = () => {

    }

    return (
        <>
            <Layout />
            <div style={{ marginLeft: "200px", fixed: "top" }} >
                <div className="row mt-3 p-4">
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
                <div className='p-3 border ms-2 me-2'>
                    <div className='p-3 ms-2 d-flex align-items-center justify-content-between '>
                        <div className='fs-5 d-flex align-items-center'>
                            <input
                                type="radio"
                                className='me-2'
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
                    {/* ======================================================================= */}
                    <div className='d-flex mb-3 border p-3 mt-3'>
                        <div className='w-25'>
                            <img style={{ height: "150px", width: "200px" }} src={one} alt="No Image" />
                        </div>
                        <div className='w-75 ms-3'>
                            <p className='fs-4'>Get a 1-on-1 demo of Questrade Trading</p>
                            <p className='fs-4'>
                                Ready to start trading stocks? Request a demo today to get a 1-on-1 tutorial by one of our reps to get some trading practice on our Questrade Trading platform.
                            </p>
                            <div className='d-flex justify-content-between'><a className='fs-5' target='_blank' href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM">Request a Demo </a>
                                <button className='btn border'>
                                    <i class="fa-solid fa-chart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------- */}
                    <div className='d-flex mb-3 border p-3'>
                        <div className='w-25'>
                            <img style={{ height: "150px", width: "200px" }} src={choose} alt="No Image" />
                        </div>
                        <div className='w-75 ms-3'>
                            <p className='fs-4'>How To Choose The Right Account For Your Investments</p>
                            <p className='fs-4'>
                                Learn how to choose the right account type and set investment goals you can achieve.
                            </p>
                            <div className='d-flex justify-content-between'> <a className='fs-5' target='_blank' href="https://www.questrade.com/learning/investment-concepts/accounts-101/how-to-choose-the-right-account-for-your-investments?%20s_cid=QFGBLOG_019_email_qcom_lead_pulse&eml=QFGBLOG_019_QPULSE030924_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_019&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsZ1CDKrGniPm60b-dPRv4BAzj0PS7LHXcXEDfBlY8nmLxpRx5NsCW_oZMNdVxtU0-5s1ZeNlWpkGp53fkBt3r2aDvJoRKJDkVpa6#how-to-choose-the-right-account-for-your-investments">Read More </a>
                                <button className='btn border '>
                                    <i class="fa-solid fa-chart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* ............................................................................. */}
                    
                </div>

            </div>
        </>
    )
}

export default Templates