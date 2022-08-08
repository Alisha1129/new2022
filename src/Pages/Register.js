
import React, {useCallback} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Search from './Search'

function Register() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/signup', {replace: true}), [navigate]);
  
 return (
        <>
<Search btnName="Next" redirectPage="/signup/"/>
        </>
    )
}

export default Register