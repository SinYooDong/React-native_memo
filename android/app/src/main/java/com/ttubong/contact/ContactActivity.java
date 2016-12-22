package com.ttubong.contact;

import android.database.Cursor;
import android.provider.ContactsContract;
import android.util.Log;

import com.ttubong.ContextProvider;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by Sinyoodong on 2016-12-21.
 */

public class ContactActivity {

    String[] arrProjection = {
            ContactsContract.Contacts._ID,
            ContactsContract.Contacts.DISPLAY_NAME
    };
    String[] arrPhoneProjection = {
            ContactsContract.CommonDataKinds.Phone.NUMBER
    };
    JSONArray list;


    public void getCursor(){
        Cursor cursor = ContextProvider.getActivityContext().getContentResolver().query(
                ContactsContract.Contacts.CONTENT_URI,arrProjection,ContactsContract.Contacts.HAS_PHONE_NUMBER+"=1",null,null);
        list = new JSONArray();

        while (cursor.moveToNext()){
            String strContactId = cursor.getString(0);
            Log.d("연락처","사용자 ID"+cursor.getString(0));
            Log.d("연락처","사용자 이름"+cursor.getString(1));
            JSONObject jsonObject = new JSONObject();
            try {
                jsonObject.put("id",strContactId);
                jsonObject.put("name",cursor.getString(1));
            } catch (JSONException e) {
                e.printStackTrace();
            }

            Cursor clsPhoneCursor = ContextProvider.getActivityContext().getContentResolver().query(
                    ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                    arrPhoneProjection,
                    ContactsContract.CommonDataKinds.Phone.CONTACT_ID+" = " +strContactId,
                    null,null
            );
            while (clsPhoneCursor.moveToNext()){
                Log.d("연락처","사용자 폰번호"+clsPhoneCursor.getString(0));
                try {
                    jsonObject.put("phonNumber",clsPhoneCursor.getString(0));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
            clsPhoneCursor.close();
            list.put(jsonObject);
        }
        cursor.close();

    }

    public String getList(){
        return list.toString();
    }

}
