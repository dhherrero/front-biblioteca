import {Route, Router} from "wouter";
import Library from "./components/Library/biblioteca";
import Login from './components/Login/login';
import Home from './page/home/home';

export default function Routes (){
    return (
        <Router>
            <Route path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/biblioteca" component={Library}></Route>
        </Router>
    )}