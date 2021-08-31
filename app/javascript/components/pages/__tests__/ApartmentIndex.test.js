import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import ApartmentIndex from '../ApartmentIndex'

Enzyme.configure({ adapter: new Adapter() }) 

describe("When apartment index shows", ()=>{
    //arrange
    let apartmentindex
    beforeEach(()=>{
        apartmentindex = shallow(<ApartmentIndex/>)
    })
it('displays a apartmentindex',()=>{
    const apartment = apartmentindex.find('h3')
    //assert
    expect(apartment.length).toEqual(1)
    })
})