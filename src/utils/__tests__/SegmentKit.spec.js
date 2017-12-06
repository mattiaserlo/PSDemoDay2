import {
  NativeModules
} from 'react-native';
import React from 'react';

describe('SegmentKit', () => {
  beforeAll(() => {
      NativeModules.SegmentKit = {
          init: jest.fn(),
      };
  });

  it('should call the native init module', () => {
      const SegmentKit = require('../SegmentKit').default;
      SegmentKit.init("key", "tag");
      expect(NativeModules.SegmentKit.init).toBeCalledWith("key", "tag");
  });
});