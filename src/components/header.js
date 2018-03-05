import React from 'react';
import { connect } from 'react-redux';

import TopNav from './top-nav';

import './header.css';

import { restartGame } from '../actions';

function Header(props) {

  function generateAuralUpdate () {
    const { guesses, feedback } = props;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    return auralStatus;
  }

  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => generateAuralUpdate()}
        onRestartGame={() => props.dispatch(restartGame())}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}

const mapStateToProps = (state) => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus
})

export default connect(mapStateToProps)(Header);