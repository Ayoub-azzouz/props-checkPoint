import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

export default function Profile({fullName,bio,profession,handleName,children}) {
  return (
    <div className="profile-card">
      <div className="avatar">{children}</div>
      <div className="info-container">
        <h3>
          <span className="label"> Name : </span>
          {fullName}
        </h3>
        <p>
          {" "}
          <span className="label"> Profession : </span>
          {profession}
        </p>
        <p>
          {" "}
          <span className="label"> Bio : </span>
          {bio}{" "}
        </p>

        <button
          onClick={() => handleName(fullName)}
          className="btn btn-profile"
        >
          Say Hello 
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func,
};

Profile.defaultProps = {
  fullName: " ",
  profession: "",
  bio: " ",
  handleName: () => {
    alert(" ");
  },
};
