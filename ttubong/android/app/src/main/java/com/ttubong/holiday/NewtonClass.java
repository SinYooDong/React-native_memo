package com.ttubong.holiday;

import android.os.Bundle;
import android.os.Message;
import android.util.Log;

import net.daum.mf.speech.api.SpeechRecognizeListener;
import net.daum.mf.speech.api.SpeechRecognizerClient;

import java.util.ArrayList;

/**
 * Created by Sinyoodong on 2016-12-20.
 */

public class NewtonClass implements SpeechRecognizeListener{

    private SpeechRecognizerClient.Builder builder;
    private SpeechRecognizerClient client;
    private NewtonActivity.MainHandler mainHandler;
    private boolean startCheck = false;
    private int check = 0;//0 -> 이름 , 1 -> 금액 , 3 -> 그냥 종료.
    private  Message message;

    public NewtonClass(NewtonActivity.MainHandler mainHandler,int check) {
        builder = new SpeechRecognizerClient.Builder().
                setApiKey("a4d17fdd6e7b6c710de32c9b387a2732");     // 발급받은 api key
        if(check == 0){
            builder.setServiceType(SpeechRecognizerClient.SERVICE_TYPE_WEB);
        }else if(check == 1){
            builder.setServiceType(SpeechRecognizerClient.SERVICE_TYPE_WORD).setUserDictionary("30000\n50000\n100000\n200000\n300000\n400000\n500000\n600000\n700000\n800000\n900000\n1000000\n");
        }

        client = builder.build();
        client.setSpeechRecognizeListener(this);
        this.mainHandler = mainHandler;
        this.check = check;
    }



    public void startNewton(){
        client.startRecording(true);
    }

    public void stopNewton(){
        check = 3;
        client.stopRecording();
    }

    public SpeechRecognizerClient getClient(){

        return client;
    }

    @Override
    public void onReady() {
    }

    @Override
    public void onBeginningOfSpeech() {
        startCheck = true;
    }

    @Override
    public void onEndOfSpeech() {

    }

    @Override
    public void onError(int i, String s) {
        switch (i){

            case SpeechRecognizerClient.ERROR_AUDIO_FAIL:
                Log.e("Error","음성입력 불가 또는 마이크 접근 x");
                break;

            case SpeechRecognizerClient.ERROR_AUTH_FAIL:
                Log.e("Error","키인증 실패");
                break;

            case SpeechRecognizerClient.ERROR_NETWORK_FAIL:
                Log.e("Error","네트워크 오류");
                break;

            case SpeechRecognizerClient.ERROR_NETWORK_TIMEOUT:
                Log.e("Error","네트워크 타임아웃");
                break;

            case SpeechRecognizerClient.ERROR_SERVER_FAIL:
                Log.e("Error","서버 오류");
                break;

            case SpeechRecognizerClient.ERROR_SERVER_TIMEOUT:
                Log.e("Error","서버 타임 아웃");
                break;

            case SpeechRecognizerClient.ERROR_NO_RESULT:
                Log.e("Error","결과없음");
                client.startRecording(true);
                break;

            case SpeechRecognizerClient.ERROR_CLIENT:
                Log.e("Error","클라에 내부 로직 오류");
                break;
            case SpeechRecognizerClient.ERROR_RECOGNITION_TIMEOUT:
                Log.e("Error","전체 소요시간에 대한 타임아웃");
                break;
            case SpeechRecognizerClient.ERROR_SERVER_UNSUPPORT_SERVICE:
                Log.e("Error","제공하지 않는 서비스");
                break;
            case SpeechRecognizerClient.ERROR_SERVER_USERDICT_EMPTY:
                Log.e("Error","입력된 사용자 사전에 내용이 없음");
                break;
            case SpeechRecognizerClient.ERROR_SERVER_ALLOWED_REQUESTS_EXCESS:
                Log.e("Error","요청횟수 초과");
                //Toast.makeText,"횟수 초과",Toast.LENGTH_SHORT).show();
                break;



        }
    }

    @Override
    public void onPartialResult(String s) {

    }

    @Override
    public void onResults(Bundle bundle) {
        ArrayList<String> texts =  bundle.getStringArrayList(SpeechRecognizerClient.KEY_RECOGNITION_RESULTS);
        message = new Message();
        message.what = check;
        message.obj = bundle;

    }

    @Override
    public void onAudioLevel(float v) {
        if(v < 0.2 && startCheck == true){
            client.stopRecording();
        }
    }

    @Override
    public void onFinished() {
        startCheck = false;
        mainHandler.sendMessage(message);
    }



}
