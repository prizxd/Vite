import "./posts.scss";

export default function Posts(props) {
  return (
    <div className="post">
      <h1>Offer number: {Math.floor(Math.random(101) * 10).toFixed()}</h1>
      <p>
        Who: {props.obj.surName} {props.obj.name}
      </p>
      <p>Number: {props.obj.number}</p>
      <p>Email: {props.obj.email}</p>
      <p>Address: {props.obj.address}</p>
    </div>
  );
}
