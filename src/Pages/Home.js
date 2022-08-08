import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-4 col-sm-12">

            </div>
            <div className="col-lg-4 col-sm-12">
            <Link to="/search" >
              <img src='https://icons.veryicon.com/png/o/internet--web/three-body-project-icon/search-188.png' width="120px" alt='Search' />
            </Link>
            <br />
            <Link to="/advocates" >
              Advocate area
            </Link>
           </div>

           <div className="col-lg-4 col-sm-12 ">

           </div>








        </div>
    </div>
    </>
  )
}

export default Home
