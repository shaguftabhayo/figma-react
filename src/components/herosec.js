import React from 'react'
import heroImg from './assest/heroImg.png'

function Herosec() {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-6 col-xs-12'>
                    <h4 className='fs-2  fw-normal'>Fair price ride</h4>
                    <h1 className='fs-1 fw-bold'>Rent our <span className='f-color'>Scooter</span></h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='col-lg-6 col-md-6 col-xs-12 pt-4'>
                    <img style={{ width: '500px' }}  src={heroImg} className='width-25' alt="heroimg" />

                </div>
            </div>
        </div>
    )
}

export default Herosec