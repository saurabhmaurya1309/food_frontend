import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import '../App.css';

const Home = () => {
  const [search,setSearch]=useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch(`https://food-backend-2-9337.onrender.com/api/foodData`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    response = await response.json();
    // console.log(response);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(() => {
    loadData();
  }, [])
  // return (
  //   <div>
  //     <div> <Navbar /></div>
  //     <div>
  //       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
  //         <div className="carousel-inner" id='carousel'>
  //           <div className='carousel-caption' style={{ "zIndex": "2" }}>
  //             <div className="d-flex justify-content-center">
  //               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
  //               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
  //             </div>

  //           </div>
  //           <div className="carousel-item active">
  //             <img src={img1} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
  //           </div>
  //           <div className="carousel-item">
  //             <img src={img2} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
  //           </div>
  //           <div className="carousel-item">
  //             <img src={img3} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
  //           </div>
  //         </div>
  //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  //           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //           <span className="visually-hidden">Previous</span>
  //         </button>
  //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  //           <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //           <span className="visually-hidden">Next</span>
  //         </button>
  //       </div>
  //     </div>
  //     <div className='conatiner'>
  //       {
  //         !foodCat
  //           ? "" : foodCat.map((data) => {
  //             return (<div className='row mb-3'>
  //               <div key={data._id} className='fs-3 m-3'>
  //                 {data.CategoryName}
  //               </div>
  //               <hr />
  //               {
  //                 !fooditem ? "" : fooditem.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())) ).map(filterItems => {
  //                   return (
  //                     <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
  //                       <Card foodItem={filterItems}
  //                         options={filterItems.options[0]}
  //                       />
  //                     </div>
  //                   )
  //                 })

  //               }
  //             </div>
  //             )
  //           })
  //       }
  //     </div>
  //     <div><Footer /></div>

  //   </div>
  // )
  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption' style={{ zIndex: "2" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div className='container'>
      {
        !foodCat
          ? "" : foodCat.map((data) => {
            return (
              <div className='row mb-3' key={data._id}>
                <div className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {
                  !fooditem ? "" : fooditem.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())) ).map(filterItems => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card foodItem={filterItems}
                          options={filterItems.options[0]}
                        />
                      </div>
                    )
                  })
                }
              </div>
            )
          })
      }
    </div>
    <div><Footer /></div>
  </div>
)

  
}

export default Home
