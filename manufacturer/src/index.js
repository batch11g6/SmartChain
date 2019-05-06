import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import UpdateProduct from './pages/UpdateProduct'
import ViewProducts from './pages/ViewProducts'
import Page404 from './pages/Page404'
import AddProduct from './pages/AddProduct';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/update' component={UpdateProduct} />
            <Route exact path='/viewproducts' component={ViewProducts} />
            <Route exact path='/addproduct' component={AddProduct} />
            <Route component={Page404} />
        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
