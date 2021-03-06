package com.ttubong;

import android.app.Activity;

import java.lang.ref.WeakReference;

/**
 * Created by Sinyoodong on 2016-12-20.
 */
public class ContextProvider {
    private static WeakReference<Activity> sActivityWR;

    public static void setActivityContext(Activity activity) {
        if (sActivityWR == null) {
            sActivityWR = new WeakReference<>(activity);
        }
    }

    public static Activity getActivityContext() {
        return sActivityWR != null ? sActivityWR.get() : null;
    }

    public static void clearActivityContext() {
        if (sActivityWR != null) {
            sActivityWR.clear();
        }
        sActivityWR = null;
    }
}
