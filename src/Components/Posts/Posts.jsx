import "./posts.scss";

export default function Posts(props) {
  return (
    <div className="parent">
      <button type="button">Показать заказы</button>
      <div className="posts">
        <div className="post-1">
          <h1>номер поста</h1>
          <p>Фамилия, Имя</p>
          <p>номер</p>
          <p>email</p>
          <p>address</p>
        </div>
      </div>
    </div>
    // <div className="post-block">
    //   <div className="post-title">
    //     <h1>{props.object.title}</h1>
    //   </div>
    //   <div className="post-body">
    //     <p onClick={() => props.delPost(props.object.id)}>
    //       {props.object.body}
    //     </p>
    //   </div>
    // </div>
  );
}
