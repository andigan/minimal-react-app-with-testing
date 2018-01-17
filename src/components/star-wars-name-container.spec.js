/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import StarWarsNameContainer from './star-wars-name-container';

var mockStore = {};

mockStore.starWars = {
    starWarsCharacter: ""
};

const mapStateToProps = (state) => ({
  state,
});

const ConnectedComponent = connect(mapStateToProps)(StarWarsNameContainer);

describe('Star Wars Name Container -- with Redux Connect', () => {
  let shallowStarWarsNameContainer;

  const inputLabel = () => {
    if (!shallowStarWarsNameContainer) {
      shallowStarWarsNameContainer = shallowWithState(<ConnectedComponent />, mockStore).dive().dive();
    }
    return shallowStarWarsNameContainer;
  }

  beforeEach(() => {
    shallowStarWarsNameContainer = undefined;
  });

  it('renders div.star-wars-name-container', () => {
    expect(inputLabel().find('.star-wars-name-container')).to.exist;
  });
  it('displays character in the prop', () => {
    mockStore.starWars.starWarsCharacter = "Chewbacca";
    expect(inputLabel().find('.star-wars-name-container')).to.have.text('Chewbacca');
  });
  it('contains nothing if the prop is undefined', () => {
    mockStore.starWars.starWarsCharacter = "";
    expect(inputLabel().find('.star-wars-name-container')).to.be.empty;
  });

});
