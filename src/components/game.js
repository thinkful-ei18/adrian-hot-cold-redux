import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { connect } from 'react-redux';
import { guessAdd, restartGame } from '../actions';

export class Game extends React.Component {

  restartGame() {
    this.props.dispatch(restartGame());
  }

  makeGuess(guess) {
  this.props.dispatch(guessAdd(guess));
  }

  generateAuralUpdate() {
    const { guesses, feedback } = this.props;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }


    this.setState({ auralStatus });
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}/>
        <main role="main">
          <GuessSection
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses}
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: '',
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);