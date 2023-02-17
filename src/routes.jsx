import {Route, Router, Switch} from "wouter";
import Login from './components/Login/Login';
import Home from './page/home/Home';
import NotFound from "./page/not-found/Not-found";
import Libros from "./components/Libreria/Libros";

export default function Routes (){
   
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/biblioteca" component={Libros} />
                <Route path="/biblioteca/:numero" component={Libros} />
                <Route component={NotFound} /> 
                
            </Switch>
        </Router>
    )}