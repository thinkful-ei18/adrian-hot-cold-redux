import React from 'react';
import { connect } from 'react-redux';

import TopNav from './top-nav';

import './header.css';

import { restartGame } from '../actions';

function Header(props) {

  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.dispatch(restartGame())}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}


export default connect()(Header);