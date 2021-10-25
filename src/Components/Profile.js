import React from "react";
import profile1 from "./images/profile1.gif";
import profile2 from "./images/profile2.gif";
import profile3 from "./images/profile3.gif";

const Profile = () => {
  return (
    <>
      <div className="profile-bg text-center ">
        <h1
          className="profile-heading display-4 animate__animated animate__slideInRight"
          style={{ fontFamily: "Futura-Medium,sans-serif" }}
        >
          The right team for job!
        </h1>
        <div className="container d-flex justify-content-between align-items-center">
          <div class="profile d-flex justify-content-center align-items-center ">
            <img
              src={profile1}
              className="img-fluid profile-img animate__animated animate__bounce animate__infinite"
              alt="Profile_picture"
            />
            <p className="profile-member">Team Member</p>
            <p className="profile-member-position">founder</p>
          </div>
          <div class="profile d-flex justify-content-center align-items-center ">
            <img
              src={profile2}
              className="img-fluid profile-img  animate__animated animate__bounce animate__infinite"
              alt="Profile_picture"
            />
            <p className="profile-member">Team Member</p>
            <p className="profile-member-position">designer</p>
          </div>
          <div class="profile d-flex justify-content-center align-items-center ">
            <img
              src={profile3}
              className="img-fluid profile-img animate__animated animate__bounce animate__infinite"
              alt="Profile_picture"
            />
            <p className="profile-member">Team Member</p>
            <p className="profile-member-position">animator</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
