import React from 'react'
import { CentreObj } from '../../helpers/interfaces'
import { centreList } from '../rawData/ISROdata'

const CentrePage = () => {
  return (
    <>
    <h1 style={{textDecoration:"underline", margin:"2rem 0", textShadow: "2px 2px 8px grey", fontVariant:"small-caps"}}> Science centres: </h1>
    <div className="d-flex flex-row justify-content-evenly flex-wrap">
    {centreList.map((el:CentreObj)=>{
            return <div className="card border-info shadow p-3 mb-5 bg-body-tertiary rounded" style={{width:"14rem", margin:"0.1rem"}}> 
                      <div className="card-body">
                        <h5 className="card-title">  {el["name"]}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Place: {el["place"]} </h6>
                        <p className="card-text" style={{marginBottom:"0rem"}}>State: {el["state"]}</p>
                      </div>
                    </div>
          })}
    </div>
    </>
  )
}

export default CentrePage