import React from 'react'
import logoImg from '../components/assest/logo.png'
function Header() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img style={{ width: '50px' }}  src={logoImg} className='width-25' alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto text center  mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-decoration-underline" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>

                        </ul>
                        <form className="d-flex align-items-center" role="search">
                            <button className='border-0 '>Log in</button>
                            <button className="rounded-pill border-0 color  p-2 text-white " type="submit">Book Scooter</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header