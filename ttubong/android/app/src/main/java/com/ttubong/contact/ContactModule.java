package com.ttubong.contact;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.ttubong.ContextProvider;
import com.ttubong.calendar.CalendarActivity;

/**
 * Created by Sinyoodong on 2016-12-21.
 */

public class ContactModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "ContactModule";

    public ContactModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    //여기에 함수 정의.
    @ReactMethod
    public void test(Callback errorCallback, Callback successCallback){
        ContactActivity contactActivity = new ContactActivity();
        contactActivity.getCursor();
        try{
            successCallback.invoke(contactActivity.getList());
        }catch(Exception e){
            errorCallback.invoke(e.getMessage());
        }
        //return "test";
    }
}
