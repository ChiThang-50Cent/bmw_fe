import React from "react";

export default function ShowProfile({ infor }) {
  return (
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="row mt-2">
          <div className="col-md-12">
            <label className="labels">
              <h4>Name</h4>
            </label>
            <p>{infor[0]}</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">
              <h4>Mobile</h4>
            </label>
            <p>{infor[1]}</p>
          </div>
          <div className="col-md-12">
            <label className="labels">
              <h4>Address</h4>
            </label>
            <p>{infor[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
