import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

export default function EditProfile({ infor }) {
  const state = useContext(GlobalState);
  const updateInfo = state.userAPI.updateInfo;
  const saveProfile = () => {
    const input = document.querySelectorAll("#edit_ input");
    const data = {
      name: input[0].value || infor[0],
      phone: input[1].value || infor[1],
      address: input[2].value || infor[2],
    };
    updateInfo(data);
  };
  return (
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="row mt-2">
          <div className="col-md-12">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={infor[0]}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder={infor[1]}
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Address Line 1</label>
            <input
              type="text"
              className="form-control"
              placeholder={infor[2]}
            />
          </div>
          <div className="mt-5 text-center">
            <button
              className="btn btn-primary profile-button"
              type="button"
              onClick={saveProfile}
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
