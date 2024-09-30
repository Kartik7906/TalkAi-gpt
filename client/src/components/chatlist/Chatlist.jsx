import React from 'react'
import {Link} from 'react-router-dom';
import '../chatlist/Chatlist.css'
const Chatlist = () => {
  return (
    <div className='Chatlist'>
      <span className='title'>DASHBOARD</span>
      <Link to='/dashboard'>Create a New Chat</Link>
      <Link to='/'>Explore Talk AI</Link>
      <Link to='/'>Contact</Link>
      <hr />
      <span className='title'>RECENT CHATS</span>
      <div className="list">
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
        <Link to='/'>MY aht title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
            <span>Upgrade to Talk AI Pro</span>
            <span>Get Unlimited access to all features</span>
        </div>
      </div>
    </div>
  )
}

export default Chatlist
