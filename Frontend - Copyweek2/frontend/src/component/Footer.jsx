
// import React from 'react';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import { FaHome, FaSearch, FaBook, FaCrown } from 'react-icons/fa';
// import MusicSearch from './MusicSearch';


// const Footer=()=>{
//     return (
//         <>
//     <Navbar  variant="dark" expand="lg" className="mb-4 " >
           
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto 4 d-flex align-items-center  justify-content-between">
//                      <input 

//         type="text"
//         className="form-control w-50 inputtext"
//         placeholder="Search for songs, artists, or albums"
        
//       />
//       <MusicSearch></MusicSearch>
//                     <Nav.Link href="#"><FaSearch className="me-2" /> </Nav.Link>
//                     <FaBook className="me-2" size={24}/> 
//                     <FaCrown className="me-2" size={24} />
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//         </>
//     )
// }
// export default Footer



// import React, { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { FaSearch, FaBook, FaCrown } from 'react-icons/fa';
// import HomeItem from './HomeItem'; // Assuming HomeItem is in the same directory
// import MusicSearch from './MusicSearch';

// const Footer = () => {
//   const [keyword, setKeyword] = useState(''); // State to store the input value

//   const handleInputChange = (e) => {
//     console.log(e.target.value);
//     setKeyword(e.target.value); // Update state as user types
//   };

//   return (
//     <>
//       <Navbar variant="dark" expand="lg" className="mb-4">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto d-flex align-items-center justify-content-between">
//             <input
//               type="text"
//               className="form-control w-50 inputtext"
//               placeholder="Search for songs, artists, or albums"
//               value={keyword} // Bind the state value to the input
//               onChange={handleInputChange} // Update state on change
//             />
//             <Nav.Link href="#">
//               <FaSearch className="me-2" />
//             </Nav.Link>
//             <FaBook className="me-2" size={24} />
//             <FaCrown className="me-2" size={24} />
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Pass the input value (keyword) to HomeItem component */}
//       <HomeItem searchTerm={keyword} />
//     </>
//   );
// };

// export default Footer;



// import React, { useRef } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { FaSearch, FaBook, FaCrown } from 'react-icons/fa';
// import HomeItem from './HomeItem'; // Assuming HomeItem is in the same directory
// import { Link } from 'react-router-dom';
// // import MusicSearch from './MusicSearch';
// const Footer = () => {
//   const inputRef = useRef(null); // Create a ref to store the input element

//   const handleSearch = () => {
//     const keyword = inputRef.current.value; // Access input value using ref
//     console.log('Search term:', keyword); // Log the search term
//     // You can add additional logic here to fetch the data
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') { // If Enter key is pressed
//       handleSearch(); // Call the search function
//     }
//   };

//   return (
//     <>
//       <Navbar variant="dark" expand="lg" className="mb-4 mt-4">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto d-flex align-items-center justify-content-between">
           
//            <input  style={{width:'400px'}}
//               ref={inputRef} // Attach the ref to the input element
//               type="text"
//               className="form-control  inputtext"
//               placeholder="Search for songs, artists, or albums...."
//               onKeyDown={handleKeyPress} // Listen for the Enter key press
//             />
//             <Nav.Link onClick={handleSearch}>
            
//             </Nav.Link>
//             <FaBook className="me-2" size={24} />
//             <FaCrown className="me-2" size={24} />
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Pass the search term directly to HomeItem component */}
//       <HomeItem searchTerm={inputRef.current?.value} />
//     </>
//   );
// };

// export default Footer;



import React, { useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSearch, FaBook, FaCrown } from 'react-icons/fa';
import HomeItem from './HomeItem'; // Assuming HomeItem is in the same directory
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { setSearchTerm } from '../store/Footerslice'; // Import the setSearchTerm action
import { Link } from 'react-router-dom';
const Footer = () => {
  const inputRef = useRef(null); // Create a ref to store the input element
  const dispatch = useDispatch(); // Get the dispatch function

  const handleSearch = () => {
    const keyword = inputRef.current.value; // Access input value using ref
    console.log('Search term:', keyword); // Log the search term
    dispatch(setSearchTerm(keyword)); // Dispatch the search term to Redux
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { // If Enter key is pressed
      handleSearch(); // Call the search function
    }
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" className="mb-4 mt-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center justify-content-between">
           <Link to="/musicsearch"> <input
              style={{ width: '400px',textDecoration:'none !important '}}
              ref={inputRef} // Attach the ref to the input element
              type="text"
              className="form-control inputtext"
              placeholder="Search for songs, artists, or albums...."
              onKeyDown={handleKeyPress} // Listen for the Enter key press
            /></Link>
            <Nav.Link onClick={handleSearch}>
              {/* <FaSearch size={24} /> */}
            </Nav.Link>
            <FaBook className="me-4" size={24} />
            <FaCrown className="me-4" size={24} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Pass the search term directly to HomeItem component */}
      <HomeItem searchTerm={inputRef.current?.value} />
    </>
  );
};

export default Footer;
