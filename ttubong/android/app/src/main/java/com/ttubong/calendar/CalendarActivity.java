package com.ttubong.calendar;

import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.widget.CalendarView;
import android.widget.ListView;
import android.widget.Toast;

import com.github.sundeepk.compactcalendarview.CompactCalendarView;
import com.github.sundeepk.compactcalendarview.domain.Event;
import com.ttubong.R;

import java.text.ParseException;
import java.text.SimpleDateFormat;

/**
 * Created by Sinyoodong on 2016-12-20.
 */

public class CalendarActivity extends com.facebook.react.ReactActivity implements CalendarView.OnDateChangeListener{

    private CompactCalendarView calendarView;
    private ListView listview;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.calendar_layout);

        calendarView = (CompactCalendarView)findViewById(R.id.compactcalendar_view);
        listview = (ListView)findViewById(R.id.calendarlistView);
        String selectedDate = "2016/12/10";
        Event ev1 = null;
        try {
            ev1 = new Event(Color.GREEN, new SimpleDateFormat("yyyy/MM/dd").parse(selectedDate).getTime(), "Some extra data that I want to store.");
        } catch (ParseException e) {
            e.printStackTrace();
        }
        calendarView.addEvent(ev1);

        /*calendarView.setOnDateChangeListener(this);

        String selectedDate = "2016/12/10";
        try {
            calendarView.setDate(new SimpleDateFormat("yyyy/MM/dd").parse(selectedDate).getTime(), true, true);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        //calendarView.setDate(1463918226920L);*/
    }

    @Override
    public void onSelectedDayChange(CalendarView view, int year, int month, int dayOfMonth) {
        Toast.makeText(this,"선택된 날짜"+view.getDate(),Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        this.finish();
    }
}
