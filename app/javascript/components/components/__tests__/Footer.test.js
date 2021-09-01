import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() }) 

describe("When the footer shows", ()=>{
    //arrange
    let footer
    beforeEach(()=>{
        footer = shallow(<Footer/>)
    })
it('displays a footer',()=>{
    const apartment = footer.find('p')
    //assert
    expect(apartment.length).toEqual(1)
    })
})