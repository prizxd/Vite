import { useState } from "react";
import "./form.scss";
export default function Form(props) {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="header">
      <div className="wrapper">
        <div className="underWrapper-1">
          <div className="block_1">
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              className="name"
              type="text"
              placeholder="ИМЯ"
              required=""
            />
            <input
              onChange={(event) => setSurName(event.target.value)}
              value={surName}
              className="surname"
              type="text"
              placeholder="ФАМИЛИЯ"
              required=""
            />
          </div>
          <div className="block_2">
            <input
              onChange={(event) => setNumber(event.target.value)}
              value={number}
              className="number"
              type="text"
              placeholder="ТЕЛЕФОН"
              required=""
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              className="email"
              type="text"
              placeholder="ЭЛЕКТРОННАЯ ПОЧТА"
              required=""
            />
          </div>
        </div>
        <div className="underWrapper-2">
          <div className="block_3">
            <textarea
              onChange={(event) => setAddress(event.target.value)}
              value={address}
              className="address"
              type="text"
              placeholder="АДРЕС ДОСТАВКИ"
              name=""
              id=""
              cols="30"
              rows="10"
              required=""
            ></textarea>
          </div>
          <div className="block_4">
            <button
              type="button"
              onClick={() => {
                props.addPost(name, surName, number, email, address);
                setName("");
                setSurName("");
                setNumber("");
                setAddress("");
                setEmail("");
              }}
            >
              ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
