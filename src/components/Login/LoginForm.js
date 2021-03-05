import React, { Component } from 'react'
import { connect } from 'react-redux';

import { loginUser } from '../../actions';
import {getLogInStateFromLocalStorage,_imitateLoginBackend} from './helper'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null
        }
    }
    componentWillUnmount() {
        const token = getLogInStateFromLocalStorage();
        if (token) {
            console.log('Already Logged In!')
            //TODO::Redirrect here
        }
    }

    submitMethod = (e) => {
        e.preventDefault();
        if (this.state.userName !== null) {
            _imitateLoginBackend(this.state.userName);
        }
    }
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.secret
    }
}

export default connect(mapStateToProps, {
    loginUser,
})(LoginForm);