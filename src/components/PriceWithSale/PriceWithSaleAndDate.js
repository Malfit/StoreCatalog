import React from 'react';
import './PriceWithSaleAndDate.css';
import moment from 'moment';

const PriceWithSaleAndDate = ({ price, sale, date }) => {
    const today = new Date ();
    let priceClass = 'price';
    let realDate = 'End of discount ';
    let grn = '\u20B4';
    let realPrice = '';
    if (sale && (date > today) ) {
        realDate += moment(date).from(today);
        realPrice = (price/100*(100-sale)).toFixed(0);
        priceClass+='Sale';
    } else {
        realPrice = '';
        grn = '';
        realDate = '';
    } 
    return (
        <div className='priceSaleDate'>
            <span className={priceClass}>
                {price} {'\u20B4'}
            </span>
            <span>    </span>
            <span className='price'>
                {realPrice} {grn}
            </span><br/>
            <span>
                 {realDate}   
            </span>
        </div>
    ) 
}

export default PriceWithSaleAndDate;
