import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav `
height: 4em;
display: flex;
justify-content: space-evenly;
align-items: center;
background: #080808;
color: white;
position: relative;
`
const Li = styled.li`
display: inline;
margin: 10px;
list-style-type: none;
`
const Div = styled.div `
margin-left: 12em;
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.img `
height: 6vmin ;
pointer-events: none;
border-radius: 5em;
`
const Button = styled.div `
background: #080808;
margin: 1em;
`
const Input = styled.input `
margin: 1em; 
padding: 10px;

`
const Ul = styled.ul `
margin-right: 12em;
`

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        Search: ''
        }
        this.handleChange = this.handleChange.bind(this)
        

    }

    handleChange(event) {
     const {name, value} = event.target
     this.setState({
         [name]: value
     })
    }

   
    render() {
    return (
        <div>           
            <Navbar>
            <Logo src='/Asset/Img/logos.png' alt=''/>
                <Ul>                                    
                    <Li>Features</Li>
                    <Li>Business</Li>
                    <Li>Explore</Li>
                    <Li>Market Place</Li>
                    <Li>Pricing</Li>
                </Ul>
                  <Div>
                    <Input placeholder='Search Github'
                     name='Search'
                     onChange={this.handleChange}
                     value={this.state.Search}/>
                    <div>
                    <Button>Sign in</Button>
                    </div>
                    <Button>Sign up</Button>
                  </Div>
                
            </Navbar>
    
            
        </div>
    )
    }
}

export default Header 