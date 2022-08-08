import React from 'react'

function Resetpassword() {
  return (
    <>
     <div className="container">
                <div className="row m-3 text-center">
                    <h3>Forgot password</h3>
                    
                </div>

                <div className="row">
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <div className="arora">
                            <div className="row">
                                <div className="col-12">
                                    <label htmlfor="inputEmail3" className="col-sm-2 col-form-label">Password*</label>
                                    <div class="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlfor="inputEmail3" className="col-sm-2 col-form-label">Confirm Password*</label>
                                    <div class="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col-12">
                                    <button class="btn btn-primary" type="next"  >Reset password</button>
                                </div>
                                <div className="col-6 text center">
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

export default Resetpassword