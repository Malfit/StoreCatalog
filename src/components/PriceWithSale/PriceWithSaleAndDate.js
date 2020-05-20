import React from 'react';
import './PriceWithSaleAndDate.css';

const PriceWithSaleAndDate = ({ price, sale, date }) => {

    //const realPrice = price;
    let priceClass = 'price';
    let grn = '\u20B4';
    let realPrice = '';
    if (sale) {
        realPrice = (price/100*(100-sale)).toFixed(0);
        priceClass+='Sale';
    } else {
        realPrice = '';
        grn = '';
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
                {date}
            </span>
        </div>
    )
    
    
}

export default PriceWithSaleAndDate;
