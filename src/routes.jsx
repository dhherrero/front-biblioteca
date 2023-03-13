import {Route, Router, Switch} from "wouter";
import Login from './components/Login/Login';
import Home from './page/home/Home';
import NotFound from "./page/not-found/Not-found";
import Libros from "./components/Libreria/Libros";
import InfoLibro from "./components/InfoLibro/InfoLibro";
import UploadForm from "./components/Upload/Upload";

import {ProtectedRoute,ProtectedRolRoute} from "./service/protectedRoutes";
import MisReservas from "./components/MisReservas/MisReservas";


export default function Routes (){
   
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/biblioteca" component={Libros} />
                <ProtectedRoute path="/misreservas" component={MisReservas} />
                <ProtectedRoute path="/biblioteca/:id" component={InfoLibro} />
                <ProtectedRolRoute path="/newBook" component={UploadForm} />
                <Route component={NotFound} /> 
                
            </Switch>
        </Router>
    )}