import React from 'react'
import { Redirect } from 'react-router'

import {Route} from 'react-router-dom';

const ProtectedRoute = ({ isAuth, component:Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            if (isAuth === true) {
                return <Component />
            } else {
                return <Redirect to="/login" />
            }

        }} />
    )
}

export default ProtectedRoute;