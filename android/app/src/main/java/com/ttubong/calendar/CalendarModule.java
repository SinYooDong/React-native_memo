package com.ttubong.calendar;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.ttubong.ContextProvider;
import com.ttubong.holiday.NewtonActivity;

/**
 * Created by Sinyoodong on 2016-12-20.
 */

public class CalendarModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "CalendarActivity";

    public CalendarModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    @SuppressWarnings("unused")
    public void startActivity(String extraParam) {

        Activity context = ContextProvider.getActivityContext();
        if (context != null && !context.isFinishing()) {

            Intent rctActivityIntent = new Intent(context, CalendarActivity.class);
            //rctActivityIntent.putExtra(RctActivity.EXTRA_PARAM, extraParam);
            context.startActivity(rctActivityIntent);
        }
    }
}
