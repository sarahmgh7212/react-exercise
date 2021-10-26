import "./Item.css";
const Item = ({ emoji, index }) => {
  return (
    <div className="container">
      <div className="list-boxes">
        <div className="box" key={index}>
          <span className="item">{emoji.symbol}</span>
          <span className="item">{emoji.title}</span>
        </div>
      </div>
    </div>
  );
};
export default Item;
