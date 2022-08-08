import { SliderValueLabel } from '@mui/material';
import React, {useCallback, useState, useEffect, useSyncExternalStore} from 'react'
import { useNavigate, Link } from 'react-router-dom'


function Login() {
  const navigate = useNavigate();
  // const handleOnClick = useCallback(() => navigate('/profile', {replace: true}), [navigate]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [bttn, setBttn] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);




  const handleSubmit = (event) => {
    event.preventDefault();
    if(username === "" || password === ""){
      alert("Empty string not allowed!!")
    }
    var data = {username,password}
        fetch("https://d28c5850.eu-gb.apigw.appdomain.cloud/eadv/token", {
          method: 'Post',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        })
    .then(res => res.json())
    .then(
      (result) => {

        if(result.statusCode === 400){
          setLoginError({msg:result.message,type:"danger" })
        }else{
          setLoginError({msg:"Successfully Login", type:"success"})
          localStorage.setItem('apiKey',result.accessToken)
          navigate('/profile', {replace: true})
        }
      console.log(result)
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
          console.log(error)
        setIsLoaded(true);
        setError(error);
      }
    )
  }



  return (
    <>
      <div className="container">

{loginError &&
  <div className={"alert alert-" + loginError.type} role="alert">
  {loginError.msg}
</div>
}

        <div className="row">
          <div className='col-4'>

          </div>



          <div className='col-4'>
            <form onSubmit={handleSubmit}>
              <div className='alisha'>
                <div className='row'>
                  <div className="col-12">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input type="email" value={username} onChange={(e) => setUserName(e.target.value)} className="form-control" id="inputEmail3" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className='col-12'>
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword3" />
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-12">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-12">
                
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </div>

              <div className="row mt-2" >
                <div className="col-6">
                  <Link to="/register" >
                    Register page
                  </Link>
                </div>



                <div className="col-6">
                  <Link to="/forgetpassword" >
                    Forgot Password
                  </Link>

                </div>
              </div>

              <div className='col-4'>

              </div>

            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login

