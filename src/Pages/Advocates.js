import React from 'react'
import { Link } from 'react-router-dom'


function Advocates() {
    return (
        <>
            <div className="container text-center">
        <div className="row">
            <div className="col-lg-2 col-sm-12">

            </div>
            <div className="col-lg-3 col-sm-12 mb-2">
            <Link to="/login" >
              <img src='https://eadv.in/img/icons/login.jpg' width="190px" alt='login' />
            </Link>
            
           </div>

           <div className="col-lg-2 col-sm-12">

            </div>
            <div className="col-lg-3 col-sm-12 mt-4">
            <Link to="/register" >
              <img src='https://eadv.in/img/icons/reg.jpg' width="120px" alt='register' />
            </Link>
            </div>

           <div className="col-lg-2 col-sm-12 ">

           </div>








        </div>
    </div>
        </>

        
    )
}

export default Advocates