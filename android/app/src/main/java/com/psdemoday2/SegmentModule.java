package com.psdemoday2;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.segment.analytics.Analytics;

public class SegmentModule extends ReactContextBaseJavaModule {
    public SegmentModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void init(String writeKey, String tag) {
        Analytics analytics = new Analytics.Builder(getReactApplicationContext(), writeKey)
                .trackApplicationLifecycleEvents()
                .recordScreenViews()
                .tag(tag)
                .build();

        Analytics.setSingletonInstance(analytics);
    }

    @Override
    public String getName() {
        return "SegmentKit";
    }

    @ReactMethod
    public void identify(String name) {
        Analytics
                .with(getReactApplicationContext())
                .identify(name, null, null);
    }
}
