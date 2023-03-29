
import space_1 from "../rawData/space_1.jpg"
import space_2 from "../rawData/space_2.jpg"
import space_3 from "../rawData/space_3.jpg"
import launcher from "../rawData/launcher.jpg"
import satellite from "../rawData/satellite.jpg"
import centre from "../rawData/centre.jpg"
import { description_1 } from "../rawData/Descriptions"

const HomePage = () => {

return (
    <>
{/* Carousele Bootstrap */}
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={space_1} className="d-block w-100" alt="slide1" style={{height:"30rem", objectFit:"cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>The Universe is under no obligation to make sense to you.</h5>
        <p>– Neil deGrasse Tyson</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={space_2} className="d-block w-100" alt="slide2" style={{height:"30rem", objectFit:"cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>I'd love to go back to space, I don't know any astronaut who doesn't want to. </h5>
        <p>- Helen Sharman</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={space_3} className="d-block w-100" alt="slide3" style={{height:"30rem", objectFit:"cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>Once you've been in space, you appreciate how small and fragile the Earth is. </h5>
        <p>- Valentina Tereshkova</p>
      </div>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    </div>

{/* Table Bootstrap*/}
<div className="container text-center" style={{marginTop:"1rem", marginBottom:"2rem"}}>
  <div className="row">
    <div className="col">
      <a href="/launchers" style={{color:"black", textDecoration:"none"}}>
        <div className="card" style={{width: "18rem"}}>
        <img src={launcher} className="card-img-top" alt="..." style={{height:"12rem",objectFit:"cover"}}/>
          <div className="card-body">
            <p className ="card-text">ISRO launchers</p>
          </div>
        </div>
      </a>
    </div>
    <div className="col">
      <a href="/satellites" style={{color:"black", textDecoration:"none"}}>
        <div className="card" style={{width: "18rem"}}>
        <img src={satellite} className="card-img-top" alt="..." style={{height:"12rem",objectFit:"cover"}}/>
          <div className="card-body">
            <p className ="card-text">ISRO satellites</p>
          </div>
        </div>
      </a>
    </div>
    <div className="col">
      <a href="/centres" style={{color:"black", textDecoration:"none"}}> 
        <div className="card" style={{width: "18rem"}}>
        <img src={centre} className="card-img-top" alt="..." style={{height:"12rem",objectFit:"cover"}}/>
          <div className="card-body">
            <p className ="card-text"> ISRO science centres </p>
          </div>
        </div> 
      </a>
    </div>
  </div>
</div>

    {/* Descriptions with photos */}
    <div className="d-flex flex-row" style={{margin:"2rem 0"}}> 
      <div className="flex-fill" style={{width:"50rem", textAlign:"justify",padding:"0 0.7rem"}}> {description_1} </div>
      <img src={space_1} alt="slide1" className="figure-img img-fluid rounded flex-fill" style={{width:"25rem", marginRight:"0.7rem"}} />
    </div>

    <div className="d-flex flex-row" style={{margin:"2rem 0"}}>       
      <img src={space_2} alt="slide1" className="figure-img img-fluid rounded flex-fill" style={{width:"25rem", marginRight:"0.7rem"}} />
      <div className="flex-fill" style={{width:"50rem", textAlign:"justify",padding:"0 0.7rem"}}> {description_1} </div>
    </div>

    <div className="d-flex flex-row" style={{margin:"2rem 0"}}> 
      <div className="flex-fill" style={{width:"50rem", textAlign:"justify",padding:"0 0.7rem"}}> {description_1} </div>
      <img src={space_3} alt="slide1" className="figure-img img-fluid rounded flex-fill" style={{width:"25rem", marginRight:"0.7rem"}} />
    </div>


    </>
  )
}

export default HomePage