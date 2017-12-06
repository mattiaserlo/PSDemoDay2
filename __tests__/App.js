import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../src/utils/SegmentKit', () => ({
    init: jest.fn(),
}));

import SegmentKit from '../src/utils/SegmentKit';

describe('App', () => {
  it('renders correctly and calls SegmentKit.init with right params', () => {
    const App = require('../App').default;

    const tree = renderer.create(
      <App />
    );

    expect(SegmentKit.init).toBeCalledWith(
        "emuUuBXDK9yUWDOqH6XdUc9IEN2fZ8ph",
        "mattiaserlo"
    );
  });

  it('renders properly', () => {
    const App = require('../App').default;

    const tree = renderer.create(
      <App />
    );

    expect(tree).toMatchSnapshot();
  });
});
