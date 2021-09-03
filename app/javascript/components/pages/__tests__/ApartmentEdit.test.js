import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import ApartmentEdit from '../ApartmentEdit'

Enzyme.configure({ adapter: new Adapter() }) 

describe("When apartment edit page shows", ()=>{
    //arrange
    let apartmentedit
    beforeEach(()=>{
        apartmentedit = shallow(<ApartmentEdit/>)
    })
it('displays a form for editing',()=>{
    const apartment = apartmentedit.find('Form')
    //assert
    expect(apartment.length).toEqual(1)
    })
})