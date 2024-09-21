package com.jamtech.plugins.greetings;

import android.util.Log;

public class Greetings {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
