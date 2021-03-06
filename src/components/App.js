import React, {  useEffect } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login/Login';


import { loginUser } from '../actions';
import { connect } from 'react-redux';
import ProtectedRoute from './Dashboard/ProtectedRoute';
import Dashboard from './Dashboard/Dashboard';
import { getLogInStateFromLocalStorage, _isTokenValid } from './Login/helper';





const App = (props) => {
    const attemptLogin = (token) => {
        if (token) {
            props.loginUser(token);
        }
    }
    useEffect(() => {
       
        const isAlreadyLoggedIn = getLogInStateFromLocalStorage();
        if (isAlreadyLoggedIn) {
            const token = localStorage.getItem('token');
            // props.loginUser(token);
            //TODO::API REQ OPTIMIZE!!
            _isTokenValid(token).then(res => {
                props.loginUser(token);
            }).catch(err => {
                props.loginUser([]);
            })
        }
    });


    return (
        <Router>
            <Switch>
                <Route path="/login" component={() => <Login authenticate={attemptLogin} />} exact />
                <ProtectedRoute path="/" component={Dashboard} isAuth={props.token ? true : false} exact />
                <Route path="*" component={() => {
                    return <div>404 Not Found</div>
                }} />
            </Switch>
        </Router>
    )
}



const mapStateToProps = (state) => {
    return {
        token: state.token.length > 0 ? state.token : null
    }
}

export default connect(mapStateToProps, { loginUser })(App);