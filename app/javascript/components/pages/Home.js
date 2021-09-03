import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Apartments App</h3>
        <img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <br />
          <NavLink to="/apartmentsindex">Apartments</NavLink>
        
      </div>
    )
  }
}
export default Home