import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() }) 

describe("When Home page shows", ()=>{
    //arrange
    let home
    beforeEach(()=>{
        home = shallow(<Home/>)
    })
it('displays a Home',()=>{
    const apartment = home.find('h3')
    //assert
    expect(apartment.length).toEqual(1)
    })
})