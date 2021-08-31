import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col, CardText, CardImg } from 'reactstrap'

class ApartmentIndex extends Component {
  render() {
    let { apartments } = this.props
    return (
      <div className="page-body">
        <h3>Apartments</h3>
        
        <div className="index-cards">
          {apartments && apartments.map(apartment => {
            return (
              <Row key={apartment.id}>
                <Col sm="6">
                  <Card>
                      <CardImg />
                    <CardTitle> {apartment.street} </CardTitle>
                        <CardText>Click info for more information about this listing</CardText>
                        <NavLink to={`/apartmentsshow/${apartment.id}`}>Info</NavLink>
                  </Card>
                </Col>
              </Row>
              
            )
          })}
        </div>
        
      </div>
    )
  }
}
export default ApartmentIndex