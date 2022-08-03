import React from 'react'

import'./Header.css'

const index = ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="!#">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png" alt="Netflix" />
          </a>
        </div>
        <div className="header--user">
          <a href="!#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuario" />
          </a>  
          </div>
    </header>
  )
}

export default index