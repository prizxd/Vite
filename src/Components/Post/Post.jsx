import "./post.scss";

export default function Posts(props) {
  return (
    <div className="post-block">
      <div className="post-title">
        <h1>{props.object.title}</h1>
      </div>
      <div className="post-body">
        <p onClick={() => props.delPost(props.object.id)}>
          {props.object.body}
        </p>
      </div>
    </div>
  );
}
