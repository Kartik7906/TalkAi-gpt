import React from 'react';
import './Dashboardpage.css'

const Dashboardpage = () => {
  return (
    <div className='dashboardpage'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>Talk AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with My Code</span>
          </div>
        </div>
      </div>
      <div className="formcontainer">
        <form>
          <input type="text" placeholder='Ask me Anything...' />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboardpage
