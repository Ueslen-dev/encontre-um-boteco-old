import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Register from './pages/Register'
import List from './pages/List'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/botecos" component={List}/>
                <Route path="/cadastrar" component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes