import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


import { _imitateLoginBackend } from './helper';

const Login = (props) => {
    const [userName, setUserName] = useState(null);
    const [wrongCredsFlag, setWrongCredsFlag] = useState(false);
    const attemptLogin = e => {
        e.preventDefault();
        const token = _imitateLoginBackend(userName);
        if (token) {
            setWrongCredsFlag(false);
            props.authenticate(token);  
        } else {
            setWrongCredsFlag(true);
        }
    }
    return (
        props.token ? <Redirect to="/" /> :
            <div >
                Login
            <div>
                    <form onSubmit={attemptLogin}>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="user-name">Username</label>
                            <br />
                            <input type="text" placeholder="Enter Username" id="user-input" onChange={(e) => setUserName(e.target.value)} />
                            <br />
                            <label htmlFor="user-password">Password</label>
                            <br />
                            <input type="password" placeholder="Enter Password" id="user-password" />

                        </div>
                        <div>
                            {wrongCredsFlag && <div>Username or Password is incorrect</div>}
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <button type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

const mapStateToProps = state => ({
    token: state.token.length > 0 ? state.token : null
});

export default connect(mapStateToProps)(Login);