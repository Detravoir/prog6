import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './pages/Header'
import Tracks from './pages/tracks/Tracks'
import Footer from './pages/Footer'

import Create from './pages/tracks/Create'
import Edit from './pages/tracks/Edit'
import Show from './pages/tracks/Show'

export default function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <nav>
          <ul>
            <li style={{marginBottom: '10px', listStyleType: 'none' }}>
              <Link to="/" style={{textDecoration: 'none'}}>All tracks</Link>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <Link to="/savantmusic/create" style={{textDecoration: 'none'}}>Add new track</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Tracks}/>
          <Route path="/savantmusic/create" component={Create}/>
          <Route path="/savantmusic/:id/edit" component={Edit}/>
          <Route path="/savantmusic/:id/show" component={Show}/>
        </Switch>
        
      </div>
      <Footer></Footer>
    </Router>
  );
}
