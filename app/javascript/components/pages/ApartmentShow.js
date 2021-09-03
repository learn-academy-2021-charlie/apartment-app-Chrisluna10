import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class ApartmentsShow extends Component {
  render() {
    let {apartment} = this.props
    return (
        
      <div className="page-body" >
          
      {apartment && 
          <Card className="card-show">
          <CardImg top width="100%" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Apartment number {apartment.id} </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Street: {apartment.street}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">City: {apartment.city}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">State: {apartment.state}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Manager: {apartment.managers}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {apartment.email}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {apartment.price}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Bedrooms: {apartment.bedrooms}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Bathrooms: {apartment.bathrooms}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Pets: {apartment.pets}</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
            <NavLink to={`/apartmentsedit/${apartment.id}`}>
            <Button>Edit Apartment</Button>
            </NavLink>
            <br />
            <NavLink to="/apartmentsindex">
            <Button onClick={ () => this.props.deleteApartment(apartment.id) }>
              Delete Apartment
            </Button>
          </NavLink>
          </CardBody>
        </Card>
      }
    </div>
  )
}
}
export default ApartmentsShow