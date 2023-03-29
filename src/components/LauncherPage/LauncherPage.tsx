import React from 'react'
import { LauncherObj } from '../../helpers/interfaces'
import { launcherList } from '../rawData/ISROdata'

const LauncherPage = () => {

    return (
      <>
      <h1 style={{textDecoration:"underline", margin:"2rem 0", textShadow: "2px 2px 8px grey", fontVariant:"small-caps"}}> Launchers </h1>
      <div className="d-flex flex-row justify-content-evenly flex-wrap">
      {launcherList.map((el:LauncherObj)=>{
              return <div className="card border-info shadow p-3 mb-5 bg-body-tertiary rounded" style={{width:"14rem", margin:"0.1rem"}}> 
                        <div className="card-body">
                          <h5 className="card-title"> ID: {el["id"]}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Status: {el["status"]}</h6>
                          <p className="card-text">Category: {el["category"]}</p>
                        </div>
                      </div>
            })}
      </div>
      </>
      )
}

export default LauncherPage