package com.ttubong.holiday;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.ttubong.R;

import java.util.ArrayList;

/**
 * Created by Sinyoodong on 2016-12-12.
 */

public class PriceAadter extends BaseAdapter{

    private Context mContext;
    private ArrayList<PriceDTO> priceDTOs;
    private LayoutInflater inf;
    public PriceAadter(Context mContext, ArrayList<PriceDTO> priceDTOs) {
        this.mContext = mContext;
        this.priceDTOs = priceDTOs;
        inf = (LayoutInflater)mContext.getSystemService
                (Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getCount() {
        return priceDTOs.size();
    }

    @Override
    public Object getItem(int position) {
        return priceDTOs.get(position);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView==null) {
            convertView = inf.inflate(R.layout.priceitem, null);
        }

        TextView result1 = (TextView)convertView.findViewById(R.id.result_item1);
        //TextView result2 = (TextView)convertView.findViewById(R.id.result_item2);
        TextView price = (TextView)convertView.findViewById(R.id.price_item);

        result1.setText(priceDTOs.get(position).getResult1());
        //result2.setText(priceDTOs.get(position).getResult2());

        price.setText(priceDTOs.get(position).getPrice());

        return convertView;
    }

    @Override
    public long getItemId(int position) {
        return position;
    }
}
