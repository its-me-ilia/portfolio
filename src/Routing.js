import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from './Components/Pages/Main';
const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" render={()=>{
                    return <Main />
                }} />
            </Switch>
        </HashRouter>
    )
};

export default Router;