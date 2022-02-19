import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityDashBoard from '../../features/activities/dashboard/ActivityDashBoard';
import ActivityForm from '../../features/activities/form/ActivityForm';


function App() {
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <Route path='/' component={HomePage} />
        <Route path='/activities' component={ActivityDashBoard} />
        <Route path='/createActivity' component={ActivityForm} />
      </Container>
    </>
  );
}

export default observer(App);
