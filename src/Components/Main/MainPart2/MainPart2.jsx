import React from "react";
import "./MainPart2.scss";
export default function MainPart2() {
  return (
    <div className="MainPart2">
      <div className="first-block">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <ul>
          <img src="/Logo01.svg" alt=""></img>
          <img src="/Logo-1.svg" alt=""></img>
          <img src="/Logo-2.svg" alt=""></img>
          <img src="/Logo-3.svg" alt=""></img>
          <img src="/Logo-4.svg" alt=""></img>
          <img src="/Logo-5.svg" alt=""></img>
          <img src="/Logo-6.svg" alt=""></img>
        </ul>
      </div>
      <div className="second-block">
        <h2>Manage your entire community in a single system</h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className="third-block">
        <div className="card-1">
          <img src="/Icon1.svg" alt="" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="card-2">
          <img src="/Icon2.svg" alt="" />
          <h3>National Associations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="card-3">
          <img src="/Icon3.svg" alt="" />
          <h3>Clubs And Groups</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
