import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import EditProfile from "./EditProfile";
import "./Profile.css";
import ShowProfile from "./ShowProfile";

export default function Profile() {
  const state = useContext(GlobalState);
  const [infor] = state.userAPI.infor;
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="container rounded bg-white mt-5 mb-5 pt-6">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">{infor[0]}</span>
            <button
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
        {isEdit ? <EditProfile infor={infor} /> : <ShowProfile infor={infor} />}
      </div>
    </div>
  );
}
