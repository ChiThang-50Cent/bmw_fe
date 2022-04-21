import React from "react";

export default function EditProfile({ infor }) {
  const saveProfile = () => {};
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
