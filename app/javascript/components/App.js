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

  render () {
    console.log(this.state.apartments)
    return (
      <Router>
      <Header authentication={this.props}/>
      

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apartmentsindex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> } /> 
        <Route path="/apartmentsshow/:id" render={ (props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={ apartment } />
          }} />
      </Switch>

      <Footer />
    </Router>
    );
  }
}

export default App
