import React from 'react';
import {currenciesData} from '../../data/data';
import { setCurrency } from './currencyFilterSlice';

export default function CurrencyFilter({ currencyFilter, dispatch}) {
    const onClickHandler = (currency) => {
        dispatch(setCurrency(currency));
    }

    return (
        <div id='currency-filters-container'>
            <h3>Choose a currency</h3>
            {currenciesData.map(createCurrencyButton)}
        </div>
    )

    function createCurrencyButton(currency){
        return (
            <button
                className={`currency-button ${currencyFilter === currency && 'selected'}`}
                key={currency}
                onClick={() => onClickHandler(currency)}
            >
                {currency}
            </button>
        )
    }
}
