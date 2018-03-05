import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {

  generateAuralUpdate() {
    const { guesses, feedback } = this.props;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

  }

  render() {

    return (
      <div>
        <Header
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}/>
        <main role="main">
          <GuessSection/>
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
  }
}