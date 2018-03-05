import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import { addGuess } from '../actions';

import { connect } from 'react-redux';

function GuessSection(props) {

  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback />
      <GuessForm />
    </section>
  );
}


const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback
});

export default connect(mapStateToProps)(GuessSection);