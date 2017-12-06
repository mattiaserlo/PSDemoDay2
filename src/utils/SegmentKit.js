/**
 * @flow
 */
import { NativeModules, Platform } from 'react-native';

const SegmentKitNative = Platform.select({
    ios: NativeModules.SegmentKit,
    android: NativeModules.SegmentKit,
});

/**
 * 
 */
class SegmentKitWrapper {
    /**
     * Initialize a new instance of SegmentKit
     */
    init(writeKey, tag) {
        SegmentKitNative.init(writeKey, tag);
    }

    identify(email) {
        SegmentKitNative.identify(string);
    }
}

export default new SegmentKitWrapper();
