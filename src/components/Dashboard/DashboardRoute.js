import React from 'react'
import { Route, Redirect } from 'react-router-dom';


const  DashboardRoute = ({ isAuth: isAuth, component: Component, ...props })  => {
    return (
        <Route {...props} render={props => {
            if (isAuth) {
                return <Component />
            } else {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
        }} />
    )
}

export default DashboardRoute;