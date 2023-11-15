import "./posts.scss";

export default function Posts(props) {
  return (
    <div className="post">
      <p>
        Who: {props.obj.surName} {props.obj.name}
      </p>
      <p>Number: {props.obj.number}</p>
      <p>Email: {props.obj.email}</p>
      <p>Address: {props.obj.address}</p>
    </div>
  );
}
