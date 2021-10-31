import "./CurrencyTickerItem.css";
const CurrencyTickerItem = ({ item, index }) => {
  // console.log(props);
  return (
    // <div className="container">
    //   <div className="list-boxes">
    //     <div className="box" key={index}>
    //       <div className="item">
    //         <span>Currency:</span>
    //         <span>{item.currency}</span>
    //       </div>
    //       <span className="item">{item.id}</span>
    //       <ul className="item">{item.status}</ul>
    //       <ul className="item">{item.price}</ul>
    //       <ul className="item">{item.price_date}</ul>
    //       <ul className="item">{item.price_timestamp}</ul>
    //       <ul className="item">{item.symbol}</ul>
    //       <ul className="item">{item.circulating_supply}</ul>
    //       <ul className="item">{item.max_supply}</ul>
    //       <ul className="item">{item.name}</ul>
    //       <ul className="item">{item.logo_url}</ul>
    //       <ul className="item">{item.market_cap}</ul>
    //       <ul className="item">{item.market_cap_dominance}</ul>
    //       <ul className="item">{item.transparent_market_cap}</ul>
    //       <ul className="item">{item.num_exchanges}</ul>
    //       <ul className="item">{item.num_pairs}</ul>
    //       <ul className="item">{item.num_pairs_unmapped}</ul>
    //       <ul className="item">{item.first_candle}</ul>
    //       <ul className="item">{item.first_trade}</ul>
    //       <ul className="item">{item.first_order_book}</ul>
    //       <ul className="item">{item.first_priced_at}</ul>
    //       <ul className="item">{item.rank}</ul>
    //       <ul className="item">{item.rank_delta}</ul>
    //       <ul className="item">{item.high}</ul>
    //       <ul className="item">{item.high_timestamp}</ul>
    //     </div>
    //   </div>
    // </div>
    <div className="item-container" key={index}>
      <div className="item-box">
        <ul>{item.currency}</ul>
        <ul>{item.id}</ul>
        <ul>{item.status}</ul>
        <ul>{item.price}</ul>
        <ul className="item">{item.price}</ul>
        <ul className="item">{item.price_date}</ul>
        <ul className="item">{item.price_timestamp}</ul>
        <ul className="item">{item.symbol}</ul>
        <ul className="item">{item.circulating_supply}</ul>
        <ul className="item">{item.max_supply}</ul>
        <ul className="item">{item.name}</ul>
        <ul className="item">{item.logo_url}</ul>
        <ul className="item">{item.market_cap}</ul>
        <ul className="item">{item.market_cap_dominance}</ul>
        <ul className="item">{item.transparent_market_cap}</ul>
        <ul className="item">{item.num_exchanges}</ul>
        <ul className="item">{item.num_pairs}</ul>
        <ul className="item">{item.num_pairs_unmapped}</ul>
        <ul className="item">{item.first_candle}</ul>
        <ul className="item">{item.first_trade}</ul>
        <ul className="item">{item.first_order_book}</ul>
        <ul className="item">{item.first_priced_at}</ul>
        <ul className="item">{item.rank}</ul>
        <ul className="item">{item.rank_delta}</ul>
        <ul className="item">{item.high}</ul>
        <ul className="item">{item.high_timestamp}</ul>
      </div>
    </div>
  );
};
export default CurrencyTickerItem;
