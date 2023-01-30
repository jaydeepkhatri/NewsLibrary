import { useContext } from "react";
import { AppContext } from "../../App";
import "./finance.scss";

const Finance = () => {
    const { financeRates } = useContext(AppContext)

    const handleRateInput = (rate) => {return rate.toFixed(2);}

    return (
        <>
            <p className="title">Financial Market / (1 USD) 💹</p>
            <div className="finance__info">
                <div className="finance__rate">
                    <span className="finance__title">Euro 🇪🇺</span>
                    <span>€{handleRateInput(financeRates['EUR'])}</span>
                </div>
                <div className="finance__rate">
                    <span className="finance__title">Indian Rupee 🇮🇳</span>
                    <span>₹{handleRateInput(financeRates['INR'])}</span>
                </div>
                <div className="finance__rate">
                    <span className="finance__title">Japanese Yen 🇯🇵</span>
                    <span>¥{handleRateInput(financeRates['JPY'])}</span>
                </div>
                <div className="finance__rate">
                    <span className="finance__title">British Pound 🇬🇧</span>
                    <span>£{handleRateInput(financeRates['GBP'])}</span>
                </div>
                <div className="finance__rate">
                    <span className="finance__title">Chinese Yuan 🇨🇳</span>
                    <span>¥{handleRateInput(financeRates['CNY'])}</span>
                </div>
                <div className="finance__rate">
                    <span className="finance__title">Nepalese Rupee 🇳🇵</span>
                    <span>रू{handleRateInput(financeRates['NPR'])}</span>
                </div>
                <div className="finance__rate">
                    <span className="finance__title">Vietnamese dong 🇻🇳</span>
                    <span>₫{handleRateInput(financeRates['VND'])}</span>
                </div>
                <div className="finance__rate">
                    <span className="finance__title">Singapore dollar 🇸🇬</span>
                    <span>S${handleRateInput(financeRates['SGD'])}</span>
                </div>
                <div className="finance__rate">
                    <span className="finance__title">Brazilian real 🇧🇷</span>
                    <span>R${handleRateInput(financeRates['BRL'])}</span>
                </div>
            </div>

        </>
    )
}

export default Finance;