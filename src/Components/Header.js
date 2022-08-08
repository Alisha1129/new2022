import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>

    <div className="container text-center ">
        <div className="row">
            <div className="col-lg-4 col-sm-12">

            </div>
            <div className="col-lg-4 col-sm-12">
            <Link to="/" >
            <img src="https://eadv.in/img/logo.jpg" className="img-responsive center-block" />
            </Link>
           </div>

           <div className="col-lg-4 col-sm-12">

           </div>








        </div>

    </div>
    <hr className='mb-5'/>
    </>
  )
}

export default Header