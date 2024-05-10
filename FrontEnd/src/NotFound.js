
import React from 'react';

const NotFound = () => {
  return (



      <div className='text-danger' style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',textAlign:'center'}} >
        <h1 style={{ fontSize: '3em' }}>404 Not Found</h1>
        <p className='lead'>The page you are looking for does not exist.</p>
      </div>

  );
};

export default NotFound;
