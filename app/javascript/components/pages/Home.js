import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Apartments App</h3>
          <br />
          <NavLink to="/apartmentsindex">Apartments</NavLink>
        
      </div>
    )
  }
}
export default Home