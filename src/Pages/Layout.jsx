import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggler Button */}
      <button
        className="sidebar-toggle btn btn-outline-secondary m-2 mt-4" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>

      {/* Sidebar */}
      <div 
        className={`side-bar p-2 d-flex flex-column ${isOpen ? 'active' : ''} mt-0`}
        style={{
          position: 'fixed',
          height: '100vh',
          backgroundColor: 'lightgrey',
          left: isOpen ? '0' : '-250px', 
          transition: 'left 0.3s ease',
          /* zIndex: 999, */
         /*  width: '250px' */
        }}
      >
        <ul className="list-unstyled mt-4">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <li className='mt-2 fw-bolder'>
              <i className="fa-solid fa-house me-2"></i>Dashboard
            </li>
          </Link>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>
            <li className='mt-2 fw-bolder'>
              <i className="fa-solid fa-square-plus me-2"></i>Create New Content
            </li>
          </Link>
          <Link to="/existingcontents" style={{ textDecoration: 'none', color: 'black' }}>
            <li className='mt-2 fw-bolder'>
              <i className="fa-solid fa-right-from-bracket me-2"></i>Existing Contents
            </li>
          </Link>
          <li className='mt-2 fw-bolder'>
            <i className="fa-solid fa-upload me-2"></i>Publish / Unpublish Content
          </li>
        </ul>
      </div>

      {/* Overlay to close sidebar on small screens */}
      {isOpen && (
        <div 
          className="overlay" 
          onClick={() => setIsOpen(false)} 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 998
          }}
        />
      )}
     
    </>
  );
}
