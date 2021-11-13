import React from 'react'

const UnsafeScriptsWarning = props => {
  return (
    <div className='container stocks-loader'>
      <div className='card-header'>
        <div className='card-header-icon'>
          <span className='loader'></span>
        </div>
        <div className='card-header-title'>
          Loading...
        </div>
      </div>
      <div className='card'>
        <div className='card-content'>
          click on &nbsp;<code>Load Unsafe Scripts</code>&nbsp; to proceed.
          <br /> Look  &nbsp;<code>shield icon</code>&nbsp; on browser's addreess bar.  &#8679;
          <br /><br />(its a live stocks data app:p)
        </div>
      </div>
    </div>
  );
}

export default UnsafeScriptsWarning;