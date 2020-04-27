import React from 'react'

class Header extends React.Component {
    render() {
    return (
        <div>
            <nav>
                <ul>
                    <img src='/Asset/Img/logos.png'/>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <input placeholder='Search Github'/>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </ul>
            </nav>
        </div>
    )
    }
}

export default Header 