import React from 'react'
import { SateliteObj } from '../../helpers/interfaces';
import { satelliteList } from '../rawData/ISROdata'

export const SatellitePage = () => {

  return (
    <>
      <h1 style={{textDecoration:"underline", margin:"2rem 0", textShadow: "2px 2px 8px grey", fontVariant:"small-caps"}}> Satellites </h1>
      <div className="d-flex flex-row justify-content-evenly flex-wrap">
      {satelliteList.map((el:SateliteObj)=>{
              return <div className="card border-info shadow p-3 mb-5 bg-body-tertiary rounded" style={{width:"14rem", margin:"0.1rem"}}> 
                        <div className="card-body">
                          <h5 className="card-title"> ID: {el["id"]}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Country: {el["country"]}</h6>
                          <p className="card-text" style={{marginBottom:"0rem"}}>Launch date: {el["launch_date"]}</p>
                          <p className="card-text" style={{marginBottom:"0rem"}}> Mass: {el["mass"]}kg </p>
                          <p className="card-text" style={{marginBottom:"0rem"}}> Launcher: {el["launcher"]} </p>
                        </div>
                      </div>
            })}
      </div>
      </>
  )
}

export default SatellitePage