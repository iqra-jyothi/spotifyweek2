// import { FiBell, FiUser } from 'react-icons/fi';

// import Footer from './Footer';
// import { Link } from 'react-router-dom';
// const Navbar=()=>{
//     return (
//         <>
        
//          <header className="d-flex align-items-center justify-content-between   text-white " >
//       <div className=" d-flex align-items-center">
//         <img className="ms-4" src="/logo.png" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
//         <h4 className="mb-0">My Music</h4>
  
//       <div className='m-4'>
//       <Link to="/home"><button className='buttons 'style={{marginRight:'30px'}}> All </button></Link>
//  <Link to="/music">     <button className='buttons'> music </button></Link>
//       <Link to="/podcast"><button className='buttons'> podcasts </button></Link>
//       </div>
//       </div>
//       <Footer />
//       {/* <input
//         type="text"
//         className="form-control w-50"
//         placeholder="Search for songs, artists, or albums"
//       /> */}
//       <div className="d-flex align-items-center"style={{marginLeft:'-239px'}}>
//         <FiBell className="me-4" size={24} />
//         <FiUser className="me-5" size={24} />
//       </div>
    
//     </header>
//         </>
//     )
// }
// export default Navbar

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiBell, FiUser } from "react-icons/fi";
import Footer from "./Footer";

const Navbar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  // Dispatch selected category
  const handleCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  return (
    <>
      <header className="d-flex align-items-center justify-content-between text-white">
        <div className="d-flex align-items-center">
          <img
            className="ms-4"
            src="/lo.jpg"
            alt="Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <h4 className="mb-0">My Music</h4>

          <div className="m-4">
            <Link to="/home">
              <button
                className="buttons"
                style={{ marginRight: "30px" }}
                onClick={() => handleCategoryChange("All")}
              >
                All
              </button>
            </Link>
            <Link to="/music">
              <button
                className="buttons"
                onClick={() => handleCategoryChange("Music")}
              >
                Music
              </button>
            </Link>
            <Link to="/podcast">
              <button
                className="buttons"
                onClick={() => handleCategoryChange("Podcast")}
              >
                Podcasts
              </button>
            </Link>
          </div>
        </div>
        <br />
        <Footer />
        <div
          className="d-flex align-items-center"
          style={{ marginLeft: "-239px" }}
        >
          <FiBell className="me-4 ms-4" size={24} />
          <FiUser className="me-5" size={24} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
