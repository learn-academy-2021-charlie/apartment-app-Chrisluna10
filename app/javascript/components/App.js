import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentEdit from "./pages/ApartmentEdit"


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.apartmentIndex()
  }

  apartmentIndex = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => {
      return response.json()
    })
    .then(apartmentsArray => {
      this.setState({ apartments: apartmentsArray})
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewApartment = (newApartment) => {
    fetch("http://localhost:3000/apartments", {
      body:JSON.stringify(newApartment),
      headers:{
        "Content-Type": "application/json"
      },
      method:"POST"
    })
    .then(response => response.json())
    .then(payload => this.apartmentIndex())
    .catch(errors => console.log("apartment create errors:", errors))
   }

   updateApartment = (editapartment, id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(editapartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.apartmentIndex())
    .catch(errors => console.log("Apartment update errors:", errors))
  }

  deleteApartment = (id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.apartmentIndex())
    .catch(errors => console.log("apartment delete fetch errors:", errors))
  }

  render () {

    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props

    console.log(this.state.apartments)
    return (
      <Router>
      <Header {...this.props}/>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apartmentsindex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> } /> 
        <Route path="/apartmentsshow/:id" render={ (props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={ apartment } deleteApartment={ this.deleteApartment } />
          }} />
        <Route path="/apartmentsnew" render={ (props)  => <ApartmentNew createNewApartment={ this.createNewApartment } /> } />  
        <Route path={"/apartmentsedit/:id"} render={ (props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentEdit updateApartment={ this.updateApartment } apartment={ apartment } />
          }} /> 
      </Switch>

      <Footer />
    </Router>
    );
  }
}

export default App
