import React, { Component } from 'react'
import LoginForm from './Login/LoginForm'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { getLogInStateFromLocalStorage } from './Login/helper';
import DashBoard from './Dashboard/DashBoard';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: getLogInStateFromLocalStorage()
        }
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        {this.state.isAuth ?
                            <Redirect to="/home" /> :
                            <Redirect to="/login" />
                        }
                    </Route>
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/home" component={DashBoard} />
                    <Route path="*" component={() => {
                        return <div>404 Not Found.</div>
                    }} />
                </Switch>
            </Router>
        )
    }
}

export default App;
