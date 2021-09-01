import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import ApartmentNew from '../ApartmentNew'

Enzyme.configure({ adapter: new Adapter() }) 

describe("When apartment newshows", ()=>{
    //arrange
    let apartmentnew
    beforeEach(()=>{
        apartmentnew = shallow(<ApartmentNew/>)
    })
it('displays a form for creating an apartment',()=>{
    const apartment = apartmentnew.find('Form')
    //assert
    expect(apartment.length).toEqual(1)
    })
})