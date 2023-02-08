import {Route, Router} from "wouter";
import Library from "./components/Library/biblioteca";
import Login from './components/Login/login';
import Home from './page/home/home';
import NotFound from "./page/not-found/not-found";


export default function Routes (){
   
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/biblioteca" component={Library} />
            <Route path="/" component={NotFound} /> 
        </Router>
    )}