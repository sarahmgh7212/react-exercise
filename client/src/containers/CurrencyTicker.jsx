import { useState, useEffect } from "react";
import CurrencyTickerItem from "./../components/CurrencyTickerItem/CurrencyTickerItem";
import "./CurrencyTicker.css";
const Currencyticker = (props) => {
  const [apiResponse, setApiResponse] = useState([]);
  const callAPI = () => {
    //   const name = name.replace(/[^a-zA-Z0-9 ]/g, "");
    fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=9b87e75668824096e6699f7ecfaea2c54f64bfd9&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1"
    )
      .then((res) => res.json())
      .then((res) => setApiResponse(res));
  };

  useEffect(() => {
    callAPI();
  }, [apiResponse]);

  return (
    <div className="grid-container">
      <div className="column-one">
        <div></div>
        <div>currency</div>

        <div> id</div>

        <div>status</div>

        <div>price</div>

        <div>price_date</div>

        <div>price_timestamp</div>

        <div>symbol</div>

        <div>circulating_supply</div>

        <div>max_supply</div>

        <div>name</div>

        <div>logo_url</div>

        <div>market_cap</div>

        <div>market_cap_dominance</div>

        <div>transparent_market_cap</div>

        <div>num_exchanges</div>

        <div>num_pairs</div>

        <div>num_pairs_unmapped</div>

        <div>first_candle</div>

        <div>first_trade</div>

        <div>first_order_book</div>

        <div>first_priced_at</div>

        <div>rank</div>

        <div>rank_delta</div>

        <div>high</div>

        <div>high_timestamp</div>
      </div>
      {apiResponse.map((item, index) => (
        <CurrencyTickerItem item={item} index={index} />
      ))}
    </div>
  );
};

export default Currencyticker;
