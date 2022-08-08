

import React, {useCallback} from 'react'
import { useNavigate, Link } from 'react-router-dom'


function Forgetpassword() {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/resetpassword', {replace: true}), [navigate]);
  

    return (
        <>

            <div className="container">
                <div className="row m-3 text-center">
                    <h3>Forgot password</h3>
                    <p>
                        Enter Your Email To Reset Your Password
                    </p>
                </div>

                <div className="row">
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <div className="arora">
                            <div className="row">
                                <div className="col-12">
                                    <label htmlfor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col-6 text center">
                                    <button class="btn btn-primary" type="next" onClick={handleOnClick} >Forgot password</button>
                                </div>
                                <div className="col-6 text center">
                                    <Link to="/login" >
                                        Back to log in
                                    </Link>

                                </div>
                            </div>
                            


                        </div>

                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgetpassword