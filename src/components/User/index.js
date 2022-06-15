import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const User = ({ user }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div
        className="card text-white card-has-bg click-col"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/600x900/?tech,street")',
        }}
      >
        <img
          className="card-img d-none"
          src="https://source.unsplash.com/600x900/?tech,street"
          alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2">{user.company.name}</small>
            <h4 className="card-title mt-0 ">
              <a className="text-white" herf="/#">
                {user.username}
              </a>
            </h4>
            <small>
              <i className="far fa-clock" /> {user.phone}
            </small>
          </div>
          <div className="card-footer">
            <div className="media">
              <img
                className="mr-3 rounded-circle"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="user"
                style={{ maxWidth: 50 }}
              />
              <div className="media-body">
                <h6 className="my-0 text-white d-block">{user.name}</h6>
                <small>{user.email}</small>
                <div className="btn btn-accent btn-action-lg btn-raised">
                <i class="material-icons">Add</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
