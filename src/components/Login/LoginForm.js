import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';



import { loginUser } from '../../actions';
import { getLogInStateFromLocalStorage, _imitateLoginBackend } from './helper'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null
        };
        // if (getLogInStateFromLocalStorage()) {
        //     this.props.history.push('/home')
        // }
    }
    submitMethod = (e) => {
        e.preventDefault();
        if (this.state.userName !== null) {
            const token = _imitateLoginBackend(this.state.userName);
            if (token) {
            this.props.loginUser(token);
            } else {
                console.log('Something went wrong')
            }
        }
    }
    render() {
        return (

            <div>
                {this.props.token.length > 0  && <Redirect to={{ pathname:"/home" , state: {from: this.props.location}}} />} 
                    <form onSubmit={this.submitMethod}>
                        <div>
                            <label htmlFor="user-name-input">Type username</label> <br />
                            <input type="text" id="user-name-input" placeholder="Type Username" style={{ marginTop: "5px" }} autoComplete="off" onChange={(e) => {
                                this.setState({
                                    userName: e.target.value
                                })
                            }} />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <button type="submit">Login</button>
                        </div>
                    </form>
            {/* //    }  */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, {
    loginUser,
})(LoginForm);