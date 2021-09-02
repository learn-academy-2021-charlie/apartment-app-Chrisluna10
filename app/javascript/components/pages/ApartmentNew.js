import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
  } from 'reactstrap'

class ApartmentsNew extends Component {

    
    constructor(props){
        super(props)
        this.state = {
            form:{
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "",
            }
        }
    }
    

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState ({ form: form })
    }

    handleSubmit = () => {
       this.props.createNewApartment(this.state.form)
    }

  render() {

    
      
    return (
        <Form>
            <FormGroup>
                <Label>Street</Label>
                    <Input
                    type="text"
                    name="street"
                    onChange={ this.handleChange }
                    value={ this.state.form.street }
                    />
            </FormGroup>
            <FormGroup>
                <Label>City</Label>
                    <Input
                    type="text"
                    name="city"
                    onChange={ this.handleChange }
                    value={ this.state.form.city }
                    />
            </FormGroup>
            <FormGroup>
                <Label>State</Label>
                    <Input
                    type="text"
                    name="state"
                    onChange={ this.handleChange }
                    value={ this.state.form.state }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Manager</Label>
                    <Input
                    type="text"
                    name="manager"
                    onChange={ this.handleChange }
                    value={ this.state.form.manager }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                    <Input
                    type="text"
                    name="email"
                    onChange={ this.handleChange }
                    value={ this.state.form.email }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Price</Label>
                    <Input
                    type="text"
                    name="price"
                    onChange={ this.handleChange }
                    value={ this.state.form.price }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Bedrooms</Label>
                    <Input
                    type="integer"
                    name="bedrooms"
                    onChange={ this.handleChange }
                    value={ this.state.form.bedrooms }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Bathrooms</Label>
                    <Input
                    type="integer"
                    name="bathrooms"
                    onChange={ this.handleChange }
                    value={ this.state.form.bathrooms }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Pets?</Label>
                    <Input
                    type="text"
                    name="pets"
                    onChange={ this.handleChange }
                    value={ this.state.form.pets }
                    />
            </FormGroup>
        <Button
            name="submit"
            color="secondary"
            onClick={ this.handleSubmit }
            >
            Add new Apartment
        </Button>
    </Form>
      
  )
  
}
}
export default ApartmentsNew