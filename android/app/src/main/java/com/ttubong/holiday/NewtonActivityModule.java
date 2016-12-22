package com.ttubong.holiday;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.ttubong.ContextProvider;

/**
 * Created by Sinyoodong on 2016-12-20.
 */

public class NewtonActivityModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "NewtonActivity";

    public NewtonActivityModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    @SuppressWarnings("unused")
    public void startActivity(String extraParam) {
        Log.d("intest!!!!","!!!!!!!!!");
        Activity context = ContextProvider.getActivityContext();
        if(context == null){
            Log.d("널입니다.","....");
        }
        if (context != null && !context.isFinishing()) {
            Log.d("intest!!!!","2222222222222222222222");
            Intent rctActivityIntent = new Intent(context, NewtonActivity.class);
            //rctActivityIntent.putExtra(RctActivity.EXTRA_PARAM, extraParam);
            context.startActivity(rctActivityIntent);
        }
    }
}

