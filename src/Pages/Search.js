
import React, {useCallback, useState, useEffect, useSyncExternalStore} from 'react'
import { useNavigate, Link } from 'react-router-dom'


function Search(props) {


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [stateId, setStateId] = useState(0);
  const [stateName, setStateName] = useState([]);
  const [cityId, setCityId] = useState(0);
  const [cityName, setCityName] = useState([]);
  const [barName, setBarName] = useState('');
  const [error2, setError2] = useState(null);

  const navigate = useNavigate();
  

  
  const handleOnClick = useCallback(() => 

  
  {barName === "" ? setError2("error"): 
  navigate(props.redirectPage+stateName+'/'+cityName+'/'+barName, {replace: true})}, 
  
  
  [navigate,stateName, cityName, barName]);


    useEffect(() => {
        fetch("https://d28c5850.eu-gb.apigw.appdomain.cloud/eadv/states?_=16594388883891", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                //body: JSON.stringify({user: data})
              })
          .then(res => res.json())
          .then(
            (result) => {
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
      }, [])



      const onChangeState = e => {
       // alert(e.currentTarget.value)
    //    console.log(e.target.options[e.target.selectedIndex].text)
       setStateName(e.target.options[e.target.selectedIndex].text)
       setStateId(e.currentTarget.value)
       setCityId(0)
       
        };

      const onChangeCity = e => {
        // alert(e.currentTarget.value)
        setCityId(e.currentTarget.value)
        setCityName(e.target.options[e.target.selectedIndex].text)
        
         };

         const onChangeBar = e => {
            // alert(e.currentTarget.value)
            setBarName(e.target.options[e.target.selectedIndex].text)
            
             };
    
    if (error){
        return <div>Error: {error.message}</div>;
    }else if(!isLoaded){
        return <div className='text-center'><div role="status" className="spinner-border" ><span class="visually-hidden">Loading...</span></div></div>;
    }else{
return(
    <>
     <div className="container">
     {error2 && 
     <div class="alert alert-danger" role="alert">
     Bar is Required!
   </div>
     }
                <div className="row m-2">
                    <div className="col-2">
                
                    <button type="button" className="btn btn-outline-dark">Back</button>
                    
                    </div>
                    </div>
                    </div>


            <div className="container">
                <div className="row m-2">
                    <div className="col-12">
                        <label className="form-check-label" htmlFor="exampleCheck1">State</label>
                        
                        <select key="0" onChange={onChangeState} className="form-select" aria-label="Default select example">
                        <option  value="" key="9999"> Select State </option>
                            {items.cities[0].states.map((item, i) => (
                               <option value={i} key={i}> {item.name} </option>
          ))}
                        </select>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-12">
                        <label className="form-check-label" htmlFor="exampleCheck1">District</label>
                        
                        <select key="1" onChange={onChangeCity}  className="form-select" aria-label="Default select example2">
                        <option  value="" key="9999"> Select District </option>
                        
                            {stateId && 
                            items.cities[0].states[stateId].cities.map((item,i) => (
                                <option value={i} key={i}> {item.name}</option>
           ))
           
                            }
                           
                        </select>
                    </div>
                </div>

                
                <div className="row m-2">
                    <div className="col-12">
                        <label className="form-check-label" htmlFor="exampleCheck1">Bar Association</label>
                        <select  onChange={onChangeBar} key="2" className="form-select" aria-label="Default select example">
                        <option  value="" key="9999"> Select Bar </option>
                            {cityId &&
                            <>
                            {items.cities[0].states[stateId].cities[cityId].bars === undefined ? '':
                                (items.cities[0].states[stateId].cities[cityId].bars.map((item,i) => (
                                    <option value={i} key={i}> {item.name}</option>
               )))
                            }
                            </>
          } 
                        </select>
                    </div>
                </div>

                
                <div className="row m-3">
                    <div className="col-2">
                    <button className="btn btn-primary" type="submit" onClick={handleOnClick}>{props.btnName}</button>
                    </div>
                    </div>
                    



            </div>
        </>
)
    }

  
}

export default Search