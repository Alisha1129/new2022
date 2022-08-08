import React, { useState, useEffect, } from 'react'
import { useParams } from "react-router-dom";




function Searchresult() {

  let { state, city, bar } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [img, setImg] = useState('');



  useEffect(() => {
    fetch("https://d28c5850.eu-gb.apigw.appdomain.cloud/eadv/entries?bar=" + bar, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      //body: JSON.stringify({bar: bar})
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
  }, [bar])


  return (
    <>
      <div className="container">
        <p>Search Results for : {bar} | {city} | {state} </p>
        <div className="row">
          {isLoaded &&


            items.entries.map((value, i) => (




              <div className="col-4" key={i}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                <div className="col-md-4 p-3" >
                    {value.photo === "" ?
                      <img src="https://eadv.in/img/user.png" className="img-fluid" alt="none" />
                      :
                      <img src={value.photo} className="img-fluid " alt="none" />
                    }
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" >
                      <h6 className="card-title"> {value.name}</h6>
                      < small className="card-text" ><b>Enrollment:</b> {value.enrollmentNumber}<br></br><b> Chamber:</b>{value.chamberNumber}<br></br> <b>Resident:</b> {value.address}<br></br></small>
                      <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        
))}
      </div>
    </div>
    </>
  )
}

export default Searchresult