import React from 'react'
import Navbar from './Navbar'
import '../assests/styles/intervention.css'

export const InterventionComponent = (props) => {
  const interventions = props.state.interventions
  const data = interventions.map(intervention => (
    <div key={intervention.incident_id} className="container">
      <div className="card-intervention d-flex justify-content-around ">
        <div className="mb-5 card-int">
          <img src="https://picsum.photos/600/300" className="card-img-top" alt="intervention" />
          <div className=" card-body">
            <h5 className="card-title">{intervention.comment}</h5>
            <p className="card-text">location: {intervention.location}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">status: {intervention.status}</small>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="row">
        <div className="col-md-12"><Navbar /></div>
      </div>
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <h1>Interventions</h1>
          <div>{data}</div>
        </div>
        <div className="col-md-3" />
      </div>
    </>
  )
}

export default InterventionComponent
