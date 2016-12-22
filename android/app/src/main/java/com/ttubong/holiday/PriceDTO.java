package com.ttubong.holiday;

/**
 * Created by Sinyoodong on 2016-12-12.
 */

public class PriceDTO {
    private String result1;
    private String result2;
    private String result3;
    private String result4;

    private String price;

    public PriceDTO() {
    }

    public PriceDTO(String result1, String price) {
        this.result1 = result1;

        this.price = price;
    }

    public String getResult1() {
        return result1;
    }

    public void setResult1(String result1) {
        this.result1 = result1;
    }

    public String getResult2() {
        return result2;
    }

    public void setResult2(String result2) {
        this.result2 = result2;
    }

    public String getResult3() {
        return result3;
    }

    public void setResult3(String result3) {
        this.result3 = result3;
    }

    public String getResult4() {
        return result4;
    }

    public void setResult4(String result4) {
        this.result4 = result4;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
