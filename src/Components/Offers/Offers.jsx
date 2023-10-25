import "../Offers/offers.scss";

export default function Offers(props) {
  const colorTitle = props.colorTitle;
  const colorPrice = props.colorPrice;

  return (
    <div className="offer-block">
      <h1 id={colorTitle} className="title">
        {props.title}
      </h1>
      <p id={colorPrice} className="price">
        {props.price} руб/мес
      </p>
      <p className="speed">до {props.speed} Мбит/сек</p>
      <p className="text">{props.text}</p>
    </div>
  );
}
