

import React, {useCallback} from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/thankyou', {replace: true}), [navigate]);

    return (
        <>

            <div className="container">
                <form>
                    <div className="row">
                        <div className='col-6'>
                            <label htmlfor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-7">
                                <input type="Name" className="form-control" id="abc" />
                            </div>
                        </div>

                        <div className='col-6'>
                            <label htmlfor="inputName" className="col-sm-2 col-form-label">LastName</label>
                            <div class="col-sm-7">
                                <input type="Name" className="form-control" id="abc" />
                            </div>
                        </div>


                        <div className="row">
                            <div className='col-6'>
                                <label htmlfor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-7">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>



                            <div className='col-6'>
                                <label htmlfor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-7">
                                    <input type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className='col-6'>
                                <label htmlfor="inputMobile" className="col-sm-2 col-form-label">Mobile</label>
                                <div class="col-sm-7">
                                    <input type="Mobile" className="form-control" id="123" />
                                </div>
                            </div>
                    
                          <div className='col-6'>
                            <label htmlfor="inputMobile" className="col-sm-2 col-form-label">Whatsapp Number</label>
                            <div class="col-sm-7">
                                <input type="Mobile" className="form-control" id="123" />
                            </div>
                         </div>
                      </div>


                     <div className="row">
                        <div class="col-10">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-2">

                        </div>
                     </div>

                     <div className="row">
                        <div class="col-10">
                            <label for="inputAddress2" class="form-label">Chamber</label>
                            <input type="number" class="form-control" id="inputChamber"  />
                        </div>
                        <div class="col-2">

                        </div>
                     </div>

                     <div className="row">
                        <div class="col-10">
                            <label for="inputAddress2" class="form-label">Enrolment</label>
                            <input type="number" class="form-control" id="inputEnrolment"  />
                        </div>
                        <div class="col-2">

                        </div>
                     </div>








                    <div className="row m-2">
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                
                                    <button type="signup" className="btn btn-primary" onClick={handleOnClick}>Signup</button>
                                
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        

    </>
  )
}

export default Signup