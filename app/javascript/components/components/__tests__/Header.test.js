import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Header from '../Header'

Enzyme.configure({ adapter: new Adapter() }) 

describe("When the header shows", ()=>{
    //arrange
    let header
    beforeEach(()=>{
        header = shallow(<Header/>)
    })
it('displays a header',()=>{
    const apartment = header.find('div')
    //assert
    expect(apartment.length).toEqual(2)
    })
})