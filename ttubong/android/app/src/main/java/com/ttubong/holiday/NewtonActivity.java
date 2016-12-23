package com.ttubong.holiday;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;

import com.ttubong.ContextProvider;
import com.ttubong.MainActivity;
import com.ttubong.R;
import com.ttubong.holiday.PriceAadter;
import com.ttubong.holiday.PriceDTO;

import net.daum.mf.speech.api.SpeechRecognizeListener;
import net.daum.mf.speech.api.SpeechRecognizerClient;
import net.daum.mf.speech.api.SpeechRecognizerManager;

import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;

/**
 * Created by Sinyoodong on 2016-12-20.
 */

public class NewtonActivity extends com.facebook.react.ReactActivity implements View.OnClickListener{


private ListView listView;
private Button startBtn;
private Button stopBtn;
private TextView text1;
private TextView text2;
private TextView text3;
private TextView text4;

private TextView selectText;
private TextView priceText;
private Button inputdeletBtn;
private TextView countText;
private TextView sum_priceText;

private ArrayList<PriceDTO> priceDTOs;
private PriceDTO priceDTO;
private PriceAadter priceAadter;
private NewtonClass newtonClass;
private MainHandler mainHandler;
private LinearLayout input_layout;
private LinearLayout text_list_layout;
private int count = 0;
private int sum_price = 0;
private boolean tuch_check = false;
private Timer timer2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        ContextProvider.setActivityContext(this);
        super.onCreate(savedInstanceState);
        SpeechRecognizerManager.getInstance().initializeLibrary(this);
        setContentView(R.layout.holiday_list);
        mainHandler = new MainHandler();
        //newtonClass = new NewtonClass(mainHandler,0);




        //client = newtonClass.getClient();
        //client.setSpeechRecognizeListener(this);
        input_layout = (LinearLayout)findViewById(R.id.input_layout);
        text_list_layout = (LinearLayout)findViewById(R.id.text_list_layout);
        listView = (ListView)findViewById(R.id.date_list);
        startBtn = (Button)findViewById(R.id.startNewton);
        startBtn.setOnClickListener(this);
        stopBtn = (Button)findViewById(R.id.stopNewton);
        stopBtn.setOnClickListener(this);
        text1 = (TextView)findViewById(R.id.text1);
        text1.setOnClickListener(this);
        text2 = (TextView)findViewById(R.id.text2);
        text2.setOnClickListener(this);
        text3 = (TextView)findViewById(R.id.text3);
        text3.setOnClickListener(this);
        text4 = (TextView)findViewById(R.id.text4);
        text4.setOnClickListener(this);

        selectText = (TextView)findViewById(R.id.select_text);
        priceText = (TextView)findViewById(R.id.input_price);
        inputdeletBtn = (Button)findViewById(R.id.input_deleteBtn);
        inputdeletBtn.setOnClickListener(this);

        countText = (TextView)findViewById(R.id.countText);
        sum_priceText = (TextView)findViewById(R.id.sumPriceText);

        priceDTOs = new ArrayList<>();
        priceDTO = new PriceDTO();

        if(ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED){
        if(ActivityCompat.shouldShowRequestPermissionRationale(this,Manifest.permission.RECORD_AUDIO)){
        //사용자가 취소한 경우 재요청.
        ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.RECORD_AUDIO},1);
        }else{
        //최초로 권한 요청하는 경우.
        ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.RECORD_AUDIO},1);
        }
        }else {

        //new NewtoneThread().execute(new NewtonDTO(client,client2,mainHandler,1));
            additem();

        }


        }

        @Override
        protected void onResume() {
                ContextProvider.setActivityContext(this);
                super.onResume();
                }

        @Override
        protected void onPause() {
                //ContextProvider.clearActivityContext();
            SpeechRecognizerManager.getInstance().initializeLibrary(this);
                super.onPause();
                }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        SpeechRecognizerManager.getInstance().finalizeLibrary();
    }

    private void additem(){
                priceAadter = new PriceAadter(this,priceDTOs);
                listView.setAdapter(priceAadter);
        }

    @Override
    public void onClick(View v) {
        int i = v.getId();
        switch (i){
            case R.id.startNewton:
                startNewtonBtn();
                break;
            case R.id.text1:
                itemAdd(text1);
                break;
            case R.id.text2:
                itemAdd(text2);
                break;
            case R.id.text3:
                itemAdd(text3);
                break;
            case R.id.text4:
                itemAdd(text4);
                break;
            case R.id.input_deleteBtn:
                Intent intent = new Intent(this, MainActivity.class);
                startActivity(intent);
                break;
            case R.id.stopNewton:
                newtonClass.stopNewton();
                priceText.setBackgroundColor(Color.WHITE);
                selectText.setBackgroundColor(Color.WHITE);
                text_list_layout.setBackgroundColor(Color.WHITE);
                break;
        }
    }

    private void startNewtonBtn(){
        newtonClass = new NewtonClass(mainHandler,0);
        input_layout.setVisibility(View.VISIBLE);
        newtonClass.startNewton();
        selectText.setBackgroundColor(Color.BLUE);
    }
    private void itemAdd(TextView text){
        if(tuch_check == true){

            selectText.setText(text.getText().toString());
            priceDTOs.add(new PriceDTO(text.getText().toString(),priceText.getText().toString()));
            priceAadter.notifyDataSetChanged();
            count++;
            sum_price += Integer.valueOf(priceText.getText().toString());
            countText.setText(String.valueOf(count));
            sum_priceText.setText(String.valueOf(sum_price));
            text_list_layout.setBackgroundColor(Color.WHITE);
            tuch_check = false;
            timer2.cancel();
            startNewtonBtn();
        }
    }



    public class MainHandler extends Handler {

        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);

            /*ArrayAdapter<String> adapter = new ArrayAdapter<String>(getBaseContext(), android.R.layout.simple_list_item_1, android.R.id.text1, texts);*/
            switch (msg.what){
                case 0:
                    Bundle bundle = (Bundle) msg.obj;
                    ArrayList<String> texts = bundle.getStringArrayList(SpeechRecognizerClient.KEY_RECOGNITION_RESULTS);
                    ArrayList<Integer> confs = bundle.getIntegerArrayList(SpeechRecognizerClient.KEY_CONFIDENCE_VALUES);
                    text1.setText(texts.get(0));
                    text2.setText(texts.get(1));
                    selectText.setText(texts.get(0));
                    selectText.setBackgroundColor(Color.WHITE);
                    priceText.setBackgroundColor(Color.BLUE);
                    newtonClass = new NewtonClass(mainHandler,1);
                    newtonClass.startNewton();
                    //result3.setText(texts.get(2));
                    //result4.setText(texts.get(3));


                    break;
                case 1:
                    Bundle bundle2 = (Bundle) msg.obj;
                    ArrayList<String> texts2 = bundle2.getStringArrayList(SpeechRecognizerClient.KEY_RECOGNITION_RESULTS);
                    ArrayList<Integer> confs2 = bundle2.getIntegerArrayList(SpeechRecognizerClient.KEY_CONFIDENCE_VALUES);
                    priceText.setText(texts2.get(0));
                    priceText.setBackgroundColor(Color.WHITE);
                    text_list_layout.setBackgroundColor(Color.BLUE);
                    tuch_check = true;

                    timer2 = new Timer();

                    timer2.schedule(new TimerTask() {
                        public void run() {
                            //itemAdd(text1);
                            mainHandler.sendEmptyMessage(3);
                            timer2.cancel(); //this will cancel the timer of the system
                            //startNewtonBtn();
                        }
                    }, 2000);
                    break;
                case 3:
                    itemAdd(text1);
                    startNewtonBtn();
                    break;
            }
        }
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        this.finish();
    }
}
