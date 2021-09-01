import React from 'react';

class Header extends React.Component{ 
  render(){ 
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route,
      } = this.props
      return (
       
        <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/apartmentsindex">Apartments</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        { this.props.authentication.logged_in  &&
            <div>
              <a href={this.props.authentication.sign_out_route }>Sign Out</a>
            </div>
          }
          { !this.props.authentication.logged_in &&
            <div>
              <a href={ this.props.authentication.sign_in_route }>Sign In</a>
            </div>
          }
      </div>
      )
    }
  }

export default Header; 