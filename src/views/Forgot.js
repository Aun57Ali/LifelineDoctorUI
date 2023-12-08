import React from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/login.css"
import back from "assets/img/back.png";


export default function Forgot() {
  return (
    <div className="bd">
    <div className="mainlog">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="b1">
        <form>
        <Link to='/admin/Login'><img src={back} /></Link>
            
          <label htmlFor="chk" aria-hidden="true">
            Reset Your Password
          </label>          
          <input type="email" name="email" placeholder="Email" required="" />          
          <Link to='/admin/Login' style={{color:'white'}}><button>Send Mail</button></Link>
        </form>
      </div>
      
    </div>
    </div>
  )
}
