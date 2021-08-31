import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import ApartmentShow from '../ApartmentShow'

Enzyme.configure({ adapter: new Adapter() }) 

describe("When apartment Show shows", ()=>{
    //arrange
    let apartmentshow
    beforeEach(()=>{
        apartmentshow = shallow(<ApartmentShow/>)
    })
it('displays a apartmentShow',()=>{
    const apartment = apartmentshow.find('div')
    //assert
    expect(apartment.length).toEqual(1)
    })
})