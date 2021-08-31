import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class ApartmentsShow extends Component {
  render() {
      console.log(this.props.apartment)
    let {apartment} = this.props
    return (
        
      <div className="page-body" >
          
      {apartment && 
          <Card className="card-show">
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Apartment number {apartment.id} </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{apartment.street}</CardSubtitle>
            <CardText>

            </CardText>
            <Button>Add to favorites</Button>
          </CardBody>
        </Card>
      }
    </div>
  )
}
}
export default ApartmentsShow