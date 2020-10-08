import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './services/firebase';
import mainpage from './mainpage/mainpage';
import Signinup from './sign-in-sign-up/sign-in-sign-up';
import HomePage from './homepage/homepage';
import DeptLib from './homepage/deptlib/DeptLib';
import eBooks from './homepage/elib/eBooks';
import SEM1 from './homepage/elib/sem/sem1.component';
import SEM2 from './homepage/elib/sem/sem2.component';
import SEM3 from './homepage/elib/sem/sem3.component';
import SEM4 from './homepage/elib/sem/sem4.component';
import SEM5 from './homepage/elib/sem/sem5.component';
import SEM6 from './homepage/elib/sem/sem6.component';
import SEM7 from './homepage/elib/sem/sem7.component';
import bookhis from './homepage/bookhistory/bookhis';
import Renew from './homepage/renewbooks/renew';
import Reserve from './homepage/reservebooks/reserve';
class App extends React.Component{

  render(){
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path= '/' exact component= {mainpage}/>
      <Route exact path= '/SignUp' exact component= {Signinup}/>
      <Route exact path= '/Homepage' exact component= {HomePage}/>
      <Route exact path= '/HomePage/BookHistory' exact component= {bookhis}/>
      <Route exact path= '/HomePage/RenewBooks' exact component= {Renew}/>
      <Route exact path= '/HomePage/ReserveBooks' exact component= {Reserve}/>
      <Route exact path= '/HomePage/DeptLib' exact component= {DeptLib}/>
      <Route exact path= '/HomePage/eBooks' exact component= {eBooks}/>
      <Route exact path= '/HomePage/eBooks/SEM1' exact component= {SEM1}/>
      <Route exact path= '/HomePage/eBooks/SEM2' exact component= {SEM2}/>
      <Route exact path= '/HomePage/eBooks/SEM3' exact component= {SEM3}/>
      <Route exact path= '/HomePage/eBooks/SEM4' exact component= {SEM4}/>
      <Route exact path= '/HomePage/eBooks/SEM5' exact component= {SEM5}/>
      <Route exact path= '/HomePage/eBooks/SEM6' exact component= {SEM6}/>
      <Route exact path= '/HomePage/eBooks/SEM7' exact component= {SEM7}/>
      <Route exact path= '/HomePage/DeptLib' exact component= {DeptLib}/>
      </Switch>
      </BrowserRouter>
   </div>
  );
}
}

export default App;
