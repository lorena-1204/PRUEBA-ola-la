import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";

import Menu from '../components/Menu';


import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Login from '../pages/Login';


import NotFoundPage from '../pages/NotFoundPage';
import Trainings from '../pages/Trainings';
import Entrepreneurs from '../pages/Entrepreneurs';
import Register from '../pages/Register';

function AppRouter() {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/login" component={Login} />

                <Route path="/registro" component={Register} />

                <Route path="/perfil" component={Perfil} />

                <Route path="/capacitaciones" component={Trainings} />

                <Route path="/emprendedores" component={Entrepreneurs} />
                
                <Route path="/404" component={NotFoundPage} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
