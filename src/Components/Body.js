import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
display: flex;
justify-content: space-evenly;
background: #282c34;
height: 100vh;
`

const Div = styled.div `
width: 30%;
color: white;
margin-top: 10%;
margin-left: 12em;
`
const Div1 = styled.div `
width: 30%;
background: white;
padding-top: 60px;
padding-bottom: 3em;
padding-left: 60px;
padding-right: 60px;
margin: 5em;
`
const Input = styled.input `
padding: 10px;
width: 100%;
margin: 8px 0;
box-sizing: border-box;
box-shadow: 3px 5px #888888;
`
const P = styled.p `
font-size: 13px;
`
const Button = styled.button `
width: 100%;
padding: 12px 20px;
background: #4caf50;
color: white;
`

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        username: '',
        email: '',
        password: ''
        }
    }
    render() {
        return (
        
            <Wrapper>
                <Div>
                  <h1>Built for developers</h1>
                  <p>Github is a development platform inspired by the way 
                     you work from open source to business. you can host and review
                     code, manage projects, and build software alongside millions of
                     other developers.
                  </p>
                </Div>
                <Div1>
                  <form>
                      <label> <strong>Username</strong> <br />
                      <Input name='username'
                       value={this.state.username}
                        onChange={this.handleChange}
                        placeholder='Username'/>
                        </label><br />
                        
                       <label><strong>Email</strong> <br />
                      <Input type='email'
                       name='email' value={this.state.email}
                        onChange={this.handleChange}
                        placeholder='Email'/>
                        </label><br />

                        <label><strong>Password</strong> <br />
                      <Input name='password'
                       value={this.state.password}
                       onChange={this.handleChange}
                       placeholder='Password' />
                       </label>

                       <P>use at least one letter, one numeral and seven characters</P>

                       <Button>Sign Up For Github</Button><br />

                       <P>By clicking 'Sign up for Github', you agree to our <a href='#'>terms of services</a>
                        and <a href='#'>privacy policy</a>. we will occasionally send you account
                       emails.
                        </P>
                  </form>
              

                </Div1>

            </Wrapper>
        
        )
    }
}

export default Body